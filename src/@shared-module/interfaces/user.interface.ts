import { IBase } from './base.interface';
import { IRequest } from './request.interface';
import { IRating } from './rating.interface';

export interface IUser extends IBase {
  first_name: string;
  last_name: string;
  password: string;
  requested: IRequest;
  received: IRequest;
  paired_user: string;
  ratings: IRating[];
}
