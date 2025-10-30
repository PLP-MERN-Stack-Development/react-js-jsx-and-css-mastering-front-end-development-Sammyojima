import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import TaskManager from "./pages/TaskManager.jsx";
import Posts from "./pages/Posts.jsx";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<TaskManager />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;