import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import { Landing, Pricing } from './components'

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
})

export default ({ history }) => {
  return (
    <div>
      <p>
        <a href='https://jackchoumine.github.io/react-container/'>集成后的页面</a>
        <br />
        <a href='https://jackchoumine.github.io/react-marketing/'>marketing-react 微应用</a>
        <br />
        <a href='https://jackchoumine.github.io/vue3-dashboard/'>vue3-dashboard 微应用</a>
        <br />
        <a href='https://jackchoumine.github.io/react-auth/'>react-auth 微应用]</a>
        <br />
        <hr />
      </p>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path='/pricing' component={Pricing} />
            <Route path='/' component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
}
