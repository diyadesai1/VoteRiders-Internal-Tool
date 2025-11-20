import "./login.css";
import { useEffect, useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({ onLogin }: { onLogin: () => void }) {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const r = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(r)
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: validate credentials, then redirect
    onLogin()
    navigate('/dashboard')
  }

  return (
    <main className={`login ${visible ? 'login--visible' : ''}`}>
      <header className="login__header">
        <h1 className="login__title">VoteRiders</h1>
        <p className="login__subtitle">Volunteer Dashboard</p>
      </header>

      <section className="login-card" aria-label="Sign in form">
        <div>
          <h2 className="login-card__title">Welcome Back</h2>
          <p className="login-card__subtitle">
            Sign in to your volunteer account
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-field">
            <label htmlFor="username">USERNAME</label>
            <input
              id="username"
              name="username"
              placeholder="Enter your username"
              autoComplete="username"
            />
          </div>

          <div className="login-field">
            <label htmlFor="password">PASSWORD</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>

          <div className="login-form__actions">
            <label className="login-remember">
              <input type="checkbox" name="remember" />
              Remember me
            </label>
            <button className="login-forgot" type="button">
              Forgot password?
            </button>
          </div>

          <button className="login-button" type="submit">
            <span className="login-button__icon" aria-hidden>
              ↪︎
            </span>
            Sign In
          </button>
        </form>

        <p className="login-contact">
          Need help? Contact <a href="mailto:support@voteriders.org">info@voteriders.org</a>
        </p>
      </section>

      <footer className="login-footer">© 2025 VoteRiders. All rights reserved.</footer>
    </main>
  );
}
