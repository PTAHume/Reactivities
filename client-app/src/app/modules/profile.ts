import { User } from './user';

export interface ProfileType {
  userName: string;
  displayName: string;
  image?: string;
  bio?: string;
  photos?: Photo[];
}

export class Profile implements ProfileType {
  constructor(user: User) {
    this.userName = user.userName;
    this.displayName = user.displayName;
    this.image = user.image;
  }
  userName: string;
  displayName: string;
  image?: string;
  bio?: string;
  photos?: Photo[];
}

export interface Photo {
  id: string;
  url: string;
  isMain: boolean;
}
