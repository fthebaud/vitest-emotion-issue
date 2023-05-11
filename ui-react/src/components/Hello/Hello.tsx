import styled from "@emotion/styled";

const StyledDiv = styled("div")({
  backgroundColor: "yellow",
  color: "blue",
});

type Props = {
  name?: string;
};

function Hello({ name }: Props) {
  return <StyledDiv>Hello {name || "unknown user"}</StyledDiv>;
}

Hello.displayName = "Hello";

export default Hello;
