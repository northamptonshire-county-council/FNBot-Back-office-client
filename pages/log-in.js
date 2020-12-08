import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { PublicClientApplication } from '@azure/msal-browser'


const config = {
  auth: {
      clientId: '',
      authority: `https://login.microsoftonline.com/`, // add directory id to the end
      //redirectUri: "your_app_redirect_uri", //defaults to application start page
      //postLogoutRedirectUri: "your_app_logout_redirect_uri"
  }
}

const loginRequest = {
  scopes: ["User.ReadWrite"]
}

let username = "";
const myMsal = new PublicClientApplication(config);

const sendUserToLogin = () => { myMsal.loginRedirect(loginRequest); }

export default function LogIn() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Log In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Log in from here
        </h1>

        <p className={styles.description}>
          Get started by <Link href="#"><a onClick={sendUserToLogin}>logging in</a></Link>
        </p>
      </main>
    </div>
  )
}
