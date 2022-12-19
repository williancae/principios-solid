export interface IAddressMail {
  name: string;
  email: string;
}

export interface IMessage {
  to: IAddressMail;
  from: IAddressMail;
  subject: string;
  body: string;
}
export interface IMailProvider {
  sendMail(message: IMessage): Promise<void>;
}
