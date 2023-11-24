import crypto from 'crypto';

const SECRET = 'ELF-REST-API';

export const random = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt:string, password:string) => {
    return crypto.createHmac('sha56', [salt, password].join('/')).update(SECRET).digest('hex');
}
