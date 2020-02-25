import React from 'react';
import {Link} from 'react-router-dom';


const Member = (props) => {
    return (
    <div className="main-content">
        <div><Link className="back" to="/members">Back</Link></div>

        <div className="container">
        <div className="image-profile" style= {{backgroundImage:"url(" + props.image + ")"}}></div>   
        <h2>{props.Name}</h2>
        <p>Props.details</p>
        </div>
    </div>
    );
};

export default Member;