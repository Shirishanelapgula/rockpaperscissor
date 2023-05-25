import {
  ResultContainer,
  ContainerCard,
  Card,
  Paragraph,
  Image,
  Button,
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

const generateIndex = () => {
  const opponent = Math.floor(Math.random() * 3)

  return opponent
}

const ResultsPage = props => {
  const {gameLose, gameWon, yourChoice, play} = props

  const object = choicesList.find(each => each.id === yourChoice)

  const index = generateIndex()

  const opponentUrl = choicesList[index].imageUrl

  const playAgain = () => {
    play()
  }

  let text

  if (yourChoice === 'PAPER' && choicesList[index].id === 'ROCK') {
    text = 'YOU WON'
    gameWon()
  }
  if (yourChoice === 'SCISSORS' && choicesList[index].id === 'ROCK') {
    text = 'YOU LOSE'
    gameLose()
  }
  if (yourChoice === 'ROCK' && choicesList[index].id === 'PAPER') {
    text = 'YOU LOSE'
    gameLose()
  }
  if (yourChoice === 'SCISSORS' && choicesList[index].id === 'PAPER') {
    text = 'YOU WON'
    gameWon()
  }
  if (yourChoice === 'ROCK' && choicesList[index].id === 'SCISSORS') {
    text = 'YOU LOSE'
    gameWon()
  }
  if (yourChoice === 'PAPER' && choicesList[index].id === 'SCISSORS') {
    text = 'YOU LOSE'
    gameLose()
  }
  if (yourChoice === choicesList[index].id) {
    text = 'IT IS DRAW'
    text = 'YOU LOSE'
    text = 'YOU LOSE'
  }

  return (
    <ResultContainer>
      <ContainerCard>
        <Card>
          <Paragraph>YOU</Paragraph>
          <Image alt="your choice" src={object.imageUrl} />
        </Card>
        <Card>
          <Paragraph>OPPONENT</Paragraph>
          <Image alt="opponent choice" src={opponentUrl} />
        </Card>
      </ContainerCard>
      <Card>
        <Paragraph>{text}</Paragraph>
        <Button type="button" onClick={playAgain}>
          PLAY AGAIN
        </Button>
      </Card>
    </ResultContainer>
  )
}

export default ResultsPage
