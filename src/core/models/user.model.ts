/**
 * User to store in the database.
 */
export interface ShopUser {
  uid?: string;
  email: string;
  displayName: string;
  photoURL: string | null;
  createdAt: Date;
}
