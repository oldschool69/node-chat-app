var expect = require('expect');

var {generateMessage} = require('./message');

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