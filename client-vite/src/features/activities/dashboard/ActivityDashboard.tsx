import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Grid } from 'semantic-ui-react'
import Loading from '../../../app/components/Loading'
import { useStore } from '../../../app/stores/store'
import ActivityFilters from './ActivityFilters'
import ActivityList from './ActivityList'

const ActivityDashboard = () => {
  const { activityStore } = useStore()
  const { activityRegistry } = activityStore

  useEffect(() => {
    if (activityRegistry.size <= 1) {
      activityStore.loadActivities()
    }
  }, [activityStore])

  if (activityStore.loadingInitial) return <Loading content="Loading app..." />

  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList />
      </Grid.Column>
      <Grid.Column width="6">
        <ActivityFilters />
      </Grid.Column>
    </Grid>
  )
}

export default observer(ActivityDashboard)
