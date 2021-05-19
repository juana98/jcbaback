import { applyDecorators, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../api/auth/guards';
import { ACGuard, Role, UseRoles } from 'nest-access-control';

export function Auth(...roles: Role[]) {
  return applyDecorators(
    UseGuards(JwtAuthGuard, ACGuard),
    UseRoles(...roles)
  );
}