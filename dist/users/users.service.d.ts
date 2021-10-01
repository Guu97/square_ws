import { User } from '../user/user';
export declare class UsersService {
    constructor();
    getHello(): string;
    findUser(uid: string): Promise<User>;
    findAll(): Promise<User[]>;
}
