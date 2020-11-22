import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;
  await app.listen(port).then(() => {
    console.log(`App started on http://localhost:${port}`);
  });
}
bootstrap();
