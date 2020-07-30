import React, { useEffect } from 'react'
import { useStyles } from '../../../utilities/styles'
import { Grid, Typography, Card, CardContent, Button } from '@material-ui/core'
import JobGrid from './JobGrid'
import Portrait from './Portrait'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { fetchCharacter, bookmark } from '../../../redux/actions'
import { CharacterPageSkeleton } from '../../../utilities/skeletons'

const CharacterPage = (props) => {
  const classes = useStyles()
  const Character = useSelector(state => state.viewCharacter)
  const loading = useSelector(state => state.isFetching)
  const dispatch = useDispatch()
  const params = useParams()

  useEffect(() => {

    dispatch(fetchCharacter(params.id))
  }, [params.id, dispatch])

  const saveCharacter = e => {
    dispatch(bookmark({ name: Character.Name, id: params.id, avatar: Character.Avatar }))
  }

  return (
    <>
      {loading.length === 0 && Character !== undefined ? (<Grid container direction='row' justify='center' spacing={6} className={classes.body}>
        <Grid item>
          <Portrait character={Character} />
        </Grid>
        <Grid item xs={6}>
          <Grid container direction='column'>
            <Grid item xs={12}>
              <Typography>{`${Character.Name} (${Character.Server})`}</Typography>
              <Typography>{`"${Character.Title}"`}</Typography>
            </Grid>
            <Grid item>
              <Card>
                <CardContent>
                  <Typography>
                    Classes/Jobs
                  </Typography>
                  <Grid container>
                    <JobGrid />
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Button color='primary' variant='contained' onClick={saveCharacter}>
                Save This Character
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>) : (
          <CharacterPageSkeleton />
        )}
    </>
  )
}

export default CharacterPage