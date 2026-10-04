import { useState } from 'react'
import styles from './Login.module.css'

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage('Sign-in is not connected yet. Your details have not been sent.')
  }

  return (
    <main className={styles.page}>
      <div className={styles.topbar}>
        <a className={styles.brand} href="#home" aria-label="Aurex Rewards home">
          <span className={styles.brandMark}>A</span>
          <span>Aurex<span className={styles.brandLight}>rewards</span></span>
        </a>
        <a className={styles.backLink} href="#home">Back to rewards</a>
      </div>

      <section className={styles.layout} aria-labelledby="login-title">
        <div className={styles.intro}>
          <span className={styles.eyebrow}>WELCOME BACK</span>
          <h1 id="login-title">Your rewards are waiting.</h1>
          <p>Sign in to pick up where you left off and keep your rewards moving.</p>
          <div className={styles.rewardCard} aria-hidden="true">
            <span className={styles.cardLabel}>YOUR AUREX BALANCE</span>
            <strong>1,260 <span>VEs</span></strong>
            <span className={styles.cardFoot}>A little good goes a long way.</span>
            <span className={styles.cardMark}>A</span>
          </div>
        </div>

        <div className={styles.formPanel}>
          <span className={styles.formEyebrow}>YOUR ACCOUNT</span>
          <h2>Log in to Aurex</h2>
          <p className={styles.formCopy}>Enter your account details to continue.</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="aurex-email">Email address</label>
            <input
              id="aurex-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
            />

            <div className={styles.passwordLabel}>
              <label htmlFor="aurex-password">Password</label>
              <button type="button" onClick={() => setMessage('Password reset is not available in this preview.')}>
                Forgot password?
              </button>
            </div>
            <div className={styles.passwordInput}>
              <input
                id="aurex-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                placeholder="Enter your password"
                required
              />
              <button
                className={styles.showPassword}
                type="button"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                aria-pressed={showPassword}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>

            <label className={styles.remember}>
              <input type="checkbox" name="remember" />
              <span>Remember me</span>
            </label>

            <button className={styles.submit} type="submit">Log in</button>
            <p className={styles.notice} role="status" aria-live="polite">{message}</p>
          </form>
          <p className={styles.signup}>New to Aurex? <button type="button" onClick={() => setMessage('Account creation is not available in this preview.')}>Create an account</button></p>
        </div>
      </section>
      <footer className={styles.footer}>© 2026 Aurex Rewards <span>Preview experience</span></footer>
    </main>
  )
}

export default LoginPage
