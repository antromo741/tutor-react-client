import React from 'react'
import { Link } from 'react-router-dom'

const GroupListItem = ({ group }) => {
    return (
        <button class="focus border-2 border-purple-500 hover:border-black shadow-xl 
        w-full text-2xl ease-in-out transition-all p-8 bg-blue-300 hover:bg-green-400 
        duration-200 transform hover:-translate-y-1 hover:scale-105 rounded-md  mt-6 "
            key={group.id}>
            <Link to={`/groups/${group.id}`}>{group.name}</Link>
        </button>
    );
};

export default GroupListItem