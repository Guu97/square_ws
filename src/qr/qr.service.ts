import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Qr } from './qr';

@Injectable()
export class QrService {

    constructor(){

    }

    async findQr(id: string):Promise<Qr>{
        const doc = await DatabaseService.db.collection('qrs').doc(id).get();
        //const doc = await snap.get();
        var qr: Qr = new Qr();
        if (!doc.exists) {
            return qr;
        } else {
            qr = doc.data();
            return qr;
        }
    }

}
