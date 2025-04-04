import "./App.css";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoryPage from "./CategoryPage";

function App() {
  return (
    <Router>
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>

        <div className="col-md-9 px-3">
          <Routes>
            <Route path="/:category" element={<CategoryPage />} />
            <Route path="/" element={<CategoryPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
