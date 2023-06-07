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
  state = {
    score: 0,
    isGameInProgress: true,
    choice: choicesList[0],
    oppo: choicesList[0],
    result: '',
  }

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
    const {score} = this.state
    const item = choicesList.find(each => each.id === id)
    const ind = Math.floor(Math.random() * choicesList.length)
    const opponent = choicesList[ind]

    let text

    if (item.id === 'PAPER' && opponent.id === 'ROCK') {
      text = 'YOU WON'
    } else if (item.id === 'SCISSORS' && opponent.id === 'ROCK') {
      text = 'YOU LOSE'
    } else if (item.id === 'ROCK' && opponent.id === 'PAPER') {
      text = 'YOU LOSE'
    } else if (item.id === 'SCISSORS' && opponent.id === 'PAPER') {
      text = 'YOU WON'
    } else if (item.id === 'ROCK' && opponent.id === 'SCISSORS') {
      text = 'YOU LOSE'
    } else if (item.id === 'PAPER' && opponent.id === 'SCISSORS') {
      text = 'YOU LOSE'
    } else if (item.id === opponent.id) {
      text = 'IT IS DRAW'
    }

    let newScore = score
    if (text === 'YOU WON') {
      newScore += 1
    } else if (text === 'YOU LOSE') {
      newScore -= 1
    }

    this.setState({
      isGameInProgress: false,
      choice: item,
      oppo: opponent,
      result: text,
      score: newScore,
    })
  }

  renderResult = () => {
    const {choice, oppo, result} = this.state

    return (
      <ResultsPage play={this.play} choice={choice} oppo={oppo} text={result} />
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
