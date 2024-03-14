import * as S from "./styles";

interface GeneralBannerProps {
  title: string;
  image: string;
  textButton: string;
  buttonClick: () => void;
}

export default function GeneralBanner({
  title,
  image,
  textButton,
  buttonClick,
}: GeneralBannerProps) {
  return (
    <S.Container>
      <S.StyledTitle>{title}</S.StyledTitle>
      <S.StyledImg src={image} alt="" width={180} height={264} />
      <S.StyledButton onClick={buttonClick}>{textButton}</S.StyledButton>
    </S.Container>
  );
}
