import authService from '@/services/auth.js';
import * as apiGateway from '@/services/interceptors/api.js';

apiGateway.default.post = jest.fn();

describe('Auth Service', () => {
  it('it should signIn', async () => {
    await authService.signIn('test');
    expect(apiGateway.default.post).toHaveBeenCalledWith('/login', 'test');
  });
});
