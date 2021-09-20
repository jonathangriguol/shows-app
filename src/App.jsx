import React from 'react'
import { BrowserRouter as Router,
    Switch,
    Route } from 'react-router-dom'
import ShowPage from './pages/ShowPage'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <MainPage />
                </Route>
                <Route path="/show/:id">
                    <ShowPage />
                </Route>
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
