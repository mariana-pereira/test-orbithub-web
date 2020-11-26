import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import {
  Container,
  PageTitle,
  BeersContainer,
  BeerItem,
  Pagination,
  PaginationButton,
  PaginationItem,
} from './styles';

interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
}

const Main: React.FC = () => {
  const [beers, setBeers] = useState<Beer[]>([] as Beer[]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [limit] = useState(27);
  const [pages, setPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await api.get('beers', {
        params: {
          page: currentPage,
          perPage: limit,
        },
      });
      setBeers(response.data);
      setTotal(350);
      const totalPages = Math.ceil(total / limit);

      const arrayPages = [];
      for (let i = 1; i <= totalPages; i++) {
        arrayPages.push(i);
      }

      setPages(arrayPages);
      setLoading(false);
    };

    fetchData();
  }, [currentPage, limit, total]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container>
      <PageTitle>Beers</PageTitle>
      <BeersContainer>
        {beers.map((beer) => (
          <BeerItem key={beer.id}>
            <img src={beer.image_url} alt={beer.name} />
            <div>
              <strong>{beer.name}</strong>
              <span>{beer.tagline}</span>
              <p>{beer.first_brewed}</p>
              <p>{beer.description}</p>
            </div>
          </BeerItem>
        ))}
      </BeersContainer>
      <Pagination>
        <PaginationButton>
          {currentPage > 1 && (
            <PaginationItem onClick={() => setCurrentPage(currentPage - 1)}>
              Previous
            </PaginationItem>
          )}
          {pages.map((page) => (
            <PaginationItem
              isSelect={page === currentPage}
              key={page}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </PaginationItem>
          ))}
          {currentPage < pages.length && (
            <PaginationItem onClick={() => setCurrentPage(currentPage + 1)}>
              Next
            </PaginationItem>
          )}
        </PaginationButton>
      </Pagination>
    </Container>
  );
};

export default Main;
