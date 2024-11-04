import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialState = {
    purchasedItems: [],
};

const addItem = (item, set) => {
    set((state) => ({
        purchasedItems: [...state.purchasedItems, item],
    }));
}

// const calcTotals = (items) => {
//     const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

//     return { totalPrice };
// };

// Store creation
export const purchasedStore = create(
    persist(
        (set) => ({
            ...initialState,
            add: (item) => addItem(item, set),
            resetPurchase: () => set({ purchasedItems: [] }),
            // add: (items) => {
            //     set((state) => {
            //         let updatedItems = [...state.purchasedItems];

            //         items.forEach(item => {
            //             const existingItem = updatedItems.find((x) => x.id === item.id);

            //             if (existingItem) {
            //                 updatedItems = updatedItems.map((x) =>
            //                     x.id === item.id
            //                         ? { ...x, quantity: x.quantity + item.quantity }
            //                         : x
            //                 );
            //             } else {
            //                 updatedItems.push(item);
            //             }
            //         });

            //         return {
            //             purchasedItems: updatedItems,
            //         };
            //     });
            // },

            // remove: (id) => {
            //     set((state) => {
            //         const updatedItems = state.purchasedItems.filter((item) => item.id !== id);
            //         const { totalPrice } = calcTotals(updatedItems);

            //         return {
            //             purchasedItems: updatedItems,
            //             totalPrice,
            //         };
            //     });
            // },

            // clear: () => {
            //     set(() => ({
            //         purchasedItems: [],
            //         purchaseDate: ,
            //     }));
            // },
        }),
        {
            name: 'user-settings',
        }
    )
);

export default function usePurchasedItems() {
    const { purchasedItems, add, resetPurchase } = purchasedStore();

    return {
        purchasedItems,
        add,
        resetPurchase
    };
}
