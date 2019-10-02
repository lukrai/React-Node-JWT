import React from "react";
import { useByeQuery } from "../generated/graphql";

export const Bye: React.FC = () => {
  const { data, loading, error } = useByeQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error);
    return <div>Error</div>;
  }

  if (!data) {
    console.log(error);
    return <div>No Data</div>;
  }

  return (
    <div>
      <h1>Protected info</h1>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};
