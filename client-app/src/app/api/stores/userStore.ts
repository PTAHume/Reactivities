import { makeAutoObservable, runInAction } from "mobx";
import { User, UserFormValues } from "../../modules/user";
import { agent } from "../agent";
import { store } from "./store";
import { router } from "../../router/Routes";
import { isAxiosError } from "axios";

export default class UserStore {
  user: User | null = null;
  refreshTokenTimeout?: number;

  constructor() {
    makeAutoObservable(this);
  }

  get isLoggedIn() {
    return !!this.user;
  }

  login = async (credentials: UserFormValues) => {
    const user = await agent.Account.login(credentials);
    store.commonStore.setToken(user.token);
    this.startRefreshTokenTimer(user);
    runInAction(() => {
      this.user = user;
    });
    router.navigate("/activities");
    store.modalStore.closeModal();
    console.log(user);
  };

  logout = () => {
    store.commonStore.setToken(null);
    router.navigate("/");
    this.user = null;
  };

  register = async (credentials: UserFormValues) => {
    try {
      await agent.Account.register(credentials);
      router.navigate(`/account/registerSuccess?email=${credentials.email}`);
      store.modalStore.closeModal();
    } catch (error: unknown) {
      if (isAxiosError(error) && error?.response?.status === 400) throw error;
      store.modalStore.closeModal();
      console.log(500);
    }
  };

  getUser = async () => {
    try {
      const user = await agent.Account.current();
      store.commonStore.setToken(user.token);
      this.startRefreshTokenTimer(user);
      runInAction(() => (this.user = user));
    } catch (error) {
      console.log(error);
    }
  };

  setImage(image: string) {
    if (this.user) this.user.image = image;
  }

  setDisplayName = (name: string) => {
    if (this.user) this.user.displayName = name;
  };

  refreshToken = async () => {
    this.stopRefreshTokenTimer();
    try {
      const user = await agent.Account.refreshToken();
      runInAction(() => (this.user = user));
      store.commonStore.setToken(user.token);
      this.startRefreshTokenTimer(user);
    } catch (error) {
      console.log(error);
    }
  };

  private startRefreshTokenTimer(user: User) {
    const jwtToken = JSON.parse(atob(user.token.split(".")[1]));
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - 60 * 1000;
    this.refreshTokenTimeout = Number(setTimeout(this.refreshToken, timeout));
    console.log({ refreshTimeout: this.refreshTokenTimeout });
  }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
}
