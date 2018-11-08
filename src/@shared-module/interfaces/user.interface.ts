import { IBase } from './base.interface';
export interface IRating {
  other_rating: number;
  own_rating: number;
  service_type: string;
}

export interface IUser extends IBase {
  first_name: string;
  last_name: string;
  password: string;
  ratings: IRating[];
}
