import { AppDataSource } from '../utils/data-source';
import { User } from '../entity/user.entity';

export const userRepository = AppDataSource.getRepository(User);