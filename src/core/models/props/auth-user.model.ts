import { ShopUserNull } from 'core/models/user.model';

/**
 * Interface is the return for every auth user
 */
export interface AuthUserProps {
  currentUser: ShopUserNull;
}
