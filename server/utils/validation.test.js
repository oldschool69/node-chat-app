const expect = require('expect');

const {isRealString} = require('./validation');


describe('isRealString', () => {
    it('shoud reject non-string values', () => {
        var res = isRealString(123);
        expect(res).toBe(false);
    });

    it('should reject strings with only sapces', () => {
        var res = isRealString('       ');
        expect(res).toBe(false);
    });

    it('should be allow strings with non-space characters', () => {
        var res = isRealString('Flavio');
        expect(res).toBe(true);
    });

});
