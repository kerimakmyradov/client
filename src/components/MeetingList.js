import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {API_ENDPOINT} from '../utils/consts'
import ListItem from './ListItem';

const MeetingList = () => {

    const[list, setList]=useState([])

    const fetchUsersMeetingList=async()=>{
        try {
            const response = await axios.get(API_ENDPOINT);
    
            if (response.status === 200) {
                setList(response.data.meetings);
                console.log(list)
            } else {
                console.error('Failed to fetch user meeting list.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(()=>{
        fetchUsersMeetingList()
    },[])

    return (
        <>
            {list[0] ?
                list.map((l)=> <ListItem key={l.id} list={l}/> )
                :
                <div className='mt-5 p-4 bg-red-500/80 text-gray-300'>No meeting lists available!</div>
            }
        </>
    );
};

export default MeetingList;