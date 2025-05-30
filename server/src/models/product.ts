import mongoose, { Schema, Document } from 'mongoose';

export interface Product extends Document {
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

const productSchema: Schema = new Schema({
    id: { type: String, auto: true, default: () => new mongoose.Types.ObjectId().toString() },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    categories: { type: [String], required: true },
    stock: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export const ProductModel = mongoose.model<Product>('Product', productSchema, 'products');