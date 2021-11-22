export interface UserProperties {
  id: string;
  avatarURL: string;
  name: string;
  email: string;
  birth: string;
  gender: string;
  phone: string;
  nationality: string;
  address: string;
}

export interface UserResponseAPIProperties {
  gender: string;
  email: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: { medium: string; large: string };
  dob: { date: string };
  id: {
    value: string;
  };
  phone: string;
  nat: string;
  location: {
    city: string;
  };
}

export interface UserResponseProperties {
  results: UserResponseAPIProperties[];
}
