export interface IRating {
  other_rating: number;
  own_rating: number;
  service_type: string;
}

export interface IUser {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  ratings: IRating[];
}
