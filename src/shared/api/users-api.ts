import { apiInstance } from './api-instance';
import { IUserModel } from 'shared/types/models/user-model';

export const getUsers = () =>
  apiInstance.get<IUserModel[]>('users').then((res) => res.data);
