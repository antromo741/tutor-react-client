import React from "react";
import GroupListItem from './GroupListItem';
// This is the component displayed in the group index which is the first displayed out of the app component and needs to use listitem to show the data
const GroupsList = ({ groups }) => {
    return (
        <>  <h3 className="text-2xl  font-semibold mb-8"> Subjects </h3>
        
       
            
            <div className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4" >
                    {groups.map(group => <GroupListItem key={group.id} group={group} />)}
                    
            </div>
         
            
            
           
        </>
    );
};

export default GroupsList;