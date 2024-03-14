import React from "react";

const Policy = () => {
  const pdfUrl =
    "https://drive.google.com/file/d/1X3ptbMT795y1jVTDZUryhoNU2sMDqtZh/view?usp=sharing";
  return (
    <div>
      <iframe src={pdfUrl} width="600" height="400"></iframe>
    </div>
  );
};

export default Policy;
