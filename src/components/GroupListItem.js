import React from 'react'
import { Link } from 'react-router-dom'

const GroupListItem = ({ group }) => {
    return (
        <button className="w-full text-2xl rounded-md p-4 bg-blue-300 mt-4 hover:bg-blue-400  transition-all duration-200" 
            key={group.id}>
            <Link to={`/groups/${group.id}`}>{group.name}</Link>
        </button>
    );
};

export default GroupListItem