import React from 'react';

function App2() {
    const numbers =[];
    for(let i = 1; i <=999; i++) {
        numbers.push(<div key={i}>{i}</div>);
    }
    return <div>{numbers}</div>
}
export default App2;