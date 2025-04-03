import mtvCartoons from "../Data/Characters"
import { Link } from "react-router-dom";

export default function Cards({ id, image, character, show }) {
    return (
        <div className="card bg-secondary text-light m-3">
            <div className="card-body text-center">
                <img
                    className="card-img-top mb-3"
                    src={image}
                    alt={character}
                />
                <h5 className="card-title">{character}</h5>
                <p className="card-text">{show}</p>
                <Link to={`/posts/${id}`} className="btn btn-primary mt-2">
                    View Details
                </Link>
            </div>
        </div>
    );
}