import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AboutUsPage from './pages/AboutUsPage'
import FastingPage from './pages/FastingPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import PostContentPage from './pages/PostContentPage'
import RegisterPage from './pages/RegisterPage'
import SummaryPage from './pages/SummaryPage'
import VideoPostPage from './pages/VideoPostPage'
import SingleContentPage from '../src/pages/SingleContentPage'
import StoreContextProvider from './Context/StoreContextProvider'
function App() {
  return (
    <div className="App">
      <StoreContextProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/about-us" component={AboutUsPage} />
            <Route path="/fasting" component={FastingPage} />
            <Route path="/homepage" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/content" component={PostContentPage} />
            <Route path="/single-content" component={SingleContentPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/summary" component={SummaryPage} />
            <Route path="/video" component={VideoPostPage} />
          </Switch>
        </BrowserRouter>
      </StoreContextProvider>
    </div>
  )
}

export default App
