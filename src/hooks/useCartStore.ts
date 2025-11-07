// "use client";

// import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";

// export interface CartItem {
//   slug: string; // unique id
//   name: string;
//   image: string;
//   price: number;
//   quantity: number;
// }

// interface CartState {
//   items: CartItem[];
//   addItem: (item: CartItem) => void;
//   removeItem: (slug: string) => void;
//   updateQuantity: (slug: string, quantity: number) => void;
//   clearCart: () => void;
//   getTotal: () => number;
// }

// const useCartStore = create<CartState>()(
//   persist(
//     (set, get) => ({
//       items: [],

//       addItem: (item) => {
//         const existing = get().items.find((i) => i.slug === item.slug);
//         if (existing) {
//           // If item exists, update quantity
//           set({
//             items: get().items.map((i) =>
//               i.slug === item.slug
//                 ? { ...i, quantity: i.quantity + item.quantity }
//                 : i
//             ),
//           });
//         } else {
//           // Add new item
//           set({ items: [...get().items, item] });
//         }
//       },

//       removeItem: (slug) => {
//         set({ items: get().items.filter((i) => i.slug !== slug) });
//       },

//       updateQuantity: (slug, quantity) => {
//         set({
//           items: get().items.map((i) =>
//             i.slug === slug ? { ...i, quantity } : i
//           ),
//         });
//       },

//       clearCart: () => set({ items: [] }),

//       getTotal: () =>
//         get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
//     }),
//     {
//       name: "cart-storage",
//       storage: createJSONStorage(() => localStorage), // safe for client
//       skipHydration: true, // prevents SSR mismatch errors
//     }
//   )
// );

// export default useCartStore;

"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface CartItem {
  slug: string; // unique id
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number; // ✅ reactive total
  addItem: (item: CartItem) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,

      addItem: (item) => {
        const existing = get().items.find((i) => i.slug === item.slug);
        let updatedItems;

        if (existing) {
          updatedItems = get().items.map((i) =>
            i.slug === item.slug
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          );
        } else {
          updatedItems = [...get().items, item];
        }

        set({
          items: updatedItems,
          total: updatedItems.reduce(
            (sum, i) => sum + i.price * i.quantity,
            0
          ),
        });
      },

      removeItem: (slug) => {
        const updatedItems = get().items.filter((i) => i.slug !== slug);
        set({
          items: updatedItems,
          total: updatedItems.reduce(
            (sum, i) => sum + i.price * i.quantity,
            0
          ),
        });
      },

      updateQuantity: (slug, quantity) => {
        const updatedItems = get().items.map((i) =>
          i.slug === slug ? { ...i, quantity } : i
        );
        set({
          items: updatedItems,
          total: updatedItems.reduce(
            (sum, i) => sum + i.price * i.quantity,
            0
          ),
        });
      },

      clearCart: () =>
        set({
          items: [],
          total: 0,
        }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    }
  )
);

export default useCartStore;
