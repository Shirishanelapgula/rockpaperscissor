import {Component} from 'react'
import Popup from 'reactjs-popup'

import GameItem from '../GameItem'
import ResultsPage from '../ResultsPage'

import {
  Container,
  ScoreCard,
  Title,
  ScoreContent,
  Para,
  Num,
  Content,
  Button,
  Image,
  Pop,
  ListContainer,
  Head,
} from './StyledComponent'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GamePage extends Component {
  state = {score: 0, isGameInProgress: true, yourChoice: choicesList[0].id}

  renderGame = () => (
    <ListContainer>
      {choicesList.map(each => (
        <GameItem details={each} key={each.id} gameChanged={this.gameChanged} />
      ))}
    </ListContainer>
  )

  play = () => {
    this.setState({isGameInProgress: true})
  }

  gameChanged = id => {
    this.setState({yourChoice: id, isGameInProgress: false})
  }

  gameWon = () => {
    this.setState(prevState => ({score: prevState.score + 1}))
  }

  gameLose = () => {
    this.setState(prevState => ({score: prevState.score - 1}))
  }

  renderResult = () => {
    const {yourChoice} = this.state

    return (
      <ResultsPage
        yourChoice={yourChoice}
        gameWon={this.gameWon}
        gameLose={this.gameLose}
        play={this.play}
      />
    )
  }

  render() {
    const {score, isGameInProgress} = this.state
    return (
      <Container>
        <Head>Rock Paper Scissors</Head>
        <ScoreCard>
          <Content>
            <Title>ROCK</Title>
            <Title>PAPER</Title>
            <Title>SCISSORS</Title>
          </Content>
          <ScoreContent>
            <Para>Score</Para>
            <Num>{score}</Num>
          </ScoreContent>
        </ScoreCard>
        {isGameInProgress ? this.renderGame() : this.renderResult()}
        <Popup modal trigger={<Button type="button">RULES</Button>}>
          {close => (
            <>
              <Button type="button" onClick={() => close()}>
                CLOSE
              </Button>
              <Pop>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png "
                  alt="rules"
                />
              </Pop>
            </>
          )}
        </Popup>
      </Container>
    )
  }
}

export default GamePage
