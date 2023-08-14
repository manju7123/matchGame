import './index.css'

const Navbar = props => {
  const {navScore, navSeconds} = props

  return (
    <nav className="nav-container">
      <div className="nav-image-card">
        <img
          className="nav-image"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
      </div>
      <ul className="nav-inner-card">
        <li>
          <p className="nav-score">
            Score: <span className="score">{navScore}</span>
          </p>
        </li>
        <li className="nav-inner-image-card">
          <img
            className="nav-inner-image"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="score"> {navSeconds} sec</p>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
