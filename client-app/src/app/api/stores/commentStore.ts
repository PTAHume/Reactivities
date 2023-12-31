import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";
import { ChatComment } from "../../modules/comment";
import { makeAutoObservable, runInAction } from "mobx";
import { store } from "./store";

export default class CommentStore {
  comments: ChatComment[] = [];
  hubConnection: HubConnection | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  createHubConnection = (activityId: string) => {
    if (store.activityStore.selectedActivity) {
      this.hubConnection = new HubConnectionBuilder()
        .withUrl(import.meta.env.VITE_CHAT_URL + "/?activityId=" + activityId, {
          accessTokenFactory: () => store.userStore.user?.token as string,
        })
        .withAutomaticReconnect()
        .configureLogging(LogLevel.Information)
        .build();

      this.hubConnection.start().catch((error) => {
        console.log("Error establishing the connection" + error);
      });

      this.hubConnection.on("LoadComments", (comments: ChatComment[]) => {
        runInAction(() => {
          comments.forEach((comment: ChatComment) => {
            comment.createdAt = new Date(comment.createdAt);
          });
          this.comments = comments;
        });
      });

      this.hubConnection.on("ReceiveComment", (comment: ChatComment) => {
        runInAction(() => {
          if (!this.comments.find((c) => c.id === comment.id)) {
            comment.createdAt = new Date(comment.createdAt);
            this.comments.unshift(comment);
          }
        });
      });
    }
  };

  stopHubConnection = () => {
    this.hubConnection?.stop().catch((error) => {
      console.log("Error stopping the connection" + error);
    });
  };

  clearComments = () => {
    this.comments = [];
    this.stopHubConnection();
  };

  addComments = async (chatComment: { body: string; activityId?: string }) => {
    chatComment.activityId = store.activityStore.selectedActivity?.id;
    try {
      return await this.hubConnection?.invoke("SendComment", chatComment);
    } catch (error) {
      console.log(error);
    }
  };
}
