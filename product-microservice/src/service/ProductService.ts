import { Product } from '../entity/Product';
import { ProductRepository } from '../repository/ProductRepository';

export class ProductService {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  async getProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async getProductById(id: number): Promise<Product | undefined> {
    return this.productRepository.findOne(id);
  }

  async createProduct(productData: Partial<Product>): Promise<Product> {
    const product = this.productRepository.create(productData);
    return this.productRepository.save(product);
  }

  async updateProduct(id: number, productData: Partial<Product>): Promise<Product | undefined> {
    const product = await this.productRepository.findOne(id);
    if (product) {
      Object.assign(product, productData);
      return this.productRepository.save(product);
    }
    return undefined;
  }

  async deleteProduct(id: number): Promise<boolean> {
    const product = await this.productRepository.findOne(id);
    if (product) {
      await this.productRepository.remove(product);
      return true;
    }
    return false;
  }
}