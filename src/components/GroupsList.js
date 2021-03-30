import React from "react";
import GroupListItem from './GroupListItem';
import "tailwindcss/tailwind.css"
const GroupsList = ({ groups }) => {
    return (
        <> <h1> Subjects </h1>
            <div class=""></div>
                <ul>
                <span class="grid grid-cols-3 gap-4">{groups.map(group => <GroupListItem key={group.id} group={group} />)}</span>
                
                </ul>
        
            
           
        </>
    );
};

export default GroupsList;