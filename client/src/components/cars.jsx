import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import Car from './car';

const CAR_QUERY = gql`
  query {
    cars {
      id
      title
      image
      webFormatURL
      description
      tags
    }
  }
`;

const Cars = () => {
  const { loading, error, data } = useQuery(CAR_QUERY);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  return (
    <Container>
      {data.cars.map(carDetails => (
        <Car key={carDetails.id} carDetails={carDetails} />
      ))}
    </Container>
  );
};

export default Cars;


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
