import React from 'react';
import { MembersList } from '../data/members';
import Member from './member';
import Members from './team';
import { Route } from 'react-router-dom';


const MembersContainer =(props) => {
    let memberUrl = MembersList.map((member) => {
        return(
        <Route path={`/members/${member.url}`} render={() => <member image={member.profile_img} name={member.name} details={members.description} />} />
        );
});

return (
    <React.Fragment>
        <Route exact path="members" render={() => <members title="Best Worker" />} />
        {memberUrl}
    </React.Fragment>
);
};

export default MembersContainer;