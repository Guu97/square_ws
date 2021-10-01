import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { User } from '../user/user';



@Injectable()
export class UsersService {
  //private readonly users: User[] = [];
  
  constructor(){
   
  }

  getHello(): string {
    return 'user';
  }

  /*create(u: User){
    this.users.push(u);
  }*/

  async findUser(uid: string):Promise<User>{

    console.log("uid: "+uid);
    
    
    const doc = await DatabaseService.db.collection('users').doc(uid).get();
    //const doc = await snap.get();
    var user: User = new User();
    console.log('doc: '+doc.exists);
    if (!doc.exists) {
      console.log('No such document!');
      return user;
    } else {
      console.log('Document data:', doc.data());
      user = doc.data();
      return user;
    }
  }

  async findAll(): Promise<User[]>{
    var users = <User[]>[];
    
    const snapshot = await DatabaseService.db.collection('users').get();
    snapshot.forEach((doc) => {
      
      console.log(doc.id, '=>', doc.data());
      var u: User = new User();
      u = doc.data();
      users.push(u);

    });

    return users;
  }
}

