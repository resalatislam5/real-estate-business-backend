import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: ["https://real-estate-business-frontend.vercel.app/", "*"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  });
  // Correct static files configuration
  app.useStaticAssets(join(__dirname, "..", "uploads"), {
    prefix: "/uploads",
  });
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
