export interface IItemCategory {
  id?: number;
  name: string;
  createdAt?: Date;
}

export class ItemCategory implements IItemCategory {
  id?: number;
  name: string;
  createdAt?: Date;

  constructor(category: IItemCategory) {
    this.name = category.name;
  }

  async createNewCategory() {
    try {
      const categoryId = await Promise.resolve(1); // await ProductCategoryService.addProductCategory(this.name)
      this.id = categoryId;
      this.createdAt = new Date();

      return categoryId;
    } catch (error) {
      console.log(error);
    }
  }
}
