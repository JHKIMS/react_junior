import { useState } from "react";
import styled from "styled-components";
import Circle from "../StudyHistory/Circle";

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Hello", value);
  };

  const ThemeTs = styled.div`
    background-color: ${(props) => props.theme.bgColor};
  `;
  const Ts = styled.div`
    color: ${(props) => props.theme.textColor};
  `;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>

      <ThemeTs>
        <Ts>Protected</Ts>
      </ThemeTs>
    </div>
  );
}

export default App;
