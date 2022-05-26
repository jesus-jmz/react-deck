import { useRef, useState } from "react";
import { Row, Col } from "react-bootstrap";
import audio from "../media/569776__theoter__emotional-orchestra.wav";
import styled from "styled-components";
import TranscriptionText from "./TranscriptionText";
import useContextMenu from "../hooks/useContextMenu";
import Menu from "./ContextMenu";
import StoredList from "./StoredList";
import ServeredList from "./ServeredList";
import useFetch from "../hooks/useFetch";

const TextContent = styled.div`
height: 100%;
`;

const TextBlock = styled.div`
position: static;
display: flex;
overflow: auto;
height: 256px;
scroll-behavior: smooth;
transition: linear 2s;
`;



const AudioText = ({notas, error}) => {

    const audioRef = useRef(null);
    const textRef = useRef(null);
    const {x, y, showMenu, selection} = useContextMenu();
    const [selectionList, setSelectionList] = useState([]);
    
    
    const logAudio = () => {
    var audioProgress = ((audioRef.current.currentTime / audioRef.current.duration) * 100);
    textRef.current.scrollTop = audioProgress * (textRef.current.scrollTopMax / 100);
    };

  return (
    <>
      <Menu
        x={x}
        y={y}
        showMenu={showMenu}
        selection={selection}
        selectionList={selectionList}
      />

      <h1>Audio-Transcripción</h1>
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
          <StoredList selectionList={selectionList} />
          {/*!error && (<ServeredList selectionList={notas} error={error}/>)*/}
          
        </Col>
      </Row>
    </>
  );
};

export default AudioText;
