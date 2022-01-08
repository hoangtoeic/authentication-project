import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { User } from './db/entities/user.entity';

@Module({
   imports: [AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
