import * as S from "./styles";
const CLient = () => {
  return (
    <S.ClientContainer>
      <S.HeaderContainer className="header-container">
        <S.SpanStyle></S.SpanStyle>
        <S.SpanStyle left="30px" bg="#f6b622"></S.SpanStyle>
        <S.SpanStyle left="50px" bg="#26c93f"></S.SpanStyle>
        <S.HeaderClient>node</S.HeaderClient>
      </S.HeaderContainer>
      <S.BodyClient>
        <span>Start!</span>
        <span>End!</span>
        <span>Promise!</span>
      </S.BodyClient>
    </S.ClientContainer>
  );
};

export default CLient;
