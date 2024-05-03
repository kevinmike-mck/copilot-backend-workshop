import { ProductService } from './ProductService';
import { Product } from '../entity/Product';
import { ProductRepository } from '../repository/ProductRepository';

// Mock the entire ProductRepository module
jest.mock('../repository/ProductRepository', () => {
    return {
      ProductRepository: jest.fn().mockImplementation(() => {
        return {
          find: jest.fn(),
          findOne: jest.fn(),
          create: jest.fn(),
          save: jest.fn(),
          remove: jest.fn(),
        };
      }),
    };
  });

describe('ProductService', () => {
  let productService: ProductService;
  let mockProductRepository: jest.Mocked<ProductRepository>;


  beforeEach(() => {
    // Create a new instance of the mock ProductRepository
    const { ProductRepository } = require('../repository/ProductRepository');
    mockProductRepository = new ProductRepository();

    productService = new ProductService();
});

  describe('getProducts', () => {
    it('should return an array of products', async () => {
      const products = await productService.getProducts();
      expect(Array.isArray(products)).toBe(true);
      expect(products.length).toBeGreaterThan(0);
      expect(products[0]).toBeInstanceOf(Product);
    });
  });

  describe('getProductById', () => {
    it('should return a product with the specified id', async () => {
      const product = await productService.getProductById(1);
      expect(product).toBeInstanceOf(Product);
      expect(product?.id).toBe(1);
    });

    it('should return undefined if no product is found', async () => {
      const product = await productService.getProductById(999);
      expect(product).toBeUndefined();
    });
  });

  describe('createProduct', () => {
    it('should create a new product', async () => {
      const productData = { name: 'New Product', price: 9.99 };
      const createdProduct = await productService.createProduct(productData);
      expect(createdProduct).toBeInstanceOf(Product);
      expect(createdProduct.name).toBe(productData.name);
      expect(createdProduct.price).toBe(productData.price);
    });
  });

  describe('updateProduct', () => {
    it('should update an existing product', async () => {
      const productId = 1;
      const updatedProductData = { name: 'Updated Product', price: 19.99 };
      const updatedProduct = await productService.updateProduct(productId, updatedProductData);
      expect(updatedProduct).toBeInstanceOf(Product);
      expect(updatedProduct?.id).toBe(productId);
      expect(updatedProduct?.name).toBe(updatedProductData.name);
      expect(updatedProduct?.price).toBe(updatedProductData.price);
    });

    it('should return undefined if the product does not exist', async () => {
      const productId = 999;
      const updatedProductData = { name: 'Updated Product', price: 19.99 };
      const updatedProduct = await productService.updateProduct(productId, updatedProductData);
      expect(updatedProduct).toBeUndefined();
    });
  });

  describe('deleteProduct', () => {
    it('should delete an existing product', async () => {
      const productId = 1;
      const result = await productService.deleteProduct(productId);
      expect(result).toBe(true);
    });

    it('should return false if the product does not exist', async () => {
      const productId = 999;
      const result = await productService.deleteProduct(productId);
      expect(result).toBe(false);
    });
  });
});