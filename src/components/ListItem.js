import React from 'react';

const ListItem = ({list}) => {
    return (
        <div className='grid grid-cols-4 gap-4 p-4 mt-5 bg-gray-400/80 text-white font-bold'>
            <div>
                {list.agenda}
            </div>
        </div>
    );
};

export default ListItem;