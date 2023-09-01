import { makeAutoObservable } from "mobx";
import React from "react";

interface Model {
  open: boolean;
  body: React.JSX.Element | null;
}

export default class ModalStore {
  modal: Model = {
    open: false,
    body: null,
  };

  constructor() {
    makeAutoObservable(this);
  }

  openModal = (content: React.JSX.Element) => {
    this.modal.open = true;
    this.modal.body = content;
  };

  closeModal = () => {
    this.modal.open = false;
    this.modal.body = null;
  };
}
