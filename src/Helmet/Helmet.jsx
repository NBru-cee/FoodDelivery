import React from "react";

const Helmet = (props) => {
      document.title = `Food Ordering App - ${props.title}`;
      return <div>{props.children}</div>;
};

export default Helmet;
