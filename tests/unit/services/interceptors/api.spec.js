import apiGateway from '@/services/interceptors/api.js';
import * as notify from '@/utils/notify.js';

notify.default.showError = jest.fn();

describe('Index Interceptor', () => {
  it('should return success', () => {
    const response = { data: 'foo' };
    expect(apiGateway.interceptors.response.handlers[0].fulfilled(response))
      .toMatchObject({ "data": "foo" });
  });

  it('should show array of string errors', () => {
    const errorResponse = { response: { status: 400, data: { error: 'err', fieldErrors: [] } } };
    const rejectValue = apiGateway.interceptors.response.handlers[0].rejected(errorResponse);
    expect(rejectValue).rejects.toMatchObject(errorResponse);
    expect(notify.default.showError).toHaveBeenCalledWith('err');
    notify.default.showError.mockClear();
  });

});
