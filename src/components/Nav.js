import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.nav`

    display:flex;
    flex-direction:row;
    padding: 1rem;
    background: #eee;
    border-radius:10px;
    margin-top:1rem;
    margin-bottom:2rem;
    justify-content:center;
    gap:1rem;

    a {
        text-decoration:none;
        background:#5b5b5b;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        color: #fff;

        &:hover {
            background:#6e6e6e;
        }
    }

`

const Nav = () => {

    

    return ( 
        <Navbar>
            <Link to={"/"}>Audio-texto</Link>
            <Link to={"/notas"}>Notas</Link>
        </Navbar>
     );
}
 
export default Nav;