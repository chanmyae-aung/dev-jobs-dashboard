import React from "react";
import { ClipLoader } from "react-spinners";

export default function Loading(isLoading) {
  if (isLoading) {
    return (
      <div className="w-full flex justify-center">
        <ClipLoader color="blue" />
      </div>
    );
  }
}
