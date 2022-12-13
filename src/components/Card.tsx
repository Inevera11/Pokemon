import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  height: 25rem;
  width: 19rem;
  align-items: flex-start;
  justify-content: space-around;
  box-shadow: 4px 2px 20px 1px #471323;
  background-color: #ffb997;
  border-radius: 26px;
  border: #e5ba9e;
  border-style: double;
`;

const SkillsStyled = styled.div`
  margin: 0.2rem 0.9rem;
  font-size: 1.5em;
`;

const TitleStyled = styled.p`
  font-size: 3em;
  align-self: center;
  margin: 0;
`;
const Image = styled.img`
  width: 90%;
  align-self: center;
`;
type Props = {
  title: string;
  img: string;
  skill1: string;
  skill2: string;
};

export const Card = ({ title, img, skill1, skill2 }: Props) => {
  return (
    <StyledCard>
      <TitleStyled>{title}</TitleStyled>
      <Image src={img} />
      <div>
        <SkillsStyled>{skill1}</SkillsStyled>
        <SkillsStyled>{skill2}</SkillsStyled>
      </div>
    </StyledCard>
  );
};
