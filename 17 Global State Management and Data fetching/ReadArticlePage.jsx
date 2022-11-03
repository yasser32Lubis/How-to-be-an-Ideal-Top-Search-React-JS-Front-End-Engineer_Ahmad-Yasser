import React from 'react';
import { Button, Spinner, Stack } from "react-bootstrap";

const ReadArticlePage = (
    {
    articles,
    loading,
    setReload 
    }
) => {
    return (
        <Stack gap={3} className="align-items-center">
            Read Article
            <Button onClick={() => setReload()}>Refresh</Button>
            {
                loading
                ?
                <Spinner animation="grow" />
                :
                articles.map((article) =>(
                    <div key={article.id}>{article.title}</div>
                ))
            }
        </Stack>
    );
};

export default ReadArticlePage;