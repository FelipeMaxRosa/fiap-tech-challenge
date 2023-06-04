export interface IPayment {
  id?: number;
  clientId: number;
  amount: number;
  status?: string;
  createdAt: Date;
}

export class Payment {
  id?: number;
  clientId: number;
  amount: number;
  status?: string;
  createdAt?: Date;

  constructor(payment: IPayment) {
    this.clientId = payment.clientId;
    this.amount = payment.amount;
  }

  async executePayment() {
    // implementation
    try {
      const dataToPayment = {
        clientId: this.clientId,
        amout: this.amount,
      };
      const response = await Promise.resolve({
        id: 1,
        status: 'success',
      }); // PaymentService.execute(dataToPayment)
      if (response.status === 'success') {
        (this.id = response.id), (this.status = response.status);
      } else {
        throw new Error(`Unprocessed Payment with status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
