import {
  StyledCard,
  CardTitle,
  IdStyled,
  TitleStyled,
  Image,
  AtributesStyled,
  SkillsStyled,
} from "../styles/StyledCard";
type Props = {
  title: string;
  id: number | undefined;
  img: string;
  type1: string;
  type2: string;
};

export const Card = ({ id, title, img, type1, type2 }: Props) => {
  return (
    <StyledCard>
      <CardTitle>
        <IdStyled>#{id}</IdStyled>
        <TitleStyled>{title}</TitleStyled>
      </CardTitle>
      <Image src={img} />
      <AtributesStyled>
        <SkillsStyled>{type1}</SkillsStyled>
        <SkillsStyled>{type2}</SkillsStyled>
      </AtributesStyled>
    </StyledCard>
  );
};
