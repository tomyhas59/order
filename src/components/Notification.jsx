// Notification.jsx
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

const messages = [
  "🔥 여름 한정 세일 최대 50%!",
  "🚀 지금 가입하면 1만원 쿠폰 즉시 지급!",
  "🎁 친구 초대하면 포인트 2배!",
  "📦 무료 배송, 반품비 지원까지!",
  "🛒 장바구니 쿠폰 받으셨나요?",
];

const Notification = () => {
  const wrapperRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper) return;

    const slideWidth = wrapper.offsetWidth;
    const totalSlides = messages.length;

    timelineRef.current = gsap.timeline({ repeat: -1 });

    for (let i = 1; i <= totalSlides; i++) {
      timelineRef.current.to(wrapper, {
        x: -slideWidth * i,
        duration: 0.8,
        delay: 2.2,
        ease: "power2.inOut",
      });
    }

    // 처음 위치로 리셋 (무한 루프)
    timelineRef.current.set(wrapper, { x: 0 });

    return () => {
      timelineRef.current.kill();
    };
  }, []);

  return (
    <SliderContainer>
      <SliderTrack ref={wrapperRef}>
        {[...messages, messages[0]].map((msg, idx) => (
          <Slide key={idx}>{msg}</Slide>
        ))}
      </SliderTrack>
    </SliderContainer>
  );
};

export default Notification;

const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  height: 60px;
  background: #f9f9f9;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
`;

const SliderTrack = styled.div`
  display: flex;
  width: fit-content;
`;

const Slide = styled.div`
  min-width: 100%;
  text-align: center;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 1rem 0;
  color: #333;
  background-color: #fdfdfd;
`;
