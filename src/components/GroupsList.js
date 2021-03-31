import React from "react";
import GroupListItem from './GroupListItem';

const GroupsList = ({ groups }) => {
    return (
        <>  <h3 className="text-2xl  font-semibold mb-8"> Subjects </h3>
        
       
            
            <span className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4" >
                    {groups.map(group => <GroupListItem key={group.id} group={group} />)}
                    
            </span>
         
            
            
           
        </>
    );
};

export default GroupsList;