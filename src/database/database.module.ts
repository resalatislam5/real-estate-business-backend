import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),

    // Default database (Main DB)
    MongooseModule.forRoot(process.env.MONGO_URI!),

    // Second database (Web DB)
    MongooseModule.forRoot(process.env.MONGO_URI_WEB!, {
      connectionName: 'db2',
    }),
  ],
})
export class DatabaseModule { }
