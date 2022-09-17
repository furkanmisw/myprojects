import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Box from "../components/box";

const Home = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const _search = (e) => {
    const search = e.target.value;
    setFilteredData([]);
    setSearch(search);
    setFilteredData(
      data.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase().trim()) ||
          item.id === Number(search)
      )
    );
  };

  return (
    <div className="home">
      <div className="items">
        <div className="search">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={_search}
            />
            {search && (
              <button
                onClick={() => {
                  setSearch("");
                  setFilteredData([]);
                }}
              >
                <CloseIcon />
              </button>
            )}
          </div>
        </div>
        {search.length > 0 ? (
          filteredData.length > 0 ? (
            filteredData.map((data) => <Box key={data.index} data={data} />)
          ) : (
            <div className="no-result">
              No Result <pre> {search}</pre>
            </div>
          )
        ) : (
          data.map((data) => <Box key={data.index} data={data} />)
        )}
      </div>
    </div>
  );
};

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="close"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default Home;
