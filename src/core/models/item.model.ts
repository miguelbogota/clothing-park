/**
 * Is an item for the shop.
 */
export interface ShopItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity?: number;
}
