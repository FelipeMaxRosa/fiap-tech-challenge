export interface IItem {
  id?: number;
  name: string;
  price: number;
  description?: string;
  categoryId: number;
  createdAt?: Date;
}

export class Item implements IItem {
  id?: number;
  name: string;
  price: number;
  description?: string;
  categoryId: number;
  createdAt?: Date;

  constructor(item: IItem) {
    this.name = item.name;
    this.categoryId = item.categoryId;
    this.price = item.price;
    this.description = item.description;
  }

  async createNewClient() {
    try {
      const newItem = {
        name: this.name,
        categoryId: this.categoryId,
        price: this.price,
        description: this.description,
      };

      const itemId = await Promise.resolve(1); // await ItemService.addItem(newItem);
      this.id = itemId;
      this.createdAt = new Date();

      return itemId;
    } catch (error) {
      console.log(error);
    }
  }
}
