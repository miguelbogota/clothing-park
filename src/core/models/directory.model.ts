/**
 * Directory in the shop.
 */
export interface ShopDirectory {
  id: number;
  title: string;
  imageUrl: string;
  linkUrl: string;
  size?: 'small' | 'medium' | 'large';
}
