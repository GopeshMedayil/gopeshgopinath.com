import React from 'react';

export default (props) => {
    return (
        <div className="letterContainer">
            <div className="firstName">
                {props.firstName.split("").map((item, key) => {
                    return <span key={key}>{item}</span>
                })}
            </div>
            <div className="lastName">
                {props.lastName.split("").map((item, key) => {
                    return <span className="text-secondary" key={key}>{item}</span>
                })}
            </div>

        </div>
    )
}