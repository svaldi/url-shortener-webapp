import { expect } from 'chai';
import validation from './generateValidation';

describe('Validation helper', () => {
  it('should return error', () => {
    const values = {};
    const errors = validation(values);

    expect(errors.longUrl).to.be.equal('Required');
  });

  xit('should no return error', () => {
    const values = { longUrl: true };
    const errors = validation(values);

    expect(errors).to.be.equal({});
  });
});
