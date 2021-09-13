import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as cookieParser from "cookie-parser";

async function bootstrap() {
  const PORT = process.env.PORT || 443;
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors({ origin: "fasfafsa.fun", credentials: true });
  app.setGlobalPrefix("api");
  await app.listen(PORT);
  console.log(`Backend works on port: ${PORT}`);
}
bootstrap();
