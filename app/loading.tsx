import React from "react";

type LoadingSize = "sm" | "md" | "lg";

interface Props {
  size: LoadingSize;
}

const Loading = ({ size = "lg" }: Props) => {
  const loadingSizeMap = {
    sm: "loading-sm",
    md: "loading-md",
    lg: "loading-lg",
  };

  return (
    <div className="flex justify-center items-center">
      <span className={`loading loading-ring ${loadingSizeMap[size]}`}></span>
    </div>
  );
};

export default Loading;
