import { Router } from 'express';
import { ProductController } from '../controller/ProductController';

export function setProductRoutes(router: Router): void {
  const productController = new ProductController();

  router.get('/products', productController.getProducts.bind(productController));
  router.post('/products', productController.createProduct.bind(productController));
  router.put('/products/:id', productController.updateProduct.bind(productController));
  router.delete('/products/:id', productController.deleteProduct.bind(productController));
}