import { useTheme } from '@emotion/react';
import { useRef, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Modal } from '../../components/modal';
import { UserListItem } from '../../components/user-list-item';
import { useUsers } from '../../hooks/use-users';
import { UserProperties } from '../../models/user';
import {
  Container,
  InputSearchContainer,
  ListContainer,
  TextContainer,
  TextInputStyled
} from './styles';

const PAGE_LIMIT = 10;

export function Home() {
  const theme = useTheme();
  const [currentPage, setCurrentPage] = useState(PAGE_LIMIT);
  const [currentUser, setCurrentUser] = useState<UserProperties>({} as UserProperties);
  const [country, setCountry] = useState('');
  const { data, isLoading } = useUsers({ limit: currentPage, nationality: country });
  const modalizeRef = useRef<Modalize>(null);

  const handleLoadMoreUsers = () => setCurrentPage((old) => old + PAGE_LIMIT);

  const handleOpenUserModal = (user: UserProperties) => {
    setCurrentUser(user);
    modalizeRef.current?.open();
  };

  return (
    <>
      <Container>
        <InputSearchContainer>
          <TextContainer>
            <TextInputStyled
              value={country}
              autoCapitalize="none"
              onChangeText={(e) => setCountry(e)}
              placeholder="Search nationalities"
              onEndEditing={(event) => setCountry(event.nativeEvent.text)}
            />
            <Icon name="account-search" size={30} color={theme.colors.darkBlue} />
          </TextContainer>
          <View>
            <Icon name="filter" size={30} color={theme.colors.darkBlue} />
          </View>
        </InputSearchContainer>
        <ListContainer>
          <FlatList
            refreshing={isLoading}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({ item: user }) => (
              <TouchableOpacity onPress={() => handleOpenUserModal(user)}>
                <UserListItem user={user} />
              </TouchableOpacity>
            )}
            extraData={data}
            keyExtractor={(item) => item.email}
            onEndReached={() => {
              handleLoadMoreUsers();
            }}
          />
        </ListContainer>
      </Container>
      <Modalize ref={modalizeRef}>
        <Modal user={currentUser} />
      </Modalize>
    </>
  );
}
