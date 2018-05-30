var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Flavio';
        var text = 'Hello';
       var message = generateMessage(from, text);
       //expect(message.from).toBe('Flavio');
       //expect(message.text).toBe('Hello');
       expect(message).toMatchObject({from, text});
       expect(typeof message.createdAt).toBe('number'); 
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Deb';
        var lat = 10;
        var lgt = 20;
        var url = `https://www.google.com/maps?q=${lat},${lgt}`;

        var message = generateLocationMessage(from, lat, lgt);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, url});

    });
});