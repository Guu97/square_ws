import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { User } from '../user/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService : UsersService){}

    /*@Get()
    getUsers():string{
        return 'users';
    }*/

    @Get()
    async findAll(): Promise<User[]>{
        return this.userService.findAll();
    }

    @Get(':uid')
    async findUser(@Param('uid') uid): Promise<User>{
        return this.userService.findUser(uid);
    }

    



}
