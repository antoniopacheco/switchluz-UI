import * as configClass from './config'

const BASEURL = configClass.BASEURL;
const authPaths = {
    login: BASEURL + 'AppUsers/login',
    logout: BASEURL + 'AppUsers/logout'
}


module.exports = {
    authPaths: authPaths
}