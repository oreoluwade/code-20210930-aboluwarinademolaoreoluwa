import React from 'react';
import styled from 'styled-components';

const Car = ({ carDetails }) => {
  return (
    <StyledCard>
      <img
        src={carDetails.webFormatURL}
        alt={carDetails.description}
        width={300}
        height={300}
      />
      <h5>Tags: {carDetails.tags}</h5>
    </StyledCard>
  );
};

export default Car;

const StyledCard = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
`;




