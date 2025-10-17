import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Resources.css";

const Resource = () => {
  const [resources, setResources] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch data from backend (API placeholder)
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/resources") // change later to your API
      .then((res) => {
        setResources(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Search filter
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    setFiltered(
      resources.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      )
    );
  };

  return (
    <section className="resource-section">
      <div className="resource-header">
        <h2>Resources</h2>
        <p>Explore our collection of blogs & infographics.</p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search resources..."
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="resource-grid">
        {filtered.length === 0 ? (
          <p className="no-results">No results found.</p>
        ) : (
          filtered.map((item) => (
            <div key={item.id} className="resource-card">
              <div className="img-wrap">
                <img
                  src={`http://localhost:5000${item.image_url}`}
                  alt={item.title}
                />
              </div>
              <div className="card-content">
                <span className="tag">{item.type || "Blog"}</span>
                <h3>{item.title}</h3>
                <p>{item.description?.substring(0, 100)}...</p>
                <a
                  href={`/resources/${item.slug || item.id}`}
                  className="read-more"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Resource;
