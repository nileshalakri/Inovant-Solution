import { Router, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { product } from '../entities/product.entity';

const router = Router();

router.get('/products', async (req: Request, res: Response) => {
  const productRepository = getRepository(product);
  const products = await productRepository.find();
  res.send(products);
});

router.post('/products', async (req: Request, res: Response) => {
  const productRepository = getRepository(product);
  const newProduct = productRepository.create(req.body);
  await productRepository.save(newProduct);
  res.send(newProduct);
});

// router.put('/products/:id', async (req: Request, res: Response) => {
//   const productRepository = getRepository(Product);
//   const productToUpdate = await productRepository.findOne(req.params.id);
//   productRepository.merge(productToUpdate, req.body);
//   const updatedProduct = await productRepository.save(productToUpdate);
//   res.send(updatedProduct);
// });

// router.delete('/products/:id', async (req: Request, res: Response) => {
//   const productRepository = getRepository(Product);
//   const productToDelete = await productRepository.findOne(req.params.id);
//   await productRepository.delete(productToDelete);
//   res.send(`Product with ID ${req.params.id} was deleted`);
// });

export default router;
