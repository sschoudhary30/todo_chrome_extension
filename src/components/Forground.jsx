import React, { useRef } from "react";

const Forground = () => {
  const ref = useRef();
  return (
    <div ref={ref} className="absolute inset-0 flex flex-wrap p-4 opacity-10">
      {/* subtle blurred shapes or elements for depth */}
    </div>
  );
};

export default Forground;
