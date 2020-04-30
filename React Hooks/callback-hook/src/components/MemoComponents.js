import React from 'react'

function MemoComponents({name}) {
    console.log('Rendering memo component..');
    
    return (
        <div>
            Memo::: {name}
        </div>
    )
}

export default React.memo(MemoComponents)
