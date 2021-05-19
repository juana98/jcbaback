import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService,
        private readonly jwtService: JwtService
        ){}

    async validateUser(username: string, pass: string): Promise<any>{
        const user = await this.userService.findUsername(username);
        console.log(await compare(pass, user.password));

        //if(user && pass === user.password){
            console.log(pass,user.password);
        if (user && (await compare(pass, user.password))) {   
            const { password, ...rest } = user;
            return rest;
        }
        return {
            message: "User don´t exist"
        };
    }

    login(user: User){
        const {id, ...rest} = user;
        const payload = { sub: id};

        return {
            user,
            accessToken: this.jwtService.sign(payload)
        }
    }
}
