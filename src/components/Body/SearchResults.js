import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import { useStyles } from '../../utilities/styles'
import CharacterCard from './CharacterCard'

const SearchResults = () => {
  const searchResults = useSelector(state => state.searchResults)
  const loading = useSelector(state => state.isFetching)

  const classes = useStyles()
  return (
    <Grid container direction='row' justify='center' alignItems='center' spacing={2} className={classes.body}>
      {loading.length === 0 ? searchResults.map(res => (
        <Grid item>
          <CharacterCard character={res} />
        </Grid>
      )) : (
          <div className={classes.body}>
            Loading..
          </div>
        )}
    </Grid>
  )
}

export default SearchResults