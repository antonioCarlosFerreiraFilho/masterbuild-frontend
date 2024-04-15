//react
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//Pages
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Article from './pages/Article/Article';
import Auth from "./pages/Auth/Auth";
import Candidate from "./pages/Candidate/Candidate";
//components
import Navbar from "./components/Navbar/Navbar";
import LateralMenu from "./components/LateralMenu/LateralMenu";
import Loading from "./components/Loading/Loading";
//hook authUser
import { useAuth } from './hooks/useAuth';

function App() {

  const {auth, loading} = useAuth();

  if(loading) {

    return <Loading />
  };

  

  return (
    <div className="App">
      <BrowserRouter>
        <LateralMenu />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/auth" element={!auth ? <Auth /> : <Navigate to="/" /> } />
          <Route path="/candidate" element={<Candidate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
