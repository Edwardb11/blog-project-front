import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import Home from "./pages/Home";
import { Article } from "./pages/Article";
import { ArticleList } from "./pages/ArticleList";
import { About } from "./pages/About";
import { NavBar } from "./components/NavBar";
import { NotFound } from "./pages/NoFound";

export default function App() {
  return (
    <Router>
      <NavBar />
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Article" element={<Article />}></Route>
          <Route path="/ArticleList" element={<ArticleList />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
