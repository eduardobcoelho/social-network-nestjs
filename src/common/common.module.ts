import { Module } from '@nestjs/common';
import { DefaultGenderPipe } from './pipes/default-gender/default-gender.pipe';

@Module({
  providers: [DefaultGenderPipe],
  exports: [DefaultGenderPipe],
})
export class CommonModule {}
