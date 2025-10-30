import React, { useEffect, useState } from "react";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError("Failed to fetch posts.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  const filteredPosts = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card title="Posts from JSONPlaceholder">
      <input
        type="text"
        placeholder="Search posts..."
        className="border px-3 py-2 rounded-md mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div>
          {filteredPosts.map((post) => (
            <div key={post.id} className="mb-4 border-b pb-2">
              <h3 className="font-semibold">{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-between mt-4">
        <Button
          onClick={() => setPage(page > 1 ? page - 1 : 1)}
          variant="secondary"
        >
          Previous
        </Button>
        <span>Page {page}</span>
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </div>
    </Card>
  );
};

export default Posts;