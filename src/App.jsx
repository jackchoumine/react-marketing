import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import { Landing, Pricing } from './components'

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
})

export default ({ history }) => {
  const isProd = process.env.NODE_ENV === 'production'
  const baseUrl = isProd ? '/react-marketing' : '/'
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history} baseUrl={baseUrl}>
          <Switch>
            <Route exact path='/pricing' component={Pricing} />
            <Route path='/' component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
}
