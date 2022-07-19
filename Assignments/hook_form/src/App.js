import './App.css';
import Form from "./components/Forms";

function App() {
  return (
    <div className="App">
        <Form>
          key={"index"}
          firstname={"firstname"}
          lastname={"lastname"}
          email={"email"}
          password={"password"}
          confirmpassword={"confirmpassword"}
        </Form>
    </div>
  );
}

export default App;
