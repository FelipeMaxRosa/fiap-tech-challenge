import { OrderItem, OrderStatus } from './types';

export interface IOrder {
  id?: number;
  createdAt?: Date;
  clientId: number;
  items: OrderItem[];
  status?: OrderStatus;
}

export class Order implements IOrder {
  id?: number;
  createdAt?: Date;
  clientId: number;
  items: OrderItem[];
  status?: OrderStatus;

  constructor(order: IOrder) {
    this.clientId = order.clientId;
    this.items = order.items;
  }

  async createNewOrder() {
    try {
      const newOrder = {
        clientId: this.clientId,
        items: this.items,
        createAt: this.createdAt,
      };

      const orderId = await Promise.resolve(1); // await OrderService.addOrder(newOrder);
      this.id = orderId;
      this.status = 'Recebido';
      this.createdAt = new Date();

      return orderId;
    } catch (error) {
      console.log(error);
    }
  }
}
