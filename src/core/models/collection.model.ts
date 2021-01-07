import { ShopItem } from 'core/models/item.model';

/**
 * Collection of items in the shop.
 */
export interface ShopCollection {
  id: string;
  title: string;
  routeName: string;
  items: ShopItem[];
}
