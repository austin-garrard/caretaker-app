import UserGateway from './index.js';

describe('UserGateway', () => {

    it('should return false when attempting to sign in with a non-existent user', () => {
        expect(UserGateway.signIn('TBD')).toBe(false);
    });

    it('should return true when sign in is successful', () => {
        expect(UserGateway.signIn('sarah@emailprovider.com')).toBe(true);
    });

    it('should assign TBD as a name when TBD is the identifier', () => {
        expect(UserGateway.getName('TBD')).toBe('TBD');
    })
});
