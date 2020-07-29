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
    <Grid container direction='column' justify='center' alignItems='center' className={classes.body}>
      {!loading ? searchResults.map(res => (
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