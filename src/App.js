import "./App.css";
import { Container } from "react-bootstrap";
import Nav from "./components/Nav";
import AudioText from "./components/AudioText";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Notas from "./components/Notas";
import useFetch from "./hooks/useFetch";

function App() {
  
  const {data: notas, error} = useFetch("http://localhost:3030/notas");

  return (
    <Container>
      <Router>
        <Nav />
        <Routes>
          <Route path={"/"} element={<AudioText notas={notas} error={error}/>}/>
          <Route path={"/notas"} element={<Notas notas={notas} error={error}/>}/>
        </Routes>
      </Router>
      
    </Container>
  );
}

export default App;
