import React, { useState } from "react";
import axios from "axios";

function App() {
  const [numbers, setNumbers] = useState({ value1: null, value2: null });
  const [sum, setSum] = useState(null);

  const sendAdditionToServer = async values => {
    const { data } = await axios.post("/calcul", values);
    setSum(data);
  };

  const onChangeValue = (inputName, { target: { value } }) => {
    setNumbers(nb => ({ ...nb, [inputName]: value }));
  };

  return (
    <div className="App">
      <input type="text" onChange={onChangeValue.bind(null, "value1")} />
      +<input type="text" onChange={onChangeValue.bind(null, "value2")} />
      <button onClick={sendAdditionToServer.bind(null, numbers)}>
        Calculer
      </button>
      <div>{sum}</div>
    </div>
  );
}

export default App;
