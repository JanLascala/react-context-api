import { useContext } from "react";
import CharacterContext from "../Contexts/CharacterContext";
import Cards from "../Components/Cards"
//import mtvCartoons from "../Data/Characters"
const { mtvCartoons } = useContext(CharacterContext)


export default function Posts({ mtvCartoons }) {
    return (
        <div>
            <h1> Cartoon nights</h1>
            <div className="container">
                <div className="row">
                    {mtvCartoons.map((cartoon, index) => (
                        <Cards key={index} id={cartoon.id} {...cartoon} />
                    ))}
                </div>
            </div>
        </div>
    )
};




