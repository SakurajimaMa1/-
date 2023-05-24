let baseURL;
switch (process.env.NODE_ENV) {
    case 'development': 
        baseURL = '';
        break;
    case 'production':
        baseURL = '';
        break;

}

export default {
    baseURL
}