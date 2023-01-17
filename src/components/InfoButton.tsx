import React, { useState } from "react";
import { CornerDialog } from "evergreen-ui";
import { ButtonStyled } from "../styles/InfoButtonStyled";

export const InfoButton = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <CornerDialog
        hasCancel={false}
        hasFooter={false}
        title="How to get more money"
        isShown={isShown}
        onCloseComplete={() => setIsShown(false)}
        confirmLabel="Understood"
      >
        Click on a red pluse next to the money icon. You can increase your funds
        6 times.
      </CornerDialog>
      <ButtonStyled onClick={() => setIsShown(true)}>i</ButtonStyled>
    </>
  );
};
