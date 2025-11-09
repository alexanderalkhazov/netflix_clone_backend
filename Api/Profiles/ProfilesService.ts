import { clean } from '../../common';
import prisma from '../../db';

export class ProfilesService {
  async getExistingProfiles() {
    try {
      const users: any[] = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          imageUrl: true,
          createdAt: true,
          updatedAt: true,
        }
      });

      const cleaned = users.map(u => clean(u));

      return { success: true, data: cleaned, msg: 'profiles fetched' };
    } catch (ex) {
      console.error('Error fetching profiles', ex);
      return { success: false, msg: 'failed fetching profiles' };
    }
  }
}
