import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../repository/ProductRepository';

export class ProductController {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = getCustomRepository(ProductRepository);
  }

  async getProducts(req: Request, res: Response) {
    try {
      const products = await this.productRepository.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async createProduct(req: Request, res: Response) {
    try {
      const { name, price } = req.body;
      const product = await this.productRepository.create({ name, price });
      await this.productRepository.save(product);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, price } = req.body;
      const product = await this.productRepository.findOne(id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      product.name = name;
      product.price = price;
      await this.productRepository.save(product);
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async deleteProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await this.productRepository.findOne(id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      await this.productRepository.remove(product);
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}