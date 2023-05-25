import {Button, Image} from './StyledComponent'

const GameItem = props => {
  const {details, gameChanged} = props
  const {imageUrl, id} = details

  let testID
  if (id === 'ROCK') {
    testID = 'rockButton'
  } else if (id === 'SCISSORS') {
    testID = ' scissorsButton'
  } else if (id === 'PAPER') {
    testID = ' paperButton '
  }

  const itemClicked = () => {
    gameChanged(id)
  }

  return (
    <Button type="button" data-testid={testID} onClick={itemClicked}>
      <Image src={imageUrl} alt={id} />
    </Button>
  )
}

export default GameItem
