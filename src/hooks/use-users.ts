import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { UserProperties, UserResponseProperties } from '../models/user';
import { api } from '../services/api';

type FetchUsersProperties = {
  limit?: number;
  nationality: string;
};

export const parseUsersFromAPI = (data: UserResponseProperties) => {
  const users: UserProperties[] = data?.results.map((user) => ({
    avatarURL: user?.picture?.medium,
    name: `${user.name?.title} ${user?.name?.first} ${user?.name?.last}`,
    email: user?.email,
    birth: user?.dob?.date,
    gender: user.gender,
    id: user.id.value,
    address: user.location.city,
    nationality: user.nat,
    phone: user.phone
  }));

  return users;
};

async function fetchUsers({ limit = 10, nationality }: FetchUsersProperties) {
  const { data } = await api.get(`/?results=${limit}&nat=${nationality}`);

  const usersParsed = parseUsersFromAPI(data);

  return usersParsed;
}

export function useUsers({ limit, nationality }: FetchUsersProperties) {
  return useQuery<UserProperties[], AxiosError>(
    ['users', limit, nationality],
    () => fetchUsers({ limit, nationality }),
    {
      keepPreviousData: true
    }
  );
}
