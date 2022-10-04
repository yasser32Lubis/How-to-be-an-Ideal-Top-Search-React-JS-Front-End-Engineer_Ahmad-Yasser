import React, { useState, useEffect} from 'react';
import ReadArticlePage from "../component/ReadArticlePage"
import { getArticles } from '../api'
import axios from "axios"



const ReadArticlePageContainer = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(articles)



    const setReload = () => {
        setLoading(true);
    }

    useEffect(() => {
        console.log()
        getArticles()
            .then((res) => {
                setArticles(res);
                setLoading(false);
            })
            .catch((err) =>{
                console.log(err)
            })
    }, [loading]);

    return (
        <ReadArticlePage articles={articles} 
                         loading={loading}
                         setReload={setReload}/>
    );
};

export default ReadArticlePageContainer;