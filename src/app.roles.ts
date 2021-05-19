import { RolesBuilder } from 'nest-access-control';

export enum AppRoles {
  EMPLOYEE = 'EMPLOYEE',
  PROVIDER = 'PROVIDER',
  ADMIN = 'ADMIN',
}

export enum AppResource {
  USER = 'USER',
  FILE = 'FILE',
  PRODUCT = 'PRODUCT',
  NEW = 'NEW',

}

export const roles: RolesBuilder = new RolesBuilder();

roles
  // EMPLOYEE ROLES
  .grant(AppRoles.EMPLOYEE)
  .createOwn([AppResource.FILE])
  .deleteOwn([AppResource.FILE])
  // PROVIDER ROLES
  .grant(AppRoles.PROVIDER)
  .createOwn([AppResource.FILE])
  .deleteOwn([AppResource.FILE])
  // ADMIN ROLES
  .grant(AppRoles.ADMIN)
  .extend(AppRoles.EMPLOYEE)
  .extend(AppRoles.PROVIDER)
  .createAny([AppResource.USER, AppResource.PRODUCT, AppResource.NEW])
  .updateAny([AppResource.FILE, AppResource.USER])
  .deleteAny([AppResource.FILE, AppResource.USER]);