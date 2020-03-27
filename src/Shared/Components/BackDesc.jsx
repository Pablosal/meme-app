import React from "react";
// import "./BackDesk.css";
// import "./BackDesc.css";
const BackDesc = props => {
  return (
    <div style={styles} className="backdesk__show">
      {props.children}
    </div>
  );
};
const styles = {
  height: "auto",
  width: "auto",
  backgroundColor: "rgb(70, 70, 70)",
  overflow: "hidden"
};
export default BackDesc;
