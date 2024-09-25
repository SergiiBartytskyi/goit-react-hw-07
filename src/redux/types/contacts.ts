export type Contact = {
  id: string;
  name: string;
  number: string;
};

export type ContactsState = {
  items: Array<Contact>;
  loading: boolean;
  error: string | null;
};
