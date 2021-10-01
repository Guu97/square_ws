import { User } from '../user/user.interface';
import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    findAll(): Promise<User[]>;
    findUser(uid: any): Promise<User>;
}
