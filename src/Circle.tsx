import styled from "styled-components"
import { useState } from "react";

// interface는 object를 설명해주는 것이다.(Object가 어떤식으로 보일지 설명)
interface ContainerProps{
    bgColor: string;
    borderColor : string; //  물음표(?) 붙여서 필수가 아닌 선택사항이 된다.
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props)=>props.bgColor};
    border-radius: 100px;
    border: 1px solid ${(props) => props.borderColor};
`

interface CircleProps{
    bgColor: string;
    borderColor? : string; //  물음표(?) 붙여서 필수가 아닌 선택사항이 된다.
    testText?: string;
}

function Circle({bgColor, borderColor, testText="Default testText Set"}: CircleProps){ // bgColor의 타입은 CircleProps의 Object이다. 
            // == (props: CircleProps) 
    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState<number|string>(1); // value는 number도 가능하고, string도 가능하다.
    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? "blue"}>
            {testText}
        </Container>
    );
}


interface PlayerProps{
    name: string;
    age: number;
}
const sayHello = (playerObj: PlayerProps) => 
    `Hello ${playerObj.name} you are ${playerObj.age} years old.`
sayHello({name:"정훈", age:29});


export default Circle;