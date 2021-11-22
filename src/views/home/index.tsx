import { useTheme } from '@emotion/react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, InputSearchContainer, TextContainer, TextInputStyled } from './styles';

export function Home() {
  const theme = useTheme();

  return (
    <Container>
      <InputSearchContainer>
        <TextContainer>
          <TextInputStyled placeholder="Search" />
          <Icon name="account-search" size={30} color={theme.colors.darkBlue} />
        </TextContainer>
        <View>
          <Icon name="filter" size={30} color={theme.colors.darkBlue} />
        </View>
      </InputSearchContainer>
    </Container>
  );
}
