import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import {AuthContext} from "./contexts/AuthContext";


function App() {
    return (
        <AuthContext.Provider value={true}>
            <div className="App">
                <Header/>
                <Home/>
                <Footer/>
            </div>
        </AuthContext.Provider>
    );

}

export default App;
