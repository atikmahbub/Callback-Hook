import React from 'react'

function Title() {
    console.log('title rendering')
    return (
        <div>
            React Use Callback Example
        </div>
    )
}

export default React.memo(Title)
