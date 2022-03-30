import { useRef, useState } from "react";
import audio from "../media/569776__theoter__emotional-orchestra.wav"

const Audio = () => {

    const audioRef = useRef(null);

    const [progresss, setProgress] = useState(0);
    const [time, setTime] = useState(0);

    const logAudio = () => {
        setProgress(
            Math.round((audioRef.current.currentTime/audioRef.current.duration)*100)
        );
    }

    return ( 
        <>
            <h4>Audio</h4>
            <audio  onTimeUpdate={logAudio} ref={audioRef} controls controlsList="nodownload">
                <source src={audio}/>
            </audio>
            
            <p>Progress: {progresss}%</p>
        </>
     );
}
 
export default Audio;