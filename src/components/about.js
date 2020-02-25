// import React from 'react';
// import {MembersList} from "../data/members";
// import {Link} from 'react-router-dom';


// const Team = (props) => {

//     let members = MembersList.map((person) => {
//         return (
//             <div className="member-container">
//                 <Link to ={`/members/${person.url}`}>
//                     <div className="member-image" style={{backgroundImage:"url(" + person.img_src + ")"}}></div>
//                 </Link>
//                 <h3>{person.name}</h3>
//             </div>
//         );

//     });

//     return (
//     <div className="main-content">
//         <div><Link className="back" to="/">Back</Link></div>
//         <h2>{props.title}</h2>
//         <div className="container">
//             {members}
//         </div>
//     </div>
//     );
// };

// export default Team;