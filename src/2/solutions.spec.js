const { isPasswordValidPart1, isPasswordValidPart2 } = require('./solution');

describe('Day 2: Password Philosophy', () => {
  describe('Part 1', () => {
    it('should return true if password is policy-compliant with at least', () => {
      expect(isPasswordValidPart1('5-6 s: zssmssbsms')).toBeTruthy();
    });

    it('should return true if password is policy-compliant with at most', () => {
      expect(isPasswordValidPart1('5-6 s: zssmssbms')).toBeTruthy();
    });

    it('should return false if password is not policy-compliant', () => {
      expect(isPasswordValidPart1('5-6 s: zssmssbm')).toBeFalsy();
    });
  });

  describe('Part 2', () => {
    it('should return true if password is policy-compliant', () => {
      expect(isPasswordValidPart2('5-6 s: afjbsm')).toBeTruthy();
    });

    it('should return true if password is policy-compliant', () => {
      expect(isPasswordValidPart2('1-2 s: sasdb')).toBeTruthy();
    });

    it('should return false if password is not policy-compliant', () => {
      expect(isPasswordValidPart2('1-2 s: ssdbss')).toBeFalsy();
    });
  });
});
