import {
  StyledCard,
  CardTitle,
  IdStyled,
  TitleStyled,
  Image,
  AtributesStyled,
  SkillsStyled,
} from "../styles/StyledCard";
import React, { memo } from "react";
type Props = {
  title: string;
  id: number | undefined;
  img: string;
  types: Array<string>;
};

const Card = ({ id, title, img, types }: Props) => {
  return (
    <StyledCard>
      <CardTitle>
        <IdStyled>#{id}</IdStyled>
        <TitleStyled>{title}</TitleStyled>
      </CardTitle>
      <Image src={img} />
      <AtributesStyled>
        {types.map((type: string) => (
          <SkillsStyled key={type}>{type}</SkillsStyled>
        ))}
      </AtributesStyled>
    </StyledCard>
  );
};

export default memo(Card);
