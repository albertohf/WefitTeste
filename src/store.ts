import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductType } from "./services/Products";

export interface ProductState {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  cart: ProductState[];
  addItem: (item: ProductType) => void;
  removeItem: (item: ProductType) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      addItem: (item: ProductType) =>
        set((state) => {
          const newProduct = state.cart.find(
            (product) => product.id === item.id
          );
          if (newProduct) {
            const updatedCart = state.cart.map((p) => {
              if (p.id === newProduct.id) {
                return {
                  ...p,
                  quantity: p.quantity ? p.quantity + 1 : 1,
                };
              }
              return p;
            });
            return { cart: updatedCart };
          } else {
            return { cart: [...state.cart, { ...item, quantity: 1 }] };
          }
        }),
      removeItem: (item: ProductType) =>
        set((state) => {
          const existProduct = state.cart.find(
            (product) => product.id === item.id
          );
          if (existProduct && existProduct.quantity! > 1) {
            const updatedCart = state.cart.map((p) => {
              if (p.id === item.id) {
                return {
                  ...p,
                  quantity: p.quantity! - 1,
                };
              }
              return p;
            });
            return { cart: updatedCart };
          } else {
            const filteredCart = state.cart.filter((p) => p.id !== item.id);
            return { cart: filteredCart };
          }
        }),
      clearCart: () => set({ cart: [] }),
    }),

    { name: "cart-storage" }
  )
);
