import React, { useState } from "react";
import styled from "styled-components";
import { useFilterStore } from "../store/filterStore";
import { jobCategoryData } from "../data/jobCategoryData";

type Category = keyof typeof jobCategoryData;

const Container = styled.div``;

const Section = styled.div`
  margin-bottom: 24px;
`;

const Label = styled.strong`
  display: block;
  margin-bottom: 8px;
`;

const ButtonGroup = styled.div<{ wrap?: boolean }>`
  display: flex;
  gap: 8px;
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};
`;

interface CategoryButtonProps {
  selected?: boolean;
}

const CategoryButton = styled.button<CategoryButtonProps>`
  padding: 8px 16px;
  border-radius: 4px;
  border: ${({ selected }) =>
    selected ? "1px solid #4f46e5" : "1px solid #ccc"};
  background-color: ${({ selected }) => (selected ? "#e0e7ff" : "white")};
  cursor: pointer;
  font-weight: ${({ selected }) => (selected ? "600" : "400")};
  transition: all 0.2s ease;

  &:hover {
    background-color: #c7d2fe;
    border-color: #4f46e5;
  }
`;

interface JobButtonProps {
  active?: boolean;
}

const JobButton = styled.button<JobButtonProps>`
  padding: 6px 14px;
  border-radius: 4px;
  border: ${({ active }) => (active ? "1px solid #4f46e5" : "1px solid #ccc")};
  background-color: ${({ active }) => (active ? "#c7d2fe" : "white")};
  cursor: pointer;
  font-weight: ${({ active }) => (active ? "600" : "400")};
  transition: all 0.2s ease;

  &:hover {
    background-color: #a5b4fc;
    border-color: #4f46e5;
  }
`;

const JobCategorySelector: React.FC = () => {
  const jobCategory = useFilterStore((state) => state.jobCategory);
  const setJobCategory = useFilterStore((state) => state.setJobCategory);

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    setJobCategory([]);
  };

  const toggleJob = (job: string) => {
    let newJobCategory = [...jobCategory];
    if (newJobCategory.includes(job)) {
      newJobCategory = newJobCategory.filter((j) => j !== job);
    } else {
      newJobCategory.push(job);
    }
    setJobCategory(newJobCategory);
  };

  return (
    <Container>
      <Section>
        <Label>대분류</Label>
        <ButtonGroup>
          {Object.keys(jobCategoryData).map((category) => (
            <CategoryButton
              key={category}
              selected={category === selectedCategory}
              onClick={() => handleCategorySelect(category as Category)}
              type="button"
            >
              {category}
            </CategoryButton>
          ))}
        </ButtonGroup>
      </Section>

      {selectedCategory && (
        <Section>
          <Label>세부 직종 (복수 선택 가능)</Label>
          <ButtonGroup wrap>
            {jobCategoryData[selectedCategory].map((job) => (
              <JobButton
                key={job}
                active={jobCategory.includes(job)}
                onClick={() => toggleJob(job)}
                type="button"
              >
                {job}
              </JobButton>
            ))}
          </ButtonGroup>
        </Section>
      )}
    </Container>
  );
};

export default JobCategorySelector;
