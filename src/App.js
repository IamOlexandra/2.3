import Greeting from "./components/Greeting";
import Message from "./components/Message";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Greeting name="Катерина"/>
      <Message text="Визирни у вікно."/>
      <Button onClick={() => {console.log("Тук-тук-тук")}}/>
    </div>
  );
}

export default App;