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
        className="border border-gray-300 rounded-md p-2 mb-2 md:mb-0 md:mr-2 focus:outline-none focus:ring-2 focus:ring-vibrant-orange"
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
        onClick={handleSearch}
        className="bg-vibrant-orange text-white p-2 rounded-md hover:bg-orange-600 transition duration-200"
      >
        Search
      </button>
    </div>
  );
};

export default SearchFilter;
