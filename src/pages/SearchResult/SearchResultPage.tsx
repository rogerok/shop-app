import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const SearchResultPage = () => {
  const s = 0;
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("searchTerm"));
  return <div>SearchResultPage</div>;
};

export default SearchResultPage;
