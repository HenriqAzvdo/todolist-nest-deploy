import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('To-do List')
    .setDescription('Projeto To-do List')
    .setContact(
      'Generation Brasil', 
      'http://generationbrasil.online/',
      'generation@email.com'
      )
      .setVersion('1.0')
      .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/swagger', app, document)

  //corrigir o timezone com o horário de brasília. Salva no nosso horário padrão
  process.env.TZ = '-03:00'   
  //.
  //habilita validação em todas as requisições http
  app.useGlobalPipes(new ValidationPipe())
  //.
  //outros domínios podem consumir a nossa API e não só o localhost
  app.enableCors()
  //.
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
