import { Test, TestingModule } from '@nestjs/testing';
import { LiveChatGateway } from './live-chat.gateway';

describe('LiveChatGateway', () => {
  let gateway: LiveChatGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LiveChatGateway],
    }).compile();

    gateway = module.get<LiveChatGateway>(LiveChatGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
