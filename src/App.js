import './App.css';
import { Row, Col, Container } from 'react-bootstrap';
import Transcription from './components/Transcription';
import Audio from './components/Audio';

function App() {
  return (
    <Container>
      <h1>Audio Text</h1>
      <Row>
        <Col md={6}>
          <Audio />
        </Col>

        <Col md={6}>
          <Transcription />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
