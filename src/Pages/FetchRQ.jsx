import React, { useEffect, useState } from 'react'
import { fetchPost } from '../API/api';
import { useQuery } from '@tanstack/react-query';

const FetchRQ = () => {
    const getPostData = async () => {
        try {
            const res = await fetchPost();
            return res.status === 200 ? res.data : [];
        } catch (error) {
            console.log(error);
            return [];
        }
    };

    const { data } = useQuery({
        queryKey: ["posts"], // useState
        queryFn: getPostData, // useEffect
    })
    
    return (
        <div>
            <ul className="section-accordion">
                {
                    data?.map((currElem) => {
                        const { id, title, body } = currElem;
                        return (
                            <li key={id}>
                                <p>{title}</p>
                                <p>{body}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default FetchRQ;