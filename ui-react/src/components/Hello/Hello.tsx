import styled from "@emotion/styled";

const StyledDiv = styled("div")({
  backgroundColor: "yellow",
  color: "blue",
});

function Hello() {
  return <StyledDiv>Hello</StyledDiv>;
}

Hello.displayName = "Hello";

export default Hello;
