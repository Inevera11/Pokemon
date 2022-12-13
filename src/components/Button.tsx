import React from "react";

type Props = {
  onClick: () => void;
};

const Button = ({ onClick }: Props) => {
  return <button onClick={onClick}>CLIck me</button>;
};

export default Button;
