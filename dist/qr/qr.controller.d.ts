import { Qr } from './qr';
import { QrService } from './qr.service';
export declare class QrController {
    private qrService;
    constructor(qrService: QrService);
    findQr(id: any): Promise<Qr>;
}
