import { useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const Notas = ({notas, error}) => {

    const tbt = "1fr 1fr 1fr 1fr";

    const [gridFormat, setGridFormat] = useState("1fr 1fr 1fr");
    //const [statedNotes, setStatedNotes] = useState(notas);

    const Grid = styled.div`
    
        display: grid;
        grid-template-columns: ${gridFormat};
        grid-gap:1rem;
        margin-bottom:1rem;
    
    `

    const Note = styled.div`
    
        background:#e6e6e6;
        padding:1rem;
        border-radius:15px;

    `

    const Header = styled.div`
        display: flex;
        justify-content:space-between;
        align-items:center;
    `

    const Buttons = styled.div`
        display:flex;
        gap:1rem;
    
    `

    return (
        <>
            <Header>
                <h4 className="subtitle">Lista de notas</h4>
                <Buttons>
                    <Button onClick={() => setGridFormat("1fr 1fr 1fr")}>3</Button>
                    <Button onClick={() => setGridFormat("1fr 1fr 1fr 1fr")}>4</Button>
                </Buttons>
            </Header>
            
            <Grid className="mt-4">
                {(notas && notas.length > 0) ? 
                notas.map((nota) => 
                    (
                        <Note key={nota.id}>
                            <h5>{nota.title}</h5>
                            <h6>{nota.deck}</h6>
                            {nota.text}
                        </Note>
                    ))
                :
                
                    (
                        <div className="text-center">No hay datos todavía</div>
                    )

                }
            </Grid>
        </>
    );
}
 
export default Notas;