import { Test, TestingModule } from '@nestjs/testing';
import { BusinessSectorService } from './business-sector.service';

describe('BusinessSectorService', () => {
  let service: BusinessSectorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusinessSectorService],
    }).compile();

    service = module.get<BusinessSectorService>(BusinessSectorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
