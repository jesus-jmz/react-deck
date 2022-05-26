import styled from "styled-components";

const StyledList = styled.ul`

    list-style:none;
    padding:10px;
    border:1px solid #e6e6e6;
    border-radius:10px;

`

const ListElement = styled.li`
    
    padding:0.5rem;

    &:nth-child(odd) {
        background: #e6e6e6;
    }

    &:nth-child(even) {
        background: #fff;
        border: 1px solid #e6e6e6;
    }
`

const StoredList = ({selectionList}) => {
    return ( 

        <div className="mt-5">
            <h4 className="subtitle">Lista de datos</h4>
            <StyledList>
                {(selectionList && selectionList.length > 0) ? 
                selectionList.map((listElement) => 
                    (
                        <ListElement key={listElement}>{listElement}</ListElement>
                    ))
                :
                
                    (
                        <div className="text-center">No hay datos todavía</div>
                    )

                }
            </StyledList>
            
        </div>

     );
}
 
export default StoredList;