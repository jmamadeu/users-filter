import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ContactProperties, ContactSectionedByFavoriteProperties } from '../models/contact';
import { api } from '../services/api';
import { parseContactsByFavorite } from '../utils/contacts';

const fetchAllContacts = async (): Promise<ContactSectionedByFavoriteProperties[]> => {
  const { data: contacts } = await api.get<ContactProperties[]>('/contacts.json');

  const parsedContacts = parseContactsByFavorite(contacts);

  return parsedContacts;
};

export function useContacts() {
  return useQuery<ContactSectionedByFavoriteProperties[], AxiosError>('contacts', fetchAllContacts);
}
