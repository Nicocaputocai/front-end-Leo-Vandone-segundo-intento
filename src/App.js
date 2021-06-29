import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './componets/Header';
import './App.css';
import About from './pages/About.jsx';
import Admin from './pages/Admin';
import Note from './pages/Note.jsx';
import Contact from './pages/Contact';
import EditNote from './pages/EditNote';
import Category from './pages/Category';
import Course from './componets/Course.jsx';
import Home from './pages/Home';
import Test from './pages/Test';
import Footer from './componets/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main-container">
        <Switch>

          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/courses/:id">
            <Course />
          </Route>
          <Route path="/courses" exact>
            
          </Route>

          <Route path="/blog/cat/:category">
            <Category />
          </Route>

          <Route path="/blog/:id">
            <Note />
          </Route>

          <Route path="/contact" exact>
            <Contact />
          </Route>

          <Route path="/about" exact>
            <About />
          </Route>

          <Route path="/admin" exact>
            <Admin />
          </Route> 

          <Route path="/admin/editNote/:id">
          <EditNote />
          </Route>

          <Route>
            
          </Route>
          <Route path="/test">
            <Test />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
