import { Link } from "react-router-dom";

function navBar() {
    return (
        <div className="sidenav">
            <Link to="/home">Today todo</Link>
            <Link to="/weeklyPage">Weekly todo</Link>
        </div>
    )
}

export default navBar;