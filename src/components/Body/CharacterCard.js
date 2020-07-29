import React from 'react'
import { Card, CardActionArea, CardMedia, Typography } from '@material-ui/core'
import { useStyles } from '../../utilities/styles'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

const CharacterCard = (props) => {
  const classes = useStyles()
  const history = useHistory()
  const isFetching = useSelector(state => state.isFetching)
  const dispatch = useDispatch()

  const loadCharacter = url => {
    if (!isFetching) {
      history.push(`/character/${props.character.Name}${props.character.Server}`)
    }
  }

  return (
    <Card>
      <CardActionArea onClick={loadCharacter}>
        <CardMedia
          className={classes.cardImage}
          image={props.character.Avatar}
          title={`${props.character.Name} - ${props.character.Server}`}
        />
        <Typography gutterBottom variant='h5' component='h2'>
          {props.character.Name} - {props.character.Server}
        </Typography>
      </CardActionArea>
    </Card>
  )
}

export default CharacterCard