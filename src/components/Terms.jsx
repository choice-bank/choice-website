import React from "react";

const Terms = () => {
  const pdfUrl =
    "https://drive.google.com/file/d/1lWWKCKLeWcLms5nhqxzZBMkJlBCi1Tnu/view?usp=sharing";
  return (
    <div>
      <iframe src={pdfUrl} width="600" height="400"></iframe>
    </div>
  );
};

export default Terms;
