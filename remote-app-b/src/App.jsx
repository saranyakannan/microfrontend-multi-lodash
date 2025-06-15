import React from "react";

const App = () => {
  const handleRemoteClick = () => {
    if (window.lodash16) {
      const data = ["apple", "banana", "cherry"];
      const uppercased = window.lodash16.map(data, (str) => str.toUpperCase());

      console.log(
        "Remote B using lodash 4.16 from host:",
        window.lodash16.VERSION
      );
      alert(`Remote B (lodash 4.16): ${uppercased.join(", ")}`);
    } else {
      alert("Lodash 4.16 not available from host!");
    }
  };

  const handleVersionComparison = () => {
    if (window.lodash16 && window.lodash17) {
      alert(`Version Comparison:
Remote A uses: ${window.lodash17.VERSION}
Remote B uses: ${window.lodash16.VERSION}

Both loaded by host, each remote picks its version!`);
    }
  };

  return (
    <div style={{ padding: "20px", border: "2px solid green" }}>
      <h2>Remote App B</h2>
      <p>
        Using host's lodash 4.16: {window.lodash16?.VERSION || "Not available"}
      </p>

      <button
        onClick={handleRemoteClick}
        style={{
          margin: "10px",
          padding: "10px",
          backgroundColor: "green",
          color: "white",
        }}
      >
        Remote B Button (uses host's lodash 4.16)
      </button>

      <button
        onClick={handleVersionComparison}
        style={{
          margin: "10px",
          padding: "10px",
          backgroundColor: "orange",
          color: "white",
        }}
      >
        Compare Versions
      </button>
    </div>
  );
};

export default App;
