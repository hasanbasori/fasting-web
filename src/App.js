import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AboutUsPage from './pages/AboutUsPage'
import FastingPage from './pages/FastingPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import PostContentPage from './pages/PostContentPage'
import RegisterPage from './pages/RegisterPage'
import SummaryPage from './pages/SummaryPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/about-us" component={AboutUsPage} />
          <Route path="/fasting" component={FastingPage} />
          <Route path="/homepage" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/content-post" component={PostContentPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/summary" component={SummaryPage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
