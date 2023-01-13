import React from "react";
import styled from "styled-components"


interface ContainerProps{
    bgColor: string;
}

const Container = styled.div<ContainerProps>``;

interface BoxProps{
    bgColor: string;
}

function TxBox({bgColor}: BoxProps){
    return <Container bgColor={bgColor} />;
}

export default TxBox;