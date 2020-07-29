import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useStyles } from '../../../utilities/styles'
import { useSelector } from 'react-redux'

const JobGrid = (props) => {
  const classes = useStyles()
  const jobs = useSelector(state => state.viewCharacter.ClassJobs)
  const activeJob = useSelector(state => state.viewCharacter.ActiveClassJob.ClassID)
  return (
    <Grid container>
      {jobs.map(job => {
        return (
          <Grid item className={job.ClassID === activeJob ? classes.activeJob : classes.inactiveJob}>
            <img src={job.UnlockedState.Name !== 'Blue Mage (Limited Job)' ? `https://xivapi.com/cj/1/${job.UnlockedState.Name.toLowerCase().split(' ').join('')}.png` : 'https://xivapi.com/cj/1/bluemage.png'} style={{ width: '50px' }} />
            <Typography>{job.Level}</Typography>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default JobGrid