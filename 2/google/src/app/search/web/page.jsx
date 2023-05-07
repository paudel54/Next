import React from "react";
import Link from "next/link";
import WebSearchResults from "@/components/WebSearchResults";
export default async function WebSearchPage({ searchParams }) {
  const startIndex = searchParams.start || "1";
  // to solve API exhaust:
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`
  );

  // if (!response.ok) {
  //   throw new Error("Something Went Wrong");
  // }
  const data = await response.json();
  const results = data.items;
  // console.log(results);
  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4 ">No Results Found!</h1>
        <p className="text-lg">
          Try Searching for Something Else of go back to homepage.
        </p>
        <Link href="/" className="text-blue-500">
          Home
        </Link>
      </div>
    );
  }

  return <div>{results && <WebSearchResults results={data} />}</div>;
}
