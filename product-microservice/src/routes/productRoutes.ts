import { Router } from 'express';
import { ProductController } from '../controller/ProductController';

export function setProductRoutes(router: Router): void {
  const productController = new ProductController();

  router.get('/products', productController.getProducts);
  router.post('/products', productController.createProduct);
  router.put('/products/:id', productController.updateProduct);
  router.delete('/products/:id', productController.deleteProduct);
}