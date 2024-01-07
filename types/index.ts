export interface IFounder {
  name: string;
  avatar: string;
  role: string;
  id: number;
}
export interface ExtendedDocument extends Document {
  startViewTransition?: any;
}
