import * as configClass from './config'

const BASEURL = configClass.BASEURL;
const authPaths = {
    login: BASEURL + 'AppUsers/login'
}


module.exports = {
    authPaths: authPaths
}