import { View } from 'react-native';
import { UserProperties } from '../../models/user';
import { Container, Id, Name, Section, SectionText, UserImage } from './styles';

type ModalUserProps = {
  user: UserProperties;
};

export function Modal({ user }: ModalUserProps) {
  return (
    <Container>
      <View>
        <UserImage source={{ uri: user.avatarURL }} />
        <Name>{user.name}</Name>
        <Id>{user.email}</Id>
        <Id>{user.id}</Id>

        <Section>
          <SectionText bold>Gender</SectionText>
          <SectionText>{user.gender}</SectionText>
        </Section>
        <Section>
          <SectionText bold>Nationality</SectionText>
          <SectionText>{user.nationality}</SectionText>
        </Section>
        <Section>
          <SectionText bold>BirthDay</SectionText>
          <SectionText>{new Intl.DateTimeFormat('en-US').format(new Date(user.birth))}</SectionText>
        </Section>
        <Section>
          <SectionText bold>Address</SectionText>
          <SectionText>{user.address}</SectionText>
        </Section>
        <Section>
          <SectionText bold>Contact</SectionText>
          <SectionText>{user.phone}</SectionText>
        </Section>
      </View>
    </Container>
  );
}
