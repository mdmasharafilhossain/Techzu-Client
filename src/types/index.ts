export interface User {
  id: string;
  username: string;
}

export interface Purchase {
  id: string;
  user: User;
}

export interface Drop {
  id: string;
  name: string;
  price: number;
  availableStock: number;
  purchases: Purchase[];
}

export interface Reservation {
  id: string;
  dropId: string;
  userId: string;
  expiresAt: string;
}
