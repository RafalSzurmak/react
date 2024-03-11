import'./App.css';
import React, {useState} from 'react';

function App1() {
    const [liczba, setLiczba] = useState(0);
    function alfa() {
        setLiczba(liczba+1)
    }
    return (
        <div>
            <p>Kliknieto {liczba} razy</p>
            <button onClick={alfa}>
                kliknij
            </button>
        </div>
    );
}
export default App1;