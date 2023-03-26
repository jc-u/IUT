import React from "react";
import { Link } from "wouter";

function Error() {
  return (
    <div className="Error">
      You are lost... (<Link to="/">back to home</Link>)
    </div>
  );
}

export default Error;
