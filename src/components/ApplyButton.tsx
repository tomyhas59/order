import React from "react";
import styled from "styled-components";
import { useFilterStore } from "../store/filterStore";

const Button = styled.button`
  padding: 12px 24px;
  color: #fff;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  transition: background-color 0.3s ease;
  background-color: #4f46e5;
  &:hover {
    background-color: #3730a3;
  }
`;

const ApplyButton: React.FC = () => {
  const location = useFilterStore((state) => state.location);
  const jobCategory = useFilterStore((state) => state.jobCategory);
  const period = useFilterStore((state) => state.period);
  const weekdays = useFilterStore((state) => state.weekdays);
  const time = useFilterStore((state) => state.time);
  const gender = useFilterStore((state) => state.gender);
  const education = useFilterStore((state) => state.education);

  const handleApply = () => {
    console.log("현재 필터 상태:", {
      location,
      jobCategory,
      period,
      weekdays,
      time,
      gender,
      education,
    });
    alert("조건이 적용되었습니다!");
  };

  return <Button onClick={handleApply}>지원하기</Button>;
};

export default ApplyButton;
