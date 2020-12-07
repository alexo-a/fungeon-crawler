import './App.css';
import Game from "./pages/Game"

import { StoreProvider } from './utils/GlobalState';

function App() {

    return (
        <div className="App">
            <StoreProvider>
                <header className="App-header">
                </header>
                <Game></Game>
                
            </StoreProvider>
        </div>
    );
}

export default App;
