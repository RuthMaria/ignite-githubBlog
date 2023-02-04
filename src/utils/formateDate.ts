import ptBR from 'date-fns/locale/pt-BR';
import { formatDistanceToNow } from 'date-fns';

export const formateDate = (date: Date) => {
  return formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
};
