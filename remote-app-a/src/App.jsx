import React from "react";

const App = () => {
  const handleRemoteClick = () => {
    if (window.lodash17) {
      const data = ["apple", "banana", "cherry"];
      const capitalized = window.lodash17.map(data, window.lodash17.capitalize);

      console.log(
        "Remote A using lodash 4.17 from host:",
        window.lodash17.VERSION
      );
      alert(`Remote A (lodash 4.17): ${capitalized.join(", ")}`);
    } else {
      alert("Lodash 4.17 not available from host!");
    }
  };

  return (
    <div style={{ padding: "20px", border: "2px solid blue" }}>
      <h2>Remote App A</h2>
      <p>
        Using host's lodash 4.17: {window.lodash17?.VERSION || "Not available"}
      </p>

      <button
        onClick={handleRemoteClick}
        style={{
          margin: "10px",
          padding: "10px",
          backgroundColor: "blue",
          color: "white",
        }}
      >
        Remote A Button (uses host's lodash 4.17)
      </button>
    </div>
  );
};

export default App;
