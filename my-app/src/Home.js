
// import React from "react";
import {Link} from "react-router-dom";
function Home(){
    return(
        <div>
            <h1>This is the home Page.</h1>
            <Link to='/Navigation'>Navbar</Link>
        </div>
    )
}
export default Home;