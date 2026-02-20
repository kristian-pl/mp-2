import type {Characters} from "../types/Characters.ts";

import styled from "styled-components";


const StyledDiv=styled.div`
    background-color: beige;    ${(props):any =>props.sp==="Human"?"blue":"green"};
    width: 50%;
    text-align: center;
    color: brown;
`


export default function RickAndMorty(props:{data:Characters[]}):Element{

    return(
        <>
            {
                props.data.map( (char):Element =>
                    <StyledDiv key={char.id}>
                        <h2>{char.name}</h2>
                        <img src={char.img} alt={char.name} />
                    </StyledDiv>
                )
            }
        </>
    );
}