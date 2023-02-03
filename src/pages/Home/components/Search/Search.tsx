import React from 'react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Container } from './Search.styles';

const searchSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchSchema>;

interface SearchProps {
  hasQuery: (query: string) => void;
}

export const Search: React.FC<SearchProps> = ({ hasQuery }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchSchema),
  });

  const handleSearchTransactions = async (data: SearchFormInputs) => {
    hasQuery(data.query);
  };

  return (
    <Container onSubmit={handleSubmit(handleSearchTransactions)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />

      <button type="submit" disabled={isSubmitting}>
        Buscar
      </button>
    </Container>
  );
};
