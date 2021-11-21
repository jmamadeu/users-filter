import { ContactProperties, ContactSectionedByFavoriteProperties } from '../models/contact';
import { queryClient } from '../services/api';

export function sortContactsByName(section: ContactProperties[]): ContactProperties[] {
  const sectionSorted = section
    ?.map((cont) => cont.name)
    ?.sort()
    ?.map((cont) => section?.find((d) => d.name === cont) || ({} as ContactProperties));

  return sectionSorted || [];
}

export function getContactsParsedByFavorite() {
  const contacts =
    queryClient.getQueryData<ContactSectionedByFavoriteProperties[]>('contacts') || [];
  const contactsParsed = [...(contacts?.[0].data || []), ...contacts[1].data];

  return contactsParsed;
}

export function parseContactsByFavorite(contacts: ContactProperties[]) {
  const parsedContacts: ContactSectionedByFavoriteProperties[] = [
    {
      title: 'Favorites Contacts',
      isFavorite: true,
      data: contacts.filter((contact) => contact.isFavorite)
    },
    {
      title: 'Others Contacts',
      isFavorite: false,
      data: contacts.filter((contact) => !contact.isFavorite)
    }
  ];

  return parsedContacts;
}
