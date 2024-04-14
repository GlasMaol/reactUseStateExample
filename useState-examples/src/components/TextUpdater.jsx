import { useState, useEffect } from 'react'

function TextUpdater() {
    const [text, setText] = useState('');

    useEffect(() => {
        document.title = 'Du skrev: ${text}';
    }, [text]);

    return (
        <div>
            <input type='text' value={text} onChange={(event) => setText(event.target.value)} />
            <p>
                Du skrev: {text}
            </p>
        </div>
    )
}

export default TextUpdater
