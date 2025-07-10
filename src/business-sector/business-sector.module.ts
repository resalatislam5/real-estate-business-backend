import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BusinessSector, BusinessSectorSchema } from './business-sector.schema';
import { BusinessSectorController } from './business-sector.controller';
import { BusinessSectorService } from './business-sector.service';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: BusinessSector.name,
            schema: BusinessSectorSchema
        }]),
    ],
    controllers: [BusinessSectorController],
    providers: [BusinessSectorService],
    exports: [BusinessSectorService],
})
export class BusinessSectorModule { }
