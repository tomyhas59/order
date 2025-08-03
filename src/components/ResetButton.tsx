import React from "react";
import styled from "styled-components";
import { useFilterStore } from "../store/filterStore";

const Button = styled.button`
  background-color: #ef4444;
  padding: 12px 24px;
  color: #fff;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #dc2626;
  }
`;

const ResetButton: React.FC = () => {
  const reset = useFilterStore((state) => state.reset);

  return (
    <Button onClick={reset} aria-label="검색 조건 초기화">
      초기화
    </Button>
  );
};

export default ResetButton;
