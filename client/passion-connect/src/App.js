import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Register from "./pages/Register.js";
import { Header } from "./pages/Header.js";
import { Editor } from "@tinymce/tinymce-react";
import CreateArticleForm from "./pages/CreateArticleForm.js";

function App() {
  return (
    <div className="App">
      <Header className="App-header"></Header>
      <main id="main-content">
        <Routes>
          <Route path="/catalog" component={Home} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/articles/create" element={<CreateArticleForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}
export default App;
