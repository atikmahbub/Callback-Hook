import React from 'react'

function Button({handleClick,text}) {
    console.log(`Button rendering - ${text}`)
    return (
        <div>
            <button onClick = {handleClick}> Increment {text} </button>
        </div>
    )
}

export default React.memo(Button)
