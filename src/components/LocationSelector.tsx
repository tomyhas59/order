import React from "react";
import styled from "styled-components";
import { useFilterStore } from "../store/filterStore";

const cities = ["서울특별시", "부산광역시", "대구광역시"];

const Container = styled.div``;

const Title = styled.h3`
  margin-bottom: 16px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 12px;
`;

const Label = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  user-select: none;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const LocationSelector: React.FC = () => {
  const location = useFilterStore((state) => state.location);
  const setLocation = useFilterStore((state) => state.setLocation);

  const toggleCity = (city: string) => {
    if (location.includes(city)) {
      setLocation(location.filter((c) => c !== city));
    } else {
      setLocation([...location, city]);
    }
  };

  return (
    <Container>
      <Title>근무지역 선택</Title>
      <List>
        {cities.map((city) => (
          <ListItem key={city}>
            <Label>
              <Checkbox
                checked={location.includes(city)}
                onChange={() => toggleCity(city)}
              />
              {city}
            </Label>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default LocationSelector;
