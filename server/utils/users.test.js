const expect = require('expect');

const {Users} = require('./users');


describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();

        users.users = [{
            id: '1', 
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2', 
            name: 'Jen',
            room: 'React Course'
        }, {
            id: '3', 
            name: 'Julie',
            room: 'Node Course'
        }];

    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Flavio',
            room: 'Office fans'
        };

        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userToRemove = users.users[1];
        var prevLength = users.users.length;
        var resUser = users.removeUser('2');
        expect(resUser).toEqual(userToRemove);
        expect(users.users.length).toEqual(prevLength - 1);
    });

    it('it not should remove a user', () => {
        var prevLength = users.users.length;
        var resUser = users.removeUser('123');
        expect(resUser).toBeUndefined();
        expect(users.users.length).toEqual(prevLength);
    });

    it('should find a user', () => {
        var user = users.users[0];
        var resUser = users.getUser('1');
        expect(resUser).toEqual(user);
    });

    it('should not find a user', () => {
        var resUser = users.getUser('236');
        expect(resUser).toBeUndefined();
    });

    it('should return names for the node course', () => {
        var userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Mike', 'Julie']);
    });

    it('should return names for the react course', () => {
        var userList = users.getUserList('React Course');

        expect(userList).toEqual(['Jen']);
    });

});