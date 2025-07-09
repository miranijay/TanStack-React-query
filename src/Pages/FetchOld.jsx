import React, { useEffect, useState } from 'react'
import { fetchPost } from '../API/api';

const FetchOld = () => {

    const [posts, setPosts] = useState([]);
    const getPostData = async () => {
        try {
            const res = await fetchPost();
            res.status === 200 ? setPosts(res.data) : [];

        } catch (error) {
            console.log(error);
            return [];
        }
    };

    useEffect(() => {
        getPostData();
    }, [])

    return (
        <div>
            <ul className="section-accordion">
                {
                    posts?.map((post) => {
                        const { id, title, body } = post;
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

export default FetchOld;