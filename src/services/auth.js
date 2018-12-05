import auth0 from 'auth0-js'
import { navigateTo } from 'gatsby-link'
import { setCookie, getCookie, removeCookie } from 'tiny-cookie'
import { CLIENT_ID, DOMAIN, REDIRECT_URI } from '../constants'

export class Auth {
  auth0 = new auth0.WebAuth({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    redirectUri: REDIRECT_URI,
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
          setCookie('USER_TOKEN', authResult.accessToken, { expires: '30s' })
          setCookie('USER_EMAIL', authResult.idTokenPayload.email, { expires: '30s' })
          setCookie('USER_NICKNAME', authResult.idTokenPayload.nickname, {
            expires: '30s',
          })
        } else if (err) {
          console.log(err)
        }

        // Return to the homepage after authentication.
        navigateTo('/app/profile')
      })
    }
  }

  static isAuthenticated = () => !!getCookie('USER_TOKEN')

  static logout = () => {
    removeCookie('USER_NICKNAME')
    removeCookie('USER_EMAIL')
    removeCookie('USER_TOKEN')
  }
}
