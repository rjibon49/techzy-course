import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

//Components Import

import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Courses from './Components/Courses/Courses';
import Tutors from './Components/Tutors/Tutors';
import TutorDetails from './Components/TutorDetails/TutorDetails';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound';



function App() {
  
  return (
    <div>
      <Router>
        <Nav></Nav>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/courses" exact component={Courses} />
            <Route path="/tutors" exact component={Tutors} />
            <Route path="/tutors/:tutorId" component={TutorDetails} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
