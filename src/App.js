import styled, {keyframes} from "styled-components";

const Father = styled.div`
  // display: flex;
`
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`
const Text = styled.span`
  color:white;
`
const Circle = styled(Box)`
  border-radius: 50px;
`
const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`
const Input = styled.input.attrs({required: true, minLength: 5})`
  background-color: dodgerblue;
  color: white;
`
const animation = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50%{
    border-radius: 100px;
  }
  100%{
    transform: rotate(360deg);
    border-radius: 0px;
  }
`
const Emoji = styled.span`
  font-size: 30px
`

const AniBox = styled.div`
  height: 200px;
  height: 200px;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animation} 1s linear infinite;
  ${Emoji}{
    &:hover{
      font-size: 80px;
    }
  }
`

function App() {
  return (
    <Father>
      <Input />
      <Box bgColor="teal">
        <Text>Hello</Text>
      </Box>
      <Box bgColor="tomato" />
      <Circle bgColor="dodgerblue"/>
      <Btn>LOGIN</Btn>
      <Btn as="a">LINK LOGIN</Btn>

        <AniBox>
          <Emoji as="p">🏀</Emoji>
        </AniBox>
    </Father>

  );
}

export default App;
