import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {

    return (<><div>
        <h3>Sorry!!! Not found</h3>
        <p style={{ textAlign: "center" }}>
            <Link to="/">Go to Home </Link>
        </p>
    </div>;

    </>)
}
export default NotFound;



