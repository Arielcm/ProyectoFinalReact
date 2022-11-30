import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import NavBarP from './layouts/navbar';
import Footer from './layouts/footer';
import Clients from './components/clients';
import Team from './components/team';
import Novedades from './components/NovedadesPage'



function App() {
  return (
    <div className="App">
      <header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <NavBarP/> }>
            <Route index element={ <Home/> } />
            <Route path="about" element={ <About/> } />
            <Route path="clients" element={ <Clients/> } />
            <Route path="team" element={ <Team/> } />
            <Route path="contact" element={ <Contact/> } />
            <Route path="NovedadesPage" element={ <Novedades/> } />
            <Route path="*" element={ <Navigate to ="/" /> } />
          </Route>
        </Routes>
      </BrowserRouter>
      </header>
      <footer>
      <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
