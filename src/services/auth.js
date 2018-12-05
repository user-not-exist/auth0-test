import auth0 from 'auth0-js'
import { navigateTo } from 'gatsby-link'
import { setCookie, getCookie, removeCookie } from 'tiny-cookie'
import { AUTH, COOKIE } from '../constants'

export class Auth {
  auth0 = new auth0.WebAuth({
    domain: AUTH.DOMAIN,
    clientID: AUTH.CLIENT_ID,
    redirectUri: AUTH.REDIRECT_URI,
    responseType: 'token id_token',
    scope: 'openid email profile',
  })

  login = () => {
    this.auth0.authorize()
  }

  handleAuthentication = () => {
    if (typeof window !== 'undefined') {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          setCookie(COOKIE.USER_TOKEN, authResult.accessToken, {
            expires: COOKIE.EXPIRES_TIME_COOKIE,
          })
          setCookie(COOKIE.USER_EMAIL, authResult.idTokenPayload.email, {
            expires: AUTH.EXPIRES_TIME_COOKIE,
          })
          setCookie(COOKIE.USER_NICKNAME, authResult.idTokenPayload.nickname, {
            expires: AUTH.EXPIRES_TIME_COOKIE,
          })
        } else if (err) {
          console.log(err)
        }

        // Return to the homepage after authentication.
        navigateTo('/app/profile')
      })
    }
  }

  static isAuthenticated = () => !!getCookie(COOKIE.USER_TOKEN)

  static logout = () => {
    removeCookie(COOKIE.USER_NICKNAME)
    removeCookie(COOKIE.USER_EMAIL)
    removeCookie(COOKIE.USER_TOKEN)
  }
}
