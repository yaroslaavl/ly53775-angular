export interface Person {
  id?: number;
  firstName?: string;
  familyName?: string;
  age?: number;
  address: {
    id?: number;
    city?: string;
    street?: string;
    postCode?: string;
  };
}
