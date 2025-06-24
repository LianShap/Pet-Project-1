import { Module } from '@nestjs/common';
import { AppController } from './controller';
import { AppService } from './service';
import config from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
