import { User } from "./user.entity";

export interface UserDTO{
    id?: string,
    name: string,
    username: string,
    password?: string,
    role: string,
    email?: string,
    isActive?: boolean
}

export function userDTO2UserEntity(userDto: UserDTO){
    let userEntity = new User();
    userEntity.name = userDto.name;
    userEntity.username = userDto.username;
    userEntity.email = userDto.email;

    return userEntity;  
}