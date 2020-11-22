import { Body, Controller, Get } from '@nestjs/common';

@Controller('roll-agent')
export class RollAgentController {
  @Get()
  async create(@Body() params: any) {
    console.log(JSON.stringify(params, null, 2));
    return true;
  }
}
