import "./App.css";
import MainNavigation from "./components/MainNavigation";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainNavigation />
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </header>
    </div>
  );
}
export default App;
