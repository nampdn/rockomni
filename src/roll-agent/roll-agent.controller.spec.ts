import { Test, TestingModule } from '@nestjs/testing';
import { RollAgentController } from './roll-agent.controller';

describe('RollAgentController', () => {
  let controller: RollAgentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RollAgentController],
    }).compile();

    controller = module.get<RollAgentController>(RollAgentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
