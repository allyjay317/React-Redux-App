import React from 'react'
import { useStyles } from '../../utilities/styles'
import SearchIcon from '@material-ui/icons/Search'
import { InputBase } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { searchChange, fetchSearch } from '../../redux/actions'
import { useHistory } from 'react-router'

const SearchBar = () => {
  const classes = useStyles()
  const searchText = useSelector(state => state.searchText)
  const history = useHistory()
  const dispatch = useDispatch()

  const handleChange = e => {
    dispatch(searchChange(e.target.value))
  }

  const handleSubmit = e => {
    e.preventDefault()
    history.push('/')
    dispatch(fetchSearch(searchText))
  }

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <form onSubmit={handleSubmit}>
        <InputBase
          placeholder="Search..."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          value={searchText}
          name='search'
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  )
}

export default SearchBar