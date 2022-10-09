import isEmail from '../isEmail';
import isPassword from '../isPassword';

describe('test functions', () => {
  test('is email', () => {
    expect(isEmail('udiocjs')).toBe(false);
    expect(isEmail('udiocjs@')).toBe(false);
    expect(isEmail('udiocjs@gmail.com')).toBe(true);
  });
  test('is password', () => {
    expect(isPassword('123456')).toBe(false);
    expect(isPassword('abscd')).toBe(false);
    expect(isPassword('ABDD')).toBe(false);
    expect(isPassword('abcdEf-')).toBe(false);
    expect(isPassword('abcdEf-89')).toBe(true);
  });
});
