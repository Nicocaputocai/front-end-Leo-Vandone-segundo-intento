import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './componets/Header';
import './App.css';
import About from './pages/About.jsx';
import Admin from './pages/Admin';
import Note from './pages/Note.jsx';
import Contact from './pages/Contact';
import EditNote from './pages/EditNote';
import Category from './pages/Category';
import Course from './componets/Course.jsx';
import EditCourse from './pages/EditCourse'
import Home from './pages/Home';
import Test from './pages/Test';
import Footer from './componets/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main-container">

        <Home />
        <Routes>
        
          <Route path="/" exact element={Home} />

          <Route path="/courses/:id" element={Course} />

          {/* <Route path="/courses" exact>
            
          </Route> */}

          <Route path="/blog/cat/:category" element={Category}/>


          <Route path="/blog/:id" element={Note}/>

          <Route path="/contact" exact element={Contact} />

          <Route path="/about" exact element={About}/>


          <Route path="/admin" exact element={Admin} />

          <Route path="/admin/editNote/:id" element={EditNote} />


          <Route path="/admin/editCourse/:id" element={EditNote} />

          <Route path="/test" element={Test} />
          
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
