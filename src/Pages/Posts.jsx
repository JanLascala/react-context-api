import { useContext } from "react";
import CharacterContext from "../Contexts/CharacterContext";
import Cards from "../Components/Cards"
//import mtvCartoons from "../Data/Characters" i can cancel this 



export default function Posts() {
    const { mtvCartoons } = useContext(CharacterContext)

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




