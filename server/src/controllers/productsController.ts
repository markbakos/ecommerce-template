import { Request, Response } from 'express';
import { ProductModel } from '../models/product'

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await ProductModel.find();
        res.status(200).json(products);
    }
    catch (error) {
    res.status(500).json({ message: "Error fetching products: " + error});
    }
}

export const findProductBySearch = async (req: Request, res: Response) => {
    try {
        const searchQuery = req.query.search as string;
        const products = await ProductModel.find({
            $or: [
                { name: { $regex: searchQuery, $options: 'i' } },
                { description: { $regex: searchQuery, $options: 'i' } },
                { categories: { $regex: searchQuery, $options: 'i' }}
            ]
        });
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: "Error searching products: " + error});
    }
}

export const findProductByID = async (req: Request, res: Response): Promise<void> => {
    try {
        const productID = req.params.id
        const product = await ProductModel.findOne({_id: productID});
        if (!product) {
            res.status(404).json({message: "Product not found"});
        }
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching product: " + error});
    }
}

export const postProduct = async (req: Request, res: Response) => {
    try {
        const { name, description, price, imageUrl, categories, stock } = req.body;

        const newProduct = new ProductModel({
            name,
            description,
            price,
            imageUrl,
            categories,
            stock
        })

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating product: " + error});
    }
}