import React from 'react';
import { useParams } from 'react-router-dom';

const Post = (props) => {
    console.log(props)
    const {hk} = useParams()
   
    return (
        <div>
            <h2>this is post{hk}</h2>
        </div>
    );
};

export default Post;