import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import {join} from "path";
import { ValidationPipe } from "@nestjs/common";
import { QueryExceptionFilter } from "./filters/query-exception.filter";

async function bootstrap() {
  const PORT = process.env.PORT || 5000;

  try {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalFilters(new QueryExceptionFilter())

    app.useStaticAssets(join(__dirname, '..', 'src/assets'));
    app.setBaseViewsDir(join(__dirname, '..', 'src/views'));
    app.setViewEngine('hbs');

    app.enableCors()

    await app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`)
    });
  } catch(e) {
    console.log(e);
  }
}

bootstrap();
