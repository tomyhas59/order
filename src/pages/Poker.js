import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { create } from "zustand";
import gsap from "gsap";

// Zustand 상태 관리
const useStore = create((set) => ({
  deck: Array.from({ length: 52 }, (_, i) => ({
    id: i + 1,
    label: `Card ${i + 1}`,
  })),
  hand: [],
  selectedIds: [],

  setDeck: (deck) => set({ deck }),
  setHand: (hand) => set({ hand }),
  setSelectedIds: (ids) => set({ selectedIds: ids }),
}));

const CARD_WIDTH = 80;
const CARD_HEIGHT = 120;
const HAND_SIZE = 8;

const Poker = () => {
  const { deck, hand, selectedIds, setDeck, setHand, setSelectedIds } =
    useStore();

  // refs: 덱 영역, 카드 슬롯들
  const deckRef = useRef(null);
  const slotsRef = useRef([]);
  slotsRef.current = [];

  // 카드 슬롯 ref 등록
  const addSlotRef = (el) => {
    if (el && !slotsRef.current.includes(el)) slotsRef.current.push(el);
  };

  // 첫 렌더 시 8장 핸드에 뽑기
  useEffect(() => {
    if (hand.length === 0) {
      const firstDraw = deck.slice(0, HAND_SIZE);
      setHand(firstDraw);
      setDeck(deck.slice(HAND_SIZE));
    }
  }, []);

  // 카드 선택 토글
  const toggleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((sid) => sid !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  // 카드 버리기 + 덱에서 슈슉 드로우 애니메이션
  const onDiscard = () => {
    if (selectedIds.length === 0) {
      alert("카드를 선택하세요");
      return;
    }
    if (!deckRef.current) return;

    const deckRect = deckRef.current.getBoundingClientRect();

    // 1. 버릴 카드 제외한 나머지 카드
    const newHand = hand.filter((card) => !selectedIds.includes(card.id));

    setHand(newHand);

    // 2. 덱에서 버린 카드 수만큼 드로우할 카드
    const drawCount = selectedIds.length;
    const drawnCards = deck.slice(0, drawCount);
    const newDeck = deck.slice(drawCount);

    // 3. 최종 핸드 (앞당겨진 카드 + 새로 드로우한 카드)
    const finalHand = [...newHand, ...drawnCards];
    setTimeout(() => {
      setHand(finalHand);
      setDeck(newDeck);
      setSelectedIds([]);
    }, 500);

    // 4. 애니메이션: 덱에서 각 새로 드로우한 카드 슬롯으로 슈슉 이동
    drawnCards.forEach((card, idx) => {
      const slotIndex = newHand.length + idx; // 새 카드가 들어갈 슬롯 인덱스
      const slotEl = slotsRef.current[slotIndex];
      if (!slotEl) return;

      // 임시 카드 엘리먼트 생성 (덱 위치에서 시작)
      const animCard = document.createElement("div");
      animCard.textContent = card.label;
      Object.assign(animCard.style, {
        position: "fixed",
        left: `${deckRect.left}px`,
        top: `${deckRect.top}px`,
        width: `${CARD_WIDTH}px`,
        height: `${CARD_HEIGHT}px`,
        background: "#1565c0",
        borderRadius: "10px",
        color: "white",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        pointerEvents: "none",
        userSelect: "none",
        zIndex: 9999,
      });
      document.body.appendChild(animCard);

      const slotRect = slotEl.getBoundingClientRect();

      gsap.to(animCard, {
        duration: 0.8,
        ease: "power2.out",
        left: slotRect.left,
        top: slotRect.top,
        onComplete: () => {
          animCard.remove();
        },
      });
    });
  };

  return (
    <Container>
      <Deck ref={deckRef}>덱 ({deck.length}장)</Deck>

      <Hand>
        {[...Array(HAND_SIZE)].map((_, idx) => {
          const card = hand[idx];
          const isSelected = card && selectedIds.includes(card.id);
          return (
            <CardSlot
              key={idx}
              ref={addSlotRef}
              onClick={() => card && toggleSelect(card.id)}
              selected={isSelected}
            >
              {card ? card.label : ""}
            </CardSlot>
          );
        })}
      </Hand>

      <Button onClick={onDiscard}>선택 카드 버리기 & 드로우</Button>
    </Container>
  );
};

export default Poker;

// 스타일 컴포넌트

const Container = styled.div`
  width: 720px;
  margin: 40px auto;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Deck = styled.div`
  width: ${CARD_WIDTH}px;
  height: ${CARD_HEIGHT}px;
  margin: 0 auto 20px;
  background: linear-gradient(135deg, #1565c0, #1e88e5);
  border-radius: 12px;
  color: white;
  font-weight: bold;
  line-height: ${CARD_HEIGHT}px;
  user-select: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const Hand = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
`;

const CardSlot = styled.div`
  width: ${CARD_WIDTH}px;
  height: ${CARD_HEIGHT}px;
  background: ${({ selected }) => (selected ? "#a0d2ff" : "white")};
  border: 2px solid ${({ selected }) => (selected ? "#1565c0" : "#ddd")};
  border-radius: 12px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  line-height: ${CARD_HEIGHT}px;
  font-weight: bold;
  color: #333;
  cursor: ${({ children }) => (children ? "pointer" : "default")};
  user-select: none;
  transition: background-color 0.3s, border-color 0.3s;
  user-select: none;
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

  &:hover {
    background: #0d3b75;
  }
`;
