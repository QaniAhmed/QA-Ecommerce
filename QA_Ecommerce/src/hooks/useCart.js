import { useStatePersistence } from "./useStatePersistence";

export function useCart() {
  const [CartItems, setCartItems] = useStatePersistence("cart", []);
  const [WishlistItems, setWishlistItems] = useStatePersistence("Wishlist", []);

  const UpdateCart = (item) => {
    setCartItems((prev) => {
      const isExist = prev.some((i) => i.id == item.id);
      return isExist
        ? prev.filter((i) => i.id != item.id)
        : [...prev, { ...item, quantity: 1 }];
    });
  };

  const UpdateWishlist = (item) => {
    setWishlistItems((prev) => {
      const isExist = prev.some((i) => i.id === item.id);
      return isExist ? prev.filter((i) => i.id !== item.id) : [...prev, item];
    });
  };

  const IncreaseCartWithCount = (item) => {
    setCartItems((prev) => {
      const isExist = prev.find((i) => i.id === item.id);
      return isExist
        ? prev.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
          )
        : [...prev, { ...item, quantity: 1 }];
    });
  };

  const DecreaseCartWithCount = (item) => {
    setCartItems((prev) => {
      const target = prev.find((i) => i.id === item.id);
      if (!target) return prev;
      if (target.quantity > 1) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i,
        );
      }
      return prev.filter((i) => i.id !== item.id);
    });
  };
  const RemoveItem = (item) => {
    setCartItems((prev) => {
      return prev.filter((i) => i.id !== item.id);
    });
  };

  const totalQuantity = CartItems.reduce((acc, item) => acc + item.quantity, 0);

  return {
    CartItems,
    WishlistItems,
    UpdateCart,
    UpdateWishlist,
    IncreaseCartWithCount,
    DecreaseCartWithCount,
    totalQuantity,
    RemoveItem,
  };
}
