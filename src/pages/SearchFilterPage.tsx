import React from "react";
import styled from "styled-components";
import LocationSelector from "../components/LocationSelector";
import JobCategorySelector from "../components/JobCategorySelector";
import PeriodSelector from "../components/PeriodSelector";
import TimeSelector from "../components/TimeSelector";
import WeekdaySelector from "../components/WeekdaySelector";
import ResetButton from "../components/ResetButton";
import ApplyButton from "../components/ApplyButton";

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 16px;
`;

const Title = styled.h2`
  margin-bottom: 24px;
`;

const Section = styled.section`
  margin-bottom: 24px;
`;

const ButtonSection = styled.section`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  gap: 16px; /* 버튼 사이 간격 */
`;

const SearchFilterPage: React.FC = () => {
  return (
    <Container>
      <Title>검색조건 설정</Title>
      <Section>
        <LocationSelector />
      </Section>

      <Section>
        <JobCategorySelector />
      </Section>

      <Section>
        <PeriodSelector />
      </Section>

      <Section>
        <TimeSelector />
      </Section>

      <Section>
        <WeekdaySelector />
      </Section>

      <ButtonSection>
        <ResetButton />
        <ApplyButton />
      </ButtonSection>
    </Container>
  );
};

export default SearchFilterPage;
