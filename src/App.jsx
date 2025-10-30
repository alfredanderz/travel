import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio.jsx";
import { useState } from "react";

function App() {
  const [sidebarOpen] = useState(true);

  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            flex: 1,
            padding: "20px",
            marginLeft: sidebarOpen ? 260 : 70,
            transition: "margin-left 0.3s ease",
            width: `calc(100% - ${sidebarOpen ? 260 : 70}px)`,
            boxSizing: "border-box",
          }}
        >
          <Routes>
            <Route path="/" element={<Inicio />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
