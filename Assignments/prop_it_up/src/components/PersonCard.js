
const PersonCard = (props) => {
    const {firstname, lastname, age, zodiacsign} = props;

    return (
        <div>
            <h2>
                {lastname}, {firstname}
            </h2>
            <p/>Age: {age}
            <p/>Zodiac Sign: {zodiacsign}
        </div>
    );
};
    
export default PersonCard;
