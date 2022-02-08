import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import mainPage from "../mainPage";
import weeklyPage from "../weeklyPage";
import navBar from "./navbar";

function router() {

    return(
        <Router>
            {navBar()}
            <Routes>
                <Route path="/" element={mainPage()} />
                <Route path="/home" element={mainPage()} />
                <Route path="/weeklyPage" element={weeklyPage()} />
            </Routes>
        </Router>
    )

}

export default router;