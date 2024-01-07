import { useEffect } from "react";

const User = ({ name }) => {
  useEffect(() => {
    console.log("Inside useEffect");
    const timer = setInterval(() => {
      console.log("inside interval");
    }, 1000);
    return () => {
      console.log("UseEffect return used for cleanup");
      clearInterval(timer);
    };
  }, []);

  console.log("Render");

  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Location: Bangalore</h3>
      <h4>Contact: @vedavyasjoshi121</h4>
    </div>
  );
};

export default User;
