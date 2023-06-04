export interface OrderItem {
  id: number;
  quantity: number;
  price: number;
}

export type OrderStatus =
  | 'Recebido'
  | 'Em preparacao'
  | 'Pronto'
  | 'Finalizado';
