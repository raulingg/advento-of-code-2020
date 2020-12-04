const { isPasswordValid } = require('./solution');

describe('Day 2: Password Philosophy', () => {
  it('should return true if password is policy-compliant with at least', () => {
    expect(isPasswordValid('zssmssbsms', '5-6 s')).toBeTruthy();
  });

  it('should return true if password is policy-compliant with at most', () => {
    expect(isPasswordValid('zssmssbms', '5-6 s')).toBeTruthy();
  });

  it('should return false if password is not policy-compliant', () => {
    expect(isPasswordValid('zssmssbm', '5-6 s')).toBeFalsy();
  });
});
