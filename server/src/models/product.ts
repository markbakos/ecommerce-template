export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    categories: string[];
    stock: number;
    createdAt: Date;
    updatedAt: Date;
}

export let products: Product[] = [];