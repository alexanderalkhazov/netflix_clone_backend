import { FirstController } from './First/FirstController'
import { ProfilesController } from './Profiles/ProfilesController';

export function LoadPublicControllers (router: any) {
  FirstController(router);
  ProfilesController(router)
}

export function LoadControllers (router: any) {}

export function LoadAdminControllers (router: any) {}
