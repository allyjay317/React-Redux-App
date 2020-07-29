import React, { useEffect, useState } from 'react'
import { Grid, Tooltip } from '@material-ui/core'
import Axios from 'axios'
import { useSelector } from 'react-redux'

const Portrait = () => {
  const character = useSelector(state => state.viewCharacter)


  return (
    <Grid container wrap='nowrap'>
      <Grid item>
        <Grid container direction='column' spacing={1}>
          {character.gearData.map(item => {
            return (
              <Grid item>
                <Tooltip title={item.name} placement='right'>
                  <img src={item.icon} style={{ width: '50px' }} />
                </Tooltip>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
      <Grid item>
        <img src={character.Portrait} />
      </Grid>
      <Grid item>
        <Grid container direction='column' spacing={1}>
          {character.glamourData.map(item => {
            return (
              <Grid item>
                <Tooltip title={item.name} placement='left'>
                  <img src={item.icon} style={{ width: '50px' }} />
                </Tooltip>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Portrait