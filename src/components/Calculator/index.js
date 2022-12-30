import React from "react";
import { Container, Current, Previous, Screen, Button } from "./Styled";

export default function Calculator() {
  return (
    <Container>
      <Screen>
        <Previous>10</Previous>
        <Current>5</Current>
      </Screen>
      <Button control gridSpan={2}>AC</Button>
      <Button control>DEL</Button>
      <Button operation>÷</Button>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button operation>x</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button operation>+</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button operation>-</Button>
      <Button period control>.</Button>
      <Button>0</Button>
      <Button operation equals gridSpan={2}>=</Button>
    </Container>
  );
}
