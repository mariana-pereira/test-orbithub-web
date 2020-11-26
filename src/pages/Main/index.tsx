import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import {
  Container, PageTitle, BeersContainer, Beer,
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
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await api.get('beers', {
        params: {
          page: currentPage,
          perPage: itemsPerPage,
        },
      });
      setBeers(response.data);
      setLoading(false);
    };

    fetchData();
  }, [currentPage, itemsPerPage]);

  return (
    <Container>
      <PageTitle>Beers</PageTitle>
      <BeersContainer>
        {beers.map((beer) => (
          <Beer key={beer.id}>
            <img src={beer.image_url} alt={beer.name} />
            <div>
              <strong>{beer.name}</strong>
              <span>{beer.tagline}</span>
              <p>{beer.first_brewed}</p>
              <p>{beer.description}</p>
            </div>
          </Beer>
        ))}
      </BeersContainer>
    </Container>
  );
};

export default Main;
