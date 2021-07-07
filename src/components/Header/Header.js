import React from 'react'
import { useStyles } from '../../utilities/styles'
import { AppBar, Toolbar, Typography, CssBaseline } from '@material-ui/core'

import FFXIVDrawer from './Drawer'
import SearchBar from './SearchBar'

const Header = () => {
  const classes = useStyles()
  return (
    <div className={classes.header}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <Typography variant='h6' noWrap>
            FFXIV Character Lookup
          </Typography>
          <SearchBar />
        </Toolbar>
      </AppBar>
      <FFXIVDrawer />
    </div>
  )
}

export default Header