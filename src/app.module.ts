import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RollAgentController } from './roll-agent/roll-agent.controller';

@Module({
  imports: [],
  controllers: [AppController, RollAgentController],
  providers: [AppService],
})
export class AppModule {}
