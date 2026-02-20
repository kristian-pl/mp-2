import styled from "styled-components";
import type {Character} from "../types/Character.ts";


const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: #abcad4;
`;

const SingleCharDiv=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: #c27e48;
    color: black;
    border: 3px #693003 solid;
    font: italic small-caps calc(2px + 1vw) 'Bangers', cursive;
    text-align: center;
    border-radius: 30px;

`;

// used .join here to convert array to string, found it with google cause i didnt know how to proceed
export default function Disney(props: { data: Character[] }) {
    return (
        <AllCharsDiv>
            {props.data.map((char: Character) =>
                <SingleCharDiv key={char._id}>
                    <h1>{char.name}</h1>
                    <img src={char.imageUrl} alt={`image of ${char.name}`}/>
                    <p>
                        <strong>Films:</strong>{" "}
                        {char.films.join(", ")}
                    </p>
                    <p>
                        <strong>TV Shows:</strong>{" "}
                        {char.tvShows.join(", ")}
                    </p>
                </SingleCharDiv>
            )}
        </AllCharsDiv>
    );
}