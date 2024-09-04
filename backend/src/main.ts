import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalValidationPipe } from './common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // Use the global validation pipe
  app.useGlobalPipes(new GlobalValidationPipe());

  await app.listen(3000);
}
bootstrap();
