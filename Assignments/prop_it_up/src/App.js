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

      <PersonCard
        firstname={persons[0].firstname}
        lastname={persons[0].lastname}
        age={persons[0].age}
        zodiacsign={persons[0].zodiacsign}
      />

      <PersonCard
        firstname={persons[1].firstname}
        lastname={persons[1].lastname}
        age={persons[1].age}
        zodiacsign={persons[1].zodiacsign}
      />

      <PersonCard
        firstname={persons[2].firstname}
        lastname={persons[2].lastname}
        age={persons[2].age}
        zodiacsign={persons[2].zodiacsign}
      />

      <PersonCard
        firstname={persons[3].firstname}
        lastname={persons[3].lastname}
        age={persons[3].age}
        zodiacsign={persons[3].zodiacsign}
      />

    </div>
  );
}

export default App;
