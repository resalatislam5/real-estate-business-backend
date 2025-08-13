import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { NestExpressApplication } from "@nestjs/platform-express";
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);
  const frontendURL = configService.get<string>("FRONTEND_URL");
  app.enableCors({
    origin: frontendURL,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  });
  // Correct static files configuration
  // when use server upload then use this
  // app.useStaticAssets(join(__dirname, "..", "uploads"), {
  //   prefix: "/uploads",
  // });
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
