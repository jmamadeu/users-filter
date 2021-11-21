export interface ContactAddressProperties {
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface ContactPhoneProperties {
  work: string;
  home: string;
  mobile: string;
}

export interface ContactProperties {
  id: string;
  name: string;
  companyName: string;
  isFavorite: boolean;
  smallImageURL: string;
  largeImageURL: string;
  emailAddress: string;
  birthdate: Date;

  address: ContactAddressProperties;
  phone: ContactPhoneProperties;
}

export interface ContactSectionedByFavoriteProperties {
  title: string;
  isFavorite: boolean;
  data: ContactProperties[];
}
