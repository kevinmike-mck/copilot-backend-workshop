import { EntityRepository, Repository } from 'typeorm';
import { Product } from '../entity/Product';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  // Add custom methods for querying and manipulating the Product entity
}