import { User } from './user';

const BASE = {
  username: 'anneau',
  email: 'anneau@example.com',
  password: 'password',
};

describe('user', () => {
  describe('name', () => {
    describe('when username include symbol', () => {
      it('should throw parse error', () => {
        const data = { ...BASE, username: 'anneau%' };
        expect(User.safeParse(data).success).toBe(false);
      });
    });
  });
});
