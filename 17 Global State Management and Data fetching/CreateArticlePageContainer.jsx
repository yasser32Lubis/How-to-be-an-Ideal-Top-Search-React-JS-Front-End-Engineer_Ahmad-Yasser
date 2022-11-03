import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import CreateArticlePage from "../component/CreateArticlePage";
import { client, getArticles } from "../api"

const CreateArticleContainer = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState([true]);

  const [formData, setFormData] = useState({
    authorId: "",
    id: "",
    rating: 0,
    title: "",
  });

  const handleChangeFormData = (label, newValue) => {
    setFormData({
      ...formData,
      [label]: newValue,
    });
  };


  useEffect(() => {

    getArticles()
      .then((res) => {
        setArticles(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loading]);

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    const articleLocation = articles.findIndex((article) => article.id === +formData.id);
    const id = formData.id;
    if (articleLocation >= 0 ) {
        await client.put(id, {
            author_id: formData.authorId,
            rating: formData.rating,
            title: formData.title
        });
    } else {
    await client.post("/", {
        author_id: formData.authorId,
        id: formData.id,
        rating: formData.rating,
        title: formData.title
    })
}
    setLoading(true);
  }
  return (
    <>
      <CreateArticlePage
        formData={formData}
        handleChangeFormData={handleChangeFormData}
        handleSubmit={handleSubmit}
        articles={articles}
        loading={loading}
      />
    </>
  );
};

export default CreateArticleContainer;