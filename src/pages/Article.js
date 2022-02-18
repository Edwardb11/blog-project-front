import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articlesContent from "./article-content";
import { Articles } from "./../components/Articles";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";

export const Article = ({ match }) => {
  const { name } = useParams();
  const article = articlesContent.find((article) => article.name === name);

  const [articleInfo, setArticleInfo] = useState({ comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      // console.log(body);
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  if (!article)
    return (
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-gray-900">
        Article does not exists
      </h1>
    );
  const OtherArticles = articlesContent.filter(
    (article) => article.name !== name
  );
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-gray-900">
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
          {" "}
          {paragraph}
        </p>
      ))}
      <CommentsList comments={articleInfo.comments} />
      <AddCommentForm articleName={name} articleInfo={setArticleInfo}/>

      {/* add other article when open one article */}
      <h1 className="sm:text-2xl text-xl font-bold mt-4 mb-4 text-gray-900 ">
        {" "}
        Other Articles
      </h1>
      <div className="flex flex-wrap -m-4">
        <Articles articles={OtherArticles}></Articles>
      </div>
    </>
  );
};
