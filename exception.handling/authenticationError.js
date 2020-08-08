class AuthenticationError extends Error {
    constructor(message) {
        super(message);
        this.message = 'authenticationError'
    }
}

throw new AuthenticationError('Custom Error')