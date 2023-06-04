export interface IClient {
  id?: number;
  name: string;
  email: string;
  cpf: string;
  createdAt?: Date;
  // createNewClient(): number;
}

export class Client implements IClient {
  id?: number;
  name: string;
  email: string;
  cpf: string;
  createdAt?: Date;

  constructor(client: IClient) {
    this.name = client.name;
    this.cpf = client.cpf;
    this.email = client.email;
  }

  async createNewClient() {
    try {
      const newClient = {
        name: this.name,
        cpf: this.cpf,
        email: this.email,
      };

      const clientId = await Promise.resolve(1); // run ---> await ClientService.addClient(newClient)
      this.id = clientId;
      this.createdAt = new Date();

      return clientId;
    } catch (error) {
      console.log(error);
    }
  }
}
