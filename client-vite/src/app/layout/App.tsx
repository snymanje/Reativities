import React from 'react'
import { Container } from 'semantic-ui-react'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'
import NavBar from './NavBar'
import { observer } from 'mobx-react-lite'
import HomePage from '../../features/home/HomePage'
import { Route, Switch, useLocation } from 'react-router'
import ActivityForm from '../../features/activities/form/ActivityForm'
import ActivityDetails from '../../features/activities/details/ActivityDetails'
import TestErrors from '../../features/errors/TestError'
import { ToastContainer } from 'react-toastify'
import NotFound from '../../features/errors/NotFound'

function App() {
  const location = useLocation()
  return (
    <>
      <ToastContainer position="bottom-right" hideProgressBar />
      <Route path="/" component={HomePage} exact />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: '7em' }}>
              <Switch>
                <Route path="/activities" component={ActivityDashboard} exact />
                <Route path="/activities/:id" component={ActivityDetails} />
                <Route
                  key={location.key}
                  path={['/createActivity', '/manage/:id']}
                  component={ActivityForm}
                />
                <Route path="/errors" component={TestErrors} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </>
        )}
      />
    </>
  )
}

export default observer(App)
