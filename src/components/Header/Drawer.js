import React from 'react'
import { useStyles } from '../../utilities/styles'
import { Drawer, Typography, ListItemIcon, ListItem, ListItemText, List } from '@material-ui/core'
import { useSelector } from 'react-redux'
import InboxIcon from '@material-ui/icons/Inbox'

const FFXIVDrawer = () => {
  const classes = useStyles()

  const characters = useSelector(state => state.savedCharacters)

  return (
    <Drawer
      className={classes.drawer}
      variant='permanent'
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor='left'
    >
      <List>
        <ListItem>
          Saved Characters
        </ListItem>
        {characters.map(char => (
          <ListItem button key={char.name}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={char.name} />
          </ListItem>

        ))}
      </List>
    </Drawer>
  )
}

export default FFXIVDrawer