import React from 'react';
import { Button, Form, Spinner, Stack } from "react-bootstrap";

const CreateArticlePage = ({
    articles,
    loading,
    formData,
    handleSubmit,
    handleChangeFormData
}) => {
    const {authorId, id, rating, title} = formData;
    return (
        <Stack gap={4} className="d-flex flex-column justify-content-center align-items-center">
            <h1>Create Article</h1>
            <Form onSubmit={handleSubmit}>
            <Stack direction="horizontal" gap={3}>
                    <Form.Group>
                        <Form.Label>Author ID</Form.Label>
                        <Form.Control 
                        value={authorId} 
                        onChange={(ev) => handleChangeFormData("authorId", ev.currentTarget.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>ID</Form.Label>
                        <Form.Control
                        value={id}
                        onChange={(ev) => handleChangeFormData("id", ev.currentTarget.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                        value={rating} 
                        onChange={(ev) => handleChangeFormData("rating", ev.currentTarget.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                        value={title}
                        onChange={(ev) => handleChangeFormData("title", ev.currentTarget.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
            </Stack>
            </Form>
            {
                loading
                ?
                <Spinner animation="grow" />
                :
                articles.map((article) => (
                    <div key={article.id}>{article.id}. {article.title}. {article.author_id}.</div>
                ))
            }
        </Stack>
    )
}

export default CreateArticlePage;