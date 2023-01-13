import styled from "styled-components"

// interface는 object를 설명해주는 것이다.(Object가 어떤식으로 보일지 설명)
interface ContainerProps {
    bgColor: string;
}
const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props)=>props.bgColor};
    border-radius: 100px;
`

interface CircleProps{
    bgColor: string;
}

function Circle({bgColor}: CircleProps){ // bgColor의 타입은 CircleProps의 Object이다. 
            // == (props: CircleProps) 
    return <Container bgColor={bgColor} />
}


interface PlayerProps{
    name: string;
    age: number;
}
const sayHello = (playerObj: PlayerProps) => 
    `Hello ${playerObj.name} you are ${playerObj.age} years old.`
sayHello({name:"정훈", age:29});


export default Circle;