import React, { useState } from "react";

const PersonCard = (props) => {
    const {firstname, lastname, age, zodiacsign} = props;
    const [stateAge, setStateAge] = useState(age);

    return (
        <div>
            <h2>
                {lastname}, {firstname}
            </h2>
            <p/>Age: {stateAge}
            <p/>Zodiac Sign: {zodiacsign}
            <p/>
        </div>
    );
};
    
export default PersonCard;
