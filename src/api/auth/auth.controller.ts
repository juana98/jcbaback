import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Auth, User } from 'src/common/decorators';
import { User as UserEntity } from 'src/api/user/user.entity';
import { LocalAuthGuard } from './guards';
import { JwtAuthGuard } from './guards';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ){}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Body()loginDto: LoginDto, @User() user: UserEntity){
        const data = await this.authService.login(user)
        return {
            message: 'Login exitoso',
            data
        };  
    }
    @Auth()
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    profile(@User() user: UserEntity){

        return {
            message: 'Petición correcta',
            user
        };
    }

    @Auth()
    @UseGuards(JwtAuthGuard)
    @Get('refresh')
    refreshToken(@User() user: UserEntity){
        const data = this.authService.login(user)
        return {
            message: 'Refresh exitoso',
            data
        }
    }
}
