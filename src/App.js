import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import FastingPage from "./pages/FastingPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PostContentPage from "./pages/PostContentPage";
import RegisterPage from "./pages/RegisterPage";
import SinglePostPage from "./pages/SinglePostPage";
import SummaryPage from "./pages/SummaryPage";
import VideoContentPage from "./pages/VideoContentPage";
import VideoPostPage from "./pages/VideoPostPage";
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
          <Route path="/single-post" component={SinglePostPage} />
          <Route path="/summary" component={SummaryPage} />
          <Route path="/video-content" component={VideoContentPage} />
          <Route path="/video-post" component={VideoPostPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
