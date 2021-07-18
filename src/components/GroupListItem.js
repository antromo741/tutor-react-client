import React from 'react'
import { Link } from 'react-router-dom'
//This component adds the data to the first page diplayed in the group list component

const GroupListItem = ({ group }) => {
    return (
        <div className="" key={group.id}>
            <Link to={`/groups/${group.id}`}>
                <button class="focus border-2 border-purple-500 hover:border-black shadow-xl 
                    w-full text-2xl ease-in-out transition-all p-8 bg-blue-300 hover:bg-green-400 
                    duration-200 transform hover:-translate-y-1 hover:scale-105 rounded-md mt-6 ">{group.name}
                </button>
            </Link>
        </div>
    );
};

export default GroupListItem