import React from 'react'
import { useStyles } from '../../utilities/styles'
import SearchIcon from '@material-ui/icons/Search'
import { InputBase } from '@material-ui/core'

const SearchBar = () => {
  const classes = useStyles()
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search..."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
      />
    </div>
  )
}

export default SearchBar