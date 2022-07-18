import "./App.css";
import PersonCard from "./components/PersonCard";

const persons = [

  {
    firstname: "Abby",
    lastname: "Johnson",
    age: 22,
    zodiacsign: "Aquarius"
  },

  {
    firstname: "Kelly",
    lastname: "Chamberlain",
    age: 23,
    zodiacsign: "Leo"
  },

  {
    firstname: "M",
    lastname: "Waffles",
    age: 420,
    zodiacsign: "Aquarius"
  },

  {
    firstname: "Ben",
    lastname: "Johnson",
    age: 18,
    zodiacsign: "Taurus"
  }

];

function App() {
  return (
    <div className="App">
      {persons.map((personObj, index) => (
        <PersonCard
          key={index}
          firstname={personObj.firstname}
          lastname={personObj.lastname}
          age={personObj.age}
          zodiacsign={personObj.zodiacsign}
        />
      ))}
    </div>
  );
}

export default App;
