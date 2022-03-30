import TranscriptionText from "./TranscriptionText";
import styled from "styled-components";
import {Form, Button} from 'react-bootstrap';
import { useRef, useState } from "react";

const TextContent = styled.div`
    height: 100%;
`

const TextBlock = styled.div`

    position: static;
    display: flex;
    overflow: auto;
    height:256px;   

`

const Transcription = () => {

    const [rangeValue, setRangeValue] = useState(0);
    const [scrollTopValue, setScrollTopValue] = useState(0);

    const rangeRef = useRef(null);
    const textRef = useRef(null);

    const logRange = () => {
      setRangeValue(rangeRef.current.value);
      textRef.current.scrollTop = (rangeRef.current.value * 20.94);
    }

    return ( 
        <div>
              <h4 className="subtiitle">Transcripción</h4>
              <TextBlock ref={textRef} className="text-block">
                <TextContent  className="text-content body">
                  <TranscriptionText/>
                  <div className="d-flex justify-content-center align-items-center"> 
                    <a className="btn btn-primary mt-2" href="#" target="_blank">Descargar Transcripción</a>
                  </div>
                </TextContent>
              </TextBlock>
              
              <Form.Label className="mt-5">Range</Form.Label>
              <Form.Range onChange={logRange} ref={rangeRef}/>
              <p>Range value: {rangeValue}</p>
              <p>ScrollTop value: {scrollTopValue}</p>
            </div>
     );
}
 
export default Transcription;