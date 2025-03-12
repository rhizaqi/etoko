export type ActionResult = {
  error: string;
};

export interface User {
  name: string;
  email: string;
  avatar: string;
}

export interface userNavProps {
  user: User;
}
