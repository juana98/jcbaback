import {
    IsString,
    IsEmail,
    MinLength,
    MaxLength,
    IsOptional,
    IsArray,
    IsEnum,
  } from 'class-validator';
  import { AppRoles } from 'src/app.roles';
  import { EnumToString } from 'src/common/helpers/enumToString';
  
  export class CreateUserDto {
    
    idUser: number;

    @IsOptional()
    @IsString()
    @MaxLength(255)
    name: string;
    
    @IsString()
    username: string;
  
    @IsEmail()
    email: string;
  
    @IsString()
    @MinLength(8)
    @MaxLength(128)
    password: string;
  
    @IsArray()
    @IsEnum(AppRoles, {
      each: true,
      message: `must be a valid role value, ${EnumToString(AppRoles)}`,
    })
    role: string[];
  }