import { Controller, Get, Param } from '@nestjs/common';
import { Qr } from './qr';
import { QrService } from './qr.service';

@Controller('qr')
export class QrController {
    constructor(private qrService : QrService){

    }

    @Get(':id')
    async findQr(@Param('id') id):Promise<Qr>{
        return this.qrService.findQr(id);
    }

}
