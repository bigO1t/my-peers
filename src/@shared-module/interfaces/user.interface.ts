import { IBase } from './base.interface';
export interface IRating {
  other_rating: number;
  own_rating: number;
  service_type: string;
}

export interface IRequest {
  requester_first_name: string;
  item_name: string;
  item_description: string;
  item_category: string;
}

export interface IUser extends IBase {
  first_name: string;
  last_name: string;
  password: string;
  requested: IRequest;
  received: IRequest;
  paired_user: string;
  ratings: IRating[];
}
