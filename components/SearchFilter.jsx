import { useState } from "react";

const SearchFilter = ({ posts, setFilteredPosts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [...new Set(posts.map((post) => post.category))]; // Get unique categories

  const handleSearch = () => {
    const filtered = posts.filter((post) => {
      const matchesSearch = post.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory
        ? post.category === selectedCategory
        : true;
      return matchesSearch && matchesCategory;
    });
    setFilteredPosts(filtered);
  };

  return (
    <div className="flex flex-col md:flex-row mb-4">
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded-md mb-2 md:mb-0 md:mr-2"
      />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border p-2 rounded-md mb-2 md:mb-0 md:mr-2"
      >
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Search
      </button>
    </div>
  );
};

export default SearchFilter;
