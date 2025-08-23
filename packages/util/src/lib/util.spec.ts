import { getRandomItem, util } from './util.js';

describe('util', () => {
  it('should work', () => {
    expect(util()).toEqual('util');
  });
});
describe('getRandomItem', () => {

  it('should return the only item for single-item array', () => {
    expect(getRandomItem([1])).toBe(1);
  });

  it('should return an item from the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = getRandomItem(arr);
    expect(arr).toContain(result);
  });

  it('should return different items over multiple calls', () => {
    const arr = [1, 2, 3, 4, 5];
    const results = new Set();
    for (let i = 0; i < 100; i++) {
      results.add(getRandomItem(arr));
    }
    // With 100 iterations, we should get at least 3 different results
    expect(results.size).toBeGreaterThan(2);
  });
});
