import React from 'react';
import styled from 'styled-components';

type CarDetailsPropType = {
  carDetails: {
    id: string,
    title: string,
    image: string,
    webFormatURL: string,
    description: string,
    tags: string
  }
}

const Car = ({ carDetails }: CarDetailsPropType) => {
  return (
    <StyledCard>
      <img
        src={carDetails.webFormatURL}
        alt={carDetails.description}
        width={300}
        height={300}
      />
      <StyledCarDetails>Tags: {carDetails.tags}</StyledCarDetails>
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
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledCarDetails = styled.h5`
  max-width: 270px;
  text-overflow: ellipsis;
`;




