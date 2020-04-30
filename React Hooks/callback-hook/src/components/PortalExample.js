import React from 'react'
import ReactDOM from 'react-dom'

function PortalExample() {
    return ReactDOM.createPortal(
        <div>
            Portal Example..
        </div>,
        document.getElementById('portal-root')
    )
}

export default PortalExample
