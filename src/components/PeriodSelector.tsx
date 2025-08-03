import React from "react";
import styled from "styled-components";
import { useFilterStore } from "../store/filterStore";
import { periodOptions } from "../data/periodOptions";

const Container = styled.div``;

const Title = styled.h3`
  margin-bottom: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const OptionButton = styled.button<{ selected: boolean }>`
  padding: 8px 18px;
  border-radius: 4px;
  border: ${({ selected }) =>
    selected ? "1px solid #4f46e5" : "1px solid #ccc"};
  background-color: ${({ selected }) => (selected ? "#e0e7ff" : "white")};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ selected }) => (selected ? "#c7d2fe" : "#f0f0f0")};
  }
`;

const PeriodSelector: React.FC = () => {
  const period = useFilterStore((state) => state.period);
  const setPeriod = useFilterStore((state) => state.setPeriod);

  const handleSelect = (option: string) => {
    setPeriod(option);
  };

  return (
    <Container>
      <Title>근무기간 선택</Title>
      <ButtonGroup>
        {periodOptions.map((option) => (
          <OptionButton
            key={option}
            selected={period === option}
            onClick={() => handleSelect(option)}
          >
            {option}
          </OptionButton>
        ))}
      </ButtonGroup>
    </Container>
  );
};

export default PeriodSelector;
