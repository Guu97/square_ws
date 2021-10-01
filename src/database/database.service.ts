import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  static db: any;
    constructor(){
        var admin = require("firebase-admin");
        var serviceAccount = require("../../square-ad444-firebase-adminsdk-gf6wd-42cf8a7560.json");
        admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
        });
        DatabaseService.db= admin.firestore();
    }
}
