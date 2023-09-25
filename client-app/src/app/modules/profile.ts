import { User } from './user';

export interface ProfileType {
  userName: string;
  displayName: string;
  image?: string;
  bio?: string;
  followersCount: number;
  followingCount: number;
  following: boolean;
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
  followersCount = 0;
  followingCount = 0;
  following = false;
}

export interface Photo {
  id: string;
  url: string;
  isMain: boolean;
}
