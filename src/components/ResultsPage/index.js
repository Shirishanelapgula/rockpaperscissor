import {
  ResultContainer,
  ContainerCard,
  Card,
  Paragraph,
  Image,
  Button,
} from './StyledComponent'

const ResultsPage = props => {
  const {choice, play, oppo, text} = props

  const playAgain = () => {
    play()
  }

  return (
    <ResultContainer>
      <ContainerCard>
        <Card>
          <Paragraph>YOU</Paragraph>
          <Image alt="your choice" src={choice.imageUrl} />
        </Card>
        <Card>
          <Paragraph>OPPONENT</Paragraph>
          <Image alt="opponent choice" src={oppo.imageUrl} />
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

