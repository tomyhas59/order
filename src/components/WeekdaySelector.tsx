import React from "react";
import styled from "styled-components";
import { useFilterStore } from "../store/filterStore";

const weekdaysList = ["월", "화", "수", "목", "금", "토", "일"];

const Container = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const DayButton = styled.button<{ selected: boolean }>`
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: ${({ selected }) => (selected ? "#4f46e5" : "white")};
  color: ${({ selected }) => (selected ? "white" : "#333")};
  cursor: pointer;
  min-width: 40px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ selected }) => (selected ? "#4338ca" : "#f0f0f0")};
  }
`;

const WeekdaySelector: React.FC = () => {
  const weekdays = useFilterStore((state) => state.weekdays);
  const setWeekdays = useFilterStore((state) => state.setWeekdays);

  const toggleWeekday = (day: string) => {
    if (weekdays.includes(day)) {
      setWeekdays(weekdays.filter((d) => d !== day));
    } else {
      setWeekdays([...weekdays, day]);
    }
  };

  return (
    <Container>
      {weekdaysList.map((day) => (
        <DayButton
          key={day}
          selected={weekdays.includes(day)}
          onClick={() => toggleWeekday(day)}
          aria-pressed={weekdays.includes(day)}
        >
          {day}
        </DayButton>
      ))}
    </Container>
  );
};

export default WeekdaySelector;
