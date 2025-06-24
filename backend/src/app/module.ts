import { Module } from '@nestjs/common';
import { AppController } from './controller';
import { AppService } from './service';
import config from './src/typeorm.config.ts';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
