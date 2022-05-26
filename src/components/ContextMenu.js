import { useRef } from "react";
import styled from "styled-components"

//document.addEventListener("selectionchange", handleSelectionChange, false);

const Menu = ({x, y, showMenu, selection, selectionList}) => {

    

    const handleList = () => {
        selectionList.push(selection)
        const note = {
            title: "Nueva Nota",
            text: selection
        }
        fetch("http://localhost:3030/notas", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(note)
        }).then(() => {
            console.log("New note added");
        })
        listLoop();
    }

    const listLoop = () => {
        console.log("Lista de objetos seleccionados")
        for(var i = 0; i < selectionList.length; i++){
            console.log(selectionList[i]);
        }
    }

    const style = () => {
        return {
            height: "fit-content",
            width: "fit-content",
            borderRadius: 10,            
            justifyContent: "center",
            alignItems: "center",
            padding:10,
            top: y,
            left: x,
            position: "absolute",
            display: showMenu ? "flex" : "none",
            zIndex: 1000
        }
    }

    const StyledBtn = styled.button`
        border:none;
        border-radius:5px;
        background: #222;
        color:#FFF;
        font-weight:bold;
        cursor:pointer;
        padding: 0.75rem;
        transition: 0.25s;
        margin-top:1rem;
    
        &:hover{
            background: #777;
        }
    `;

    const textareaRef = useRef(null);

    const StyledForm = styled.form`
    
        background: #fff;
        display: flex;
        flex-direction: column;
        border-radius:15px;
        padding:1rem;
        width: 450px;
        box-shadow: 0.25rem 0.25rem 1rem #222;
    `;

    return ( 
        <div style={style()}>
            
            <StyledForm>
                <h5 className="mb-1">Selección</h5>
                {/* <textarea height={textareaRef.elementHeihgt} ref={textareaRef} type="text" value={selection} /> */}
                <p className="m-0">{selection}</p>
                <StyledBtn onClick={() => handleList()}>Add to list</StyledBtn>
            </StyledForm>
        </div>



     );
}


 
export default Menu;