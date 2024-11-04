import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialState = {
    saveItems: [],
};

const addItemToWishlist = (item, set) => {
    set((state) => ({
        saveItems: [...state.saveItems, item],
    }));
};

const removeItemFromWishlist = (id, set) => {
    set((state) => ({
        saveItems: state.saveItems.filter((item) => item.id !== id),
    }));
};

export const wishlistStore = create(
    persist(
        (set) => ({
            ...initialState,
            addItem: (item) => addItemToWishlist(item, set),
            removeItem: (id) => removeItemFromWishlist(id, set),
        }),
        {
            name: 'wishlist',
        }
    )
);

export default function useWishlistStore() {
    const { saveItems, addItem, removeItem } = wishlistStore();

    return {
        saveItems,
        addItem,
        removeItem,
    };
}