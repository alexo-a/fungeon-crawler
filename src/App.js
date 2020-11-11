import './App.css';
import Game from "./pages/Game"
//import Footer from "./components/Footer"
import { StoreProvider } from './utils/GlobalState';
function App() {
    return (
        <div className="App">
            <StoreProvider>
                <header className="App-header">
                </header>
                <Game></Game>
                {/*<Footer></Footer>*/}
            </StoreProvider>
        </div>
    );
}

export default App;
