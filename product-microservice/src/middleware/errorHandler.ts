import { Request, Response, NextFunction } from 'express';
import logger from '../logger';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  logger.error(err.message);
  res.status(500).json({ message: 'Internal server error .....' });
}