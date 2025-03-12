import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";

const SearchFilter = ({ posts, setFilteredPosts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [noResultsMessage, setNoResultsMessage] = useState("");

  const categories = [...new Set(posts.map((post) => post.category))];

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

    if (filtered.length === 0) {
      setNoResultsMessage(
        "No posts match your search query. Please try again."
      );
    } else {
      setNoResultsMessage("");
    }

    setFilteredPosts(filtered);
  };

  return (
    <>
      <form className="flex flex-col md:flex-row mb-4">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border text-gray-900 border-gray-300 rounded-md p-2 mb-2 md:mb-0 md:mr-2 focus:outline-none focus:ring-2 focus:ring-vibrant-orange"
        />
        <DropdownMenu>
          <DropdownMenuTrigger className="border border-gray-300 rounded-md p-2 mb-2 md:mb-0 md:mr-2 focus:outline-none focus:ring-2 focus:ring-vibrant-orange">
            {selectedCategory || "Select Category"}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {categories.map((category, index) => (
              <DropdownMenuItem
                key={index}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          type="submit"
          className="bg-vibrant-orange text-white p-2 rounded-md hover:bg-orange-600 transition duration-200"
        >
          Search
        </button>
      </form>
      {noResultsMessage && (
        <div className="flex justify-center mt-4">
          <p className="text-red-500">{noResultsMessage}</p>
        </div>
      )}
    </>
  );
};

export default SearchFilter;
