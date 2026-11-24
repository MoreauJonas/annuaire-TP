export type Person = {
  login: { uuid: number };
  gender: string;
  name: { first: string; last: string };
  picture: { thumbnail: string };
  location: { city: string };
  email: string;
  phone: string;
  mobile: string;
  dob: { age: number };
  nat: string;
};

// GET /person : la liste arrive rangée dans un objet

export type PersonResponse = {
  results: Person[];
  total: number;
  skip: number;
  limit: number;
};
