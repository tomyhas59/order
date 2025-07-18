import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import Notification from "../components/Notification";

const HAND_SIZE = 8;

function createDeck() {
  return Array.from({ length: 52 }, (_, i) => ({
    id: i + 1,
    label: `Card ${i + 1}`,
  }));
}

export default function Poker() {
  const [deck, setDeck] = useState(createDeck());
  const [hand, setHand] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [animCard, setAnimCard] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const deckRef = useRef(null);
  const slotsRef = useRef([]);
  slotsRef.current = [];

  const addSlotRef = (el) => {
    if (el && !slotsRef.current.includes(el)) slotsRef.current.push(el);
  };

  useEffect(() => {
    if (hand.length === 0) {
      const firstHand = deck.slice(0, HAND_SIZE);
      setHand(firstHand);
      setDeck(deck.slice(HAND_SIZE));
    }
  }, [deck, hand]);

  const toggleSelect = (id) => {
    if (isAnimating) return;
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const animateDrawCard = (card, targetIndex) => {
    return new Promise((resolve) => {
      if (!deckRef.current || !slotsRef.current[targetIndex]) {
        resolve();
        return;
      }
      const deckRect = deckRef.current.getBoundingClientRect();
      const slotRect = slotsRef.current[targetIndex].getBoundingClientRect();

      setAnimCard({
        card,
        startX: deckRect.left,
        startY: deckRect.top,
        endX: slotRect.left,
        endY: slotRect.top,
        key: card.id,
      });

      requestAnimationFrame(() => {
        const animEl = document.getElementById(`anim-card-${card.id}`);
        if (!animEl) {
          resolve();
          return;
        }
        gsap.set(animEl, { x: 0, y: 0, opacity: 1 });
        gsap.to(animEl, {
          duration: 0.8,
          x: slotRect.left - deckRect.left,
          y: slotRect.top - deckRect.top,
          ease: "power2.out",
          onComplete: () => {
            resolve();
          },
        });
      });
    });
  };

  const onDiscard = async () => {
    if (isAnimating) return;
    if (selectedIds.length === 0) {
      alert("카드를 선택하세요");
      return;
    }
    if (deck.length < selectedIds.length) {
      alert("덱에 카드가 부족합니다");
      return;
    }

    setIsAnimating(true);

    const newHand = hand.filter((c) => !selectedIds.includes(c.id));
    setHand(newHand);
    setSelectedIds([]);

    const cardsToDraw = deck.slice(0, selectedIds.length);
    let currentDeck = deck.slice(selectedIds.length);

    for (let i = 0; i < cardsToDraw.length; i++) {
      await animateDrawCard(cardsToDraw[i], newHand.length + i);
      setHand((prev) => [...prev, cardsToDraw[i]]);
      currentDeck = currentDeck.slice(1);
      setDeck(currentDeck);
      setAnimCard(null);
      await new Promise((r) => setTimeout(r, 200));
    }

    setIsAnimating(false);
  };

  return (
    <Container>
      <Notification />

      <Deck ref={deckRef}>덱 ({deck.length}장)</Deck>
      <Hand>
        {[...Array(HAND_SIZE)].map((_, idx) => {
          const card = hand[idx];
          const selected = card && selectedIds.includes(card.id);
          return (
            <CardSlot
              key={idx}
              ref={addSlotRef}
              selected={selected}
              onClick={() => card && toggleSelect(card.id)}
            >
              {card ? card.label : ""}
            </CardSlot>
          );
        })}
      </Hand>
      {animCard && (
        <AnimCard
          id={`anim-card-${animCard.key}`}
          style={{
            position: "fixed",
            left: animCard.startX,
            top: animCard.startY,
          }}
        >
          {animCard.card.label}
        </AnimCard>
      )}
      <Button onClick={onDiscard} disabled={isAnimating}>
        선택 카드 버리기 & 드로우
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  max-width: 720px;
  margin: 40px auto;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Deck = styled.div`
  width: clamp(60px, 12vw, 80px);
  height: calc(clamp(60px, 12vw, 80px) * 1.5);
  margin: 0 auto 20px;
  background: linear-gradient(135deg, #1565c0, #1e88e5);
  border-radius: 12px;
  color: white;
  font-weight: bold;
  line-height: calc(clamp(60px, 12vw, 80px) * 1.5);
  user-select: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const Hand = styled.div`
  display: flex;
  justify-content: center;
  gap: clamp(8px, 1.5vw, 12px);
  margin-bottom: 20px;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

const CardSlot = styled.div`
  width: clamp(60px, 12vw, 80px);
  height: calc(clamp(60px, 12vw, 80px) * 1.5);
  background: ${({ selected }) => (selected ? "#a0d2ff" : "white")};
  border: 2px solid ${({ selected }) => (selected ? "#1565c0" : "#ddd")};
  border-radius: 12px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  line-height: calc(clamp(60px, 12vw, 80px) * 1.5);
  font-weight: bold;
  color: #333;
  cursor: ${({ children }) => (children ? "pointer" : "default")};
  user-select: none;
  transition: background-color 0.3s, border-color 0.3s;
`;
const AnimCard = styled.div`
  width: clamp(60px, 12vw, 80px);
  height: calc(clamp(60px, 12vw, 80px) * 1.5);
  position: fixed;
  border-radius: 10px;
  background-color: #1565c0;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  user-select: none;
  z-index: 9999;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 18px;
  background: #1565c0;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;

  &:hover:enabled {
    background: #0d3b75;
  }

  &:disabled {
    background: #999;
    cursor: default;
  }
`;
