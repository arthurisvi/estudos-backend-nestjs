import { IsNotEmpty, IsUUID, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({description: 'Id do destinatário'})
  recipientId: string;
  @IsNotEmpty()
  @Length(5, 240)
  @ApiProperty({ description: 'Conteúdo da notificação', minLength: 5, maxLength: 240})
  content: string;
  @IsNotEmpty()
  @ApiProperty({description: 'Categoria da notificação'})
  category: string;
}
