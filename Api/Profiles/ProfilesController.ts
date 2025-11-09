import bodyParser = require('koa-bodyparser');
import { ProfilesService } from './ProfilesService';

export const ProfilesController = (router: any) => {
  router.get('/profiles', bodyParser(), getExistingProfiles);
};

export const getExistingProfiles = async (ctx: any) => {
  try {
    const { success, msg, data } = await new ProfilesService().getExistingProfiles();
    if (success) {
      ctx.body = JSON.stringify({ success, msg, data });
      ctx.status = 200;
    } else {
      ctx.body = JSON.stringify({ success, msg });
      ctx.status = 500;
    }
  } catch (ex) {
    ctx.body = JSON.stringify({ success: false, msg: 'server error' });
    ctx.status = 500;
  }
};