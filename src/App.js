import "./App.css";
import { Row, Col, Container } from "react-bootstrap";
import {useRef} from "react";
import audio from "./media/569776__theoter__emotional-orchestra.wav";
import styled from "styled-components";
import {Form, Button} from 'react-bootstrap';
import TranscriptionText from "./components/TranscriptionText";

function App() {

  {/* Styled Components */}
  const TextContent = styled.div`
    height: 100%;
  `;

  const TextBlock = styled.div`
    position: static;
    display: flex;
    overflow: auto;
    height: 256px;
    scroll-behavior: smooth;
    transition-timing-function: ease-in-out;
  `;

  {/* Hooks and functions */}

  const audioRef = useRef(null);
  const textRef = useRef(null);

  const logAudio = () => {
    var audioProgress = ((audioRef.current.currentTime / audioRef.current.duration) * 100);
    var scrollRatio = (textRef.current.scrollTopMax / 100);
    textRef.current.scrollTop = audioProgress * scrollRatio;
  };

  return (
    <Container>
      <h1>Audio Text</h1>
      <Row>
        <Col md={6}>
          <h4>Audio</h4>
          <audio
            onTimeUpdate={logAudio}
            ref={audioRef}
            controls
            controlsList="nodownload"
          >
            <source src={audio} />
          </audio>
        </Col>

        <Col md={6}>
          <div>
            <h4 className="subtiitle">Transcripción</h4>
            <TextBlock ref={textRef} className="text-block">
              <TextContent className="text-content body">
                <TranscriptionText />
                <div className="d-flex justify-content-center align-items-center">
                  <a className="btn btn-primary mt-2" href="#" target="_blank">
                    Descargar Transcripción
                  </a>
                </div>
              </TextContent>
            </TextBlock>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
