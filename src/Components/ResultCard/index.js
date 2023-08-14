import './index.css'

const ResultCard = props => {
  const {resScore, onPlayAgain} = props

  const playAgainBtn = () => {
    onPlayAgain()
  }

  return (
    <div className="res-card">
      <img
        className="res-trophy"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p className="res-heading"> YOUR SCORE </p>
      <p className="res-para"> {resScore} </p>
      <div className="res-btn-card">
        <button className="res-btn" type="button" onClick={playAgainBtn}>
          <img
            className="res-image"
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default ResultCard
