import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from 'src/schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LIMIT } from 'src/common/constants/pagination';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findAll(page: number): Promise<PaginationDto<User>> {
    const skip = ((page || 1) - 1) * LIMIT;
    const users = await this.userModel.find().skip(skip).limit(LIMIT).exec();
    const totalItems = await this.userModel.countDocuments();
    const totalPages = Math.ceil(totalItems / LIMIT);

    return {
      data: users,
      itemsPerPage: LIMIT,
      currentPage: page,
      totalItems: totalItems,
      totalPages: totalPages,
    };
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }
}
