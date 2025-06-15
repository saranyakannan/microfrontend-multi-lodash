import React, { Suspense } from "react";

const RemoteAApp = React.lazy(() => import("remoteA/App"));
const RemoteBApp = React.lazy(() => import("remoteB/App"));

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Host App - Multi-Version Lodash</h1>

      <div
        style={{
          marginBottom: "20px",
          padding: "10px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <h3>Loaded Versions:</h3>
        <div>Lodash 4.17: {window.lodash17?.VERSION || "Loading..."}</div>
        <div>Lodash 4.16: {window.lodash16?.VERSION || "Loading..."}</div>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ flex: 1 }}>
          <Suspense fallback={<div>Loading Remote A...</div>}>
            <RemoteAApp />
          </Suspense>
        </div>

        <div style={{ flex: 1 }}>
          <Suspense fallback={<div>Loading Remote B...</div>}>
            <RemoteBApp />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default App;
