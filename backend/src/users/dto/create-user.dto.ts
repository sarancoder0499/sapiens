import {
  IsString,
  IsNotEmpty,
  MaxLength,
  Matches,
  IsEmail,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'First name is required' })
  @MaxLength(100, { message: 'First name cannot exceed 100 characters' })
  @Matches(/^[A-Za-z]+$/, {
    message: 'First name must contain only alphabetical characters',
  })
  firstName: string;

  @IsString()
  @IsNotEmpty({ message: 'Last name is required' })
  @MaxLength(100, { message: 'Last name cannot exceed 100 characters' })
  @Matches(/^[A-Za-z]+$/, {
    message: 'Last name must contain only alphabetical characters',
  })
  lastName: string;

  @IsEmail({}, { message: 'Invalid email address' })
  emailId: string;
}
