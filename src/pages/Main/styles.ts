import styled from 'styled-components';

interface PaginationProps {
  isSelect?: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const PageTitle = styled.h1`
  color: #333;
  margin-bottom: 30px;
  text-transform: uppercase;
`;

export const BeersContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const BeerItem = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  overflow: hidden;

  img {
    height: 300px;
    margin-right: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 10px;
    text-align: center;

    strong {
      margin-bottom: 10px;
      font-size: 16px;
      text-transform: uppercase;
    }

    span {
      font-weight: 600;
      margin-bottom: 10px;
    }

    p {
      margin-bottom: 10px;
    }
  }

  @media (min-width: 900px) {
    width: 400px;
  height: 400px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  min-width: 500px;
  max-width: 900px;
  justify-content: space-between;
  margin-top: 10px;
`;

export const PaginationButton = styled.div`
  display: flex;
`;

export const PaginationItem = styled.div<PaginationProps>`
  margin: 0 5px;
  cursor: pointer;
  ${(props) =>
    props.isSelect && {
      background: '#6d6d6d',
      padding: '0 5px',
    }}

  @media (min-width: 900px) {
    margin: 0 5px;
  }
`;
