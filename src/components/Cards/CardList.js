import React, {useState, useEffect} from 'react';
import CardItem from "./CardItem";
import axios from 'axios';

const CardList = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/`)
            .then((res) => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [posts])

    return (
        <div style={{marginTop: '50px'}}>
            <CardItem posts={posts}/>
        </div>
    );
}

export default CardList;