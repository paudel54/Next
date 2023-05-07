import React from "react";
import Link from "next/link";
import PaginationButtons from "./PaginationButtons";
export default function ImageSearchResults({ results }) {
  //   console.log(results);
  return (
    <div className="sm:pb-24 pb-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-y-4 space-x-4">
        {results.items.map((result) => (
          <div key={result.link} className="mb-8">
            <div className="group">
              <div>
                <Link href={result.image.contextLink}>
                  <img
                    src={result.link}
                    alt={result.title}
                    className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow"
                  />
                </Link>
                <Link href={result.image.contextLink}>
                  <h2 className="group-hover:underline truncate text-xl">
                    {result.title}
                  </h2>
                </Link>
                <Link href={result.image.contextLink}>
                  <p className="group-hover:underline truncate text-gray-600">
                    {result.displayLink}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
        <PaginationButtons />
      </div>
    </div>
  );
}
