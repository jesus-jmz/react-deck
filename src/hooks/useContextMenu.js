import { useEffect, useState } from "react";

export default function useContextMenu() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [showMenu, setShowMenu] = useState(false);
    const [selection, setSelection] = useState("");
    var textList = [];


    const handleContextMenu = (e) => {
        e.preventDefault();
        e.pageX + 450 > window.innerWidth ? setX(`${window.innerWidth - 480}px`) : setX(e.pageX);
        e.pageY + 150 > window.innerHeight ? setY(`${window.innerHeight - 180}px`) : setY(e.pageY);
        setSelection(textList[textList.length-1].toString());
        textList = [];
        console.log("Selection: ",selection);
        setShowMenu(true);
    }

    const handleClick = () => {
        showMenu && setShowMenu(false);
    }

    const handleSelectionChange = () =>{
        textList.push(window.getSelection().toString());
    }

    useEffect(()=> {
        document.addEventListener("click", handleClick);
        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("selectionchange", handleSelectionChange);
        return () => {
            document.removeEventListener("click", handleClick);
            document.removeEventListener("contextmenu", handleContextMenu);            
            document.removeEventListener("select", handleSelectionChange);            

        }
    });

    return {x, y, showMenu, selection};

}