import React, { useState } from "react";
import { CornerDialog } from "evergreen-ui";
import {
  ButtonStyled,
  TitleStyled,
  SubitleStyled,
} from "../styles/InfoButtonStyled";

export const InfoButton = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <CornerDialog
        hasCancel={false}
        hasFooter={false}
        title={<TitleStyled>How to get more money</TitleStyled>}
        isShown={isShown}
        onCloseComplete={() => setIsShown(false)}
        width="30vw"
        confirmLabel="Understood"
      >
        <SubitleStyled>
          Click on a red pluse next to the money icon. You can increase your
          funds 6 times.
        </SubitleStyled>
      </CornerDialog>
      <ButtonStyled onClick={() => setIsShown(true)}>i</ButtonStyled>
    </>
  );
};
