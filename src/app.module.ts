import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { QrController } from './qr/qr.controller';
import { QrService } from './qr/qr.service';
import { DatabaseService } from './database/database.service';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesService } from './categories/categories.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, QrController, CategoriesController],
  providers: [AppService, UsersService, QrService, DatabaseService, CategoriesService],
})
export class AppModule {}
