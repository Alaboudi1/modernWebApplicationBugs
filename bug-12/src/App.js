import React, { useState, useEffect } from "react";

const ChildComponent = ({ data }) => {
  // Mutating the 'data' object directly
  data.value = 20;

  return <div>Value: {data.value}</div>;
};

const ParentComponent = () => {
  const [data, setData] = useState({ value: 10 });

  return <ChildComponent data={data} />;
};

export default ParentComponent;
