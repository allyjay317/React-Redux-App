import React from 'react'
import { useStyles } from './styles'
import { Grid } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

export const CharacterPageSkeleton = () => {
  const classes = useStyles()
  return (
    <Grid container direction='row' justify='center' spacing={6} className={classes.body}>
      <Grid item>
        <Grid container wrap='nowrap'>
          <Grid item>
            <Grid container direction='column' spacing={1}>
              <Grid item><Skeleton variant='rect' width={50} height={50} /></Grid>
              <Grid item><Skeleton variant='rect' width={50} height={50} /></Grid>
              <Grid item><Skeleton variant='rect' width={50} height={50} /></Grid>
              <Grid item><Skeleton variant='rect' width={50} height={50} /></Grid>
              <Grid item><Skeleton variant='rect' width={50} height={50} /></Grid>
              <Grid item><Skeleton variant='rect' width={50} height={50} /></Grid>
              <Grid item><Skeleton variant='rect' width={50} height={50} /></Grid>
              <Grid item><Skeleton variant='rect' width={50} height={50} /></Grid>
              <Grid item><Skeleton variant='rect' width={50} height={50} /></Grid>
              <Grid item><Skeleton variant='rect' width={50} height={50} /></Grid>
              <Grid item><Skeleton variant='rect' width={50} height={50} /></Grid>
              <Grid item><Skeleton variant='rect' width={50} height={50} /></Grid>
              <Grid item><Skeleton variant='rect' width={50} height={50} /></Grid>
              <Grid item><Skeleton variant='rect' width={50} height={50} /></Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Skeleton variant='rect' width={400} height={800} />
          </Grid>
          <Grid item>
            <Grid container direction='column' spacing={1}>
              <Grid item><Skeleton variant='rect' width={50} height={50} /></Grid>
              <Grid item><Skeleton variant='rect' width={50} height={50} /></Grid>
              <Grid item><Skeleton variant='rect' width={50} height={50} /></Grid>
              <Grid item><Skeleton variant='rect' width={50} height={50} /></Grid>
              <Grid item><Skeleton variant='rect' width={50} height={50} /></Grid>
              <Grid item><Skeleton variant='rect' width={50} height={50} /></Grid>
              <Grid item><Skeleton variant='rect' width={50} height={50} /></Grid>
              <Grid item><Skeleton variant='rect' width={50} height={50} /></Grid>
              <Grid item><Skeleton variant='rect' width={50} height={50} /></Grid>
              <Grid item><Skeleton variant='rect' width={50} height={50} /></Grid>
              <Grid item><Skeleton variant='rect' width={50} height={50} /></Grid>
              <Grid item><Skeleton variant='rect' width={50} height={50} /></Grid>
              <Grid item><Skeleton variant='rect' width={50} height={50} /></Grid>
              <Grid item><Skeleton variant='rect' width={50} height={50} /></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid container direction='column'>
          <Grid item xs={12}>
            <Skeleton variant='text' />
            <Skeleton variant='text' />
          </Grid>
          <Grid container spacing={2}>
            <Grid item><Skeleton variant='rect' width={50} height={50} /><Skeleton variant='text' /></Grid>
            <Grid item><Skeleton variant='rect' width={50} height={50} /><Skeleton variant='text' /></Grid>
            <Grid item><Skeleton variant='rect' width={50} height={50} /><Skeleton variant='text' /></Grid>
            <Grid item><Skeleton variant='rect' width={50} height={50} /><Skeleton variant='text' /></Grid>
            <Grid item><Skeleton variant='rect' width={50} height={50} /><Skeleton variant='text' /></Grid>
            <Grid item><Skeleton variant='rect' width={50} height={50} /><Skeleton variant='text' /></Grid>
            <Grid item><Skeleton variant='rect' width={50} height={50} /><Skeleton variant='text' /></Grid>
            <Grid item><Skeleton variant='rect' width={50} height={50} /><Skeleton variant='text' /></Grid>
            <Grid item><Skeleton variant='rect' width={50} height={50} /><Skeleton variant='text' /></Grid>
            <Grid item><Skeleton variant='rect' width={50} height={50} /><Skeleton variant='text' /></Grid>
            <Grid item><Skeleton variant='rect' width={50} height={50} /><Skeleton variant='text' /></Grid>
            <Grid item><Skeleton variant='rect' width={50} height={50} /><Skeleton variant='text' /></Grid>
            <Grid item><Skeleton variant='rect' width={50} height={50} /><Skeleton variant='text' /></Grid>
            <Grid item><Skeleton variant='rect' width={50} height={50} /><Skeleton variant='text' /></Grid>
            <Grid item><Skeleton variant='rect' width={50} height={50} /><Skeleton variant='text' /></Grid>
          </Grid>
          <Grid item>
            <Skeleton variant='rect' width={200} height={50} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export const SearchResultsSkeleton = () => {
  const classes = useStyles()
  return (
    <div className={classes.body}>
      search
    </div>
  )
}