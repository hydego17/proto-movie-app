import { store } from '../configureStore';

describe('store', () => {
  it('should return a store containing moviesApi', () => {
    expect(store.getState()).toEqual(
      expect.objectContaining({
        moviesApi: expect.any(Object),
      })
    );
  });
});
