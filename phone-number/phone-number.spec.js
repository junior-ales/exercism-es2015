import PhoneNumber from './phone-number';

describe('PhoneNumber()', () => {
  it('cleans the number (123) 456-7890', () => {
    const phone = new PhoneNumber('(123) 456-7890');
    expect(phone.number()).toEqual('1234567890');
  });

  it('invalid when empty phone number', () => {
    expect(new PhoneNumber().number()).toEqual('0000000000');
    expect(new PhoneNumber(undefined).number()).toEqual('0000000000');
    expect(new PhoneNumber(null).number()).toEqual('0000000000');
    expect(new PhoneNumber('').number()).toEqual('0000000000');
  });

  it('cleans numbers with dots', () => {
    const phone = new PhoneNumber('123.456.7890');
    expect(phone.number()).toEqual('1234567890');
  });

  it('invalid when 9 digits', () => {
    const phone = new PhoneNumber('123456789');
    expect(phone.number()).toEqual('0000000000');
  });

  it('has an area code', () => {
    const phone = new PhoneNumber('1234567890');
    expect(phone.areaCode()).toEqual('123');
  });

  fit('formats a number', () => {
    const phone = new PhoneNumber('1234567890');
    expect(phone.toString()).toEqual('(123) 456-7890');
  });

  describe('11 digits', () => {
    it('valid when 11 digits and first digit is 1', () => {
      const phone = new PhoneNumber('11234567890');
      expect(phone.number()).toEqual('1234567890');
    });

    it('invalid when 11 digits not starting with 1', () => {
      const phone = new PhoneNumber('21234567890');
      expect(phone.number()).toEqual('0000000000');
    });

  });

});
