import React from "react";
import styled from "styled-components";
import { useFilterStore } from "../store/filterStore";
import { timeOptions } from "../data/timeOptions";

const Container = styled.div``;

const Title = styled.h3`
  margin-bottom: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const TimeButton = styled.button<{ selected: boolean }>`
  padding: 8px 16px;
  border-radius: 4px;
  border: ${({ selected }) =>
    selected ? "1px solid #4f46e5" : "1px solid #ccc"};
  background-color: ${({ selected }) => (selected ? "#c7d2fe" : "white")};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ selected }) => (selected ? "#a5b4fc" : "#f0f0f0")};
  }
`;

const TimeSelector: React.FC = () => {
  const time = useFilterStore((state) => state.time);
  const setTime = useFilterStore((state) => state.setTime);

  const handleSelect = (option: { start: string; end: string }) => {
    setTime(option);
  };

  return (
    <Container>
      <Title>근무시간 선택</Title>
      <ButtonGroup>
        {timeOptions.map((option) => {
          const isSelected =
            time.start === option.start && time.end === option.end;
          return (
            <TimeButton
              key={option.label}
              selected={isSelected}
              onClick={() =>
                handleSelect({ start: option.start, end: option.end })
              }
            >
              {option.label}
            </TimeButton>
          );
        })}
      </ButtonGroup>
    </Container>
  );
};

export default TimeSelector;
