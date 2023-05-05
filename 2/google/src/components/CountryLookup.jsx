"use client";
import React, { useState } from "react";

const CountryLookup = () => {
  const [country, setCountry] = useState("United States");
  //ip location can be used with xtreme-ip-lookup.com
  // to fetch an api on page load
  // useEffect(() => {
  //   fetch(`url?key=${process.env.IP_API_KEY}`)
  //     .then((res) => res.json())
  //     .then((data) => setCountry(data.country));
  // });
  return <div>{country}</div>;
};
export default CountryLookup;
