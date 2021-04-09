import { Model } from './model'
import axios, { AxiosResponse } from 'axios'

export interface UserProps {
  id?: number,
  name?: string,
  password?: string
}

export class User extends Model<UserProps> {
  rootUrl: string = 'http://localhost:3005/'
}
