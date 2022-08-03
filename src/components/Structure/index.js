import * as S from "./styles";

function Structure({ label, color }) {
  return (
    <S.WrapperBox>
      <S.Label>{label}</S.Label>
      <S.Box color={color}>Hiiii</S.Box>
    </S.WrapperBox>
  );
}

export default Structure;
