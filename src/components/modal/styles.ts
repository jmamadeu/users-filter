import styled from '@emotion/native';

export const Container = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const UserImage = styled.Image`
  height: 100px;
  width: 100px;
  background: #333333;
  border-radius: 10px;

  align-self: center;
  margin-bottom: 10px;
`;

export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Id = styled.Text`
  font-size: 16px;
  margin: 5px 0;
`;

export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin: 10px 0;
`;

export const SectionText = styled.Text<{ bold?: boolean }>`
  font-size: 16px;
  font-weight: ${(props) => (props.bold ? 'bold' : '')};
`;
