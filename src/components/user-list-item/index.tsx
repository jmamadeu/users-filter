import { UserProperties } from '../../models/user';
import {
  Container,
  Content,
  Email,
  FooterContent,
  FooterText,
  ImageContainer,
  Name
} from './styles';

type UserListItemProperties = {
  user: UserProperties;
};

export function UserListItem({ user }: UserListItemProperties) {
  return (
    <Container>
      <ImageContainer source={{ uri: user?.avatarURL }} />
      <Content>
        <Name>{user?.name}</Name>
        <Email>{user?.email}</Email>

        <FooterContent>
          <FooterText>{user?.gender}</FooterText>
          <FooterText>{user?.nationality}</FooterText>
          <FooterText>{user?.birth}</FooterText>
        </FooterContent>
      </Content>
    </Container>
  );
}
