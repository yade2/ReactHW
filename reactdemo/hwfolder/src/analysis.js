import React from 'react'

function Analysis(props) {
    return (
        <div className="Analysis">Sentiment Analysis
            <h3>{props.number1}</h3>
            <h3>{props.number2}</h3>
            <h3>{props.number3}</h3>

        </div>
    )
}

export default Analysis
