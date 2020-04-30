import React from 'react'
import'./MyStyles.css'

function StyleSheet(props) {

    let classNames = props.primary ? 'primary':''

    return (
        <div>
            <h2 className= {`${classNames} font-xs`}>STYLESHEETS</h2>
        </div>
    )
}

export default StyleSheet
