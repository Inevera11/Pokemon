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

const IdStyled = styled.h1`
  font-style: italic;
  font-variant: petite-caps;
  margin: 0.5rem 0;
  color: #29272766;
`;

const SkillsStyled = styled.div`
  margin: 0.2rem 0.9rem;
  font-size: 1.5em;
`;

const TitleStyled = styled.p`
  font-variant: petite-caps;
  font-size: 3em;
  align-self: center;
  margin: 0.7rem 0.5rem;
  font-weight: 700;
  color: #3e0000cc;
`;
const Image = styled.img`
  width: 90%;
  align-self: center;
`;

const CardTitle = styled.div`
  display: flex;
  align-items: baseline;
`;
type Props = {
  title: string;
  id: number | undefined;
  img: string;
  types: string | [];
};

export const Card = ({ id, title, img, types }: Props) => {
  return (
    <StyledCard>
      <CardTitle>
        <IdStyled>#{id}</IdStyled>
        <TitleStyled>{title}</TitleStyled>
      </CardTitle>
      <Image src={img} />
      <div>
        <SkillsStyled>{types}</SkillsStyled>
      </div>
    </StyledCard>
  );
};
