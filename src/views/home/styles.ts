import styled from '@emotion/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: 30px;
  padding: 10px;
`;

export const InputSearchContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextContainer = styled.View`
  border: 2px solid ${(props) => props.theme.colors.darkBlue};
  flex: 1;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  height: 50px;
  margin-right: 10px;
`;

export const TextInputStyled = styled.TextInput`
  height: 50px;
  font-size: 20px;
  color: ${(props) => props.theme.colors.darkBlue};
`;
