import { useState, useEffect } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const [savedValue, setSavedValue] = useState('')

    const saveToLocalStorage = () => {
        console.log('Sparas till localStorage: ', count);
        localStorage.setItem('savedCount', count);
        setSavedValue(count);
    }

    useEffect(() => {
        const savedCount = localStorage.getItem('savedCount');
        if (savedCount !== null) {
            setCount(parseInt(savedCount, 10));
            setSavedValue(savedCount);
        }
    }, []);

    return (
        <div>
            <h1>
                Counter: {count}
            </h1>
            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
            <button onClick={() => setCount(count - 1)}>
                Decrease
            </button>
            <button onClick={saveToLocalStorage}>
                Save Value
            </button>
            <p>Saved Value: {savedValue}</p>
        </div>
    )
}

export default Counter
