import React, { useState } from 'react'

function HookCounter() {
    const [count, setCount] = useState(9)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Malatesh count {count}</button>
        </div>
    )
}

export default HookCounter
