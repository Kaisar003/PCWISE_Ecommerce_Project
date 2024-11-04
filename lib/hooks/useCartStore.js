import { create } from 'zustand';
import { persist } from "zustand/middleware";

const initialState = {
    items: [],
    itemsPrice: 0,
    shippingPrice: 0,
    totalPrice: 0,
    deliveryType: '',
    paymentType: '',
    customPCTotalPrice: 0,
};

const round2 = (num) => Math.round((num + Number.EPSILON) * 100) / 100

// Create Zustand store
export const cartStore = create(persist(
    (set) => ({
        ...initialState,
        increase: (item) => {
            set((state) => {
                const exist = state.items.find((x) => x.id === item.id);
                const updatedCartItems = exist
                    ? state.items.map((x) =>
                        x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
                    )
                    : [...state.items, { ...item, quantity: 1 }];

                const { itemsPrice, shippingPrice, totalPrice } = calcPrice(updatedCartItems);

                return {
                    items: updatedCartItems,
                    itemsPrice,
                    shippingPrice,
                    totalPrice,
                };
            });
        },
        decrease: (item) => {
            set((state) => {
                const exist = state.items.find((x) => x.id === item.id);
                if (!exist) return;

                const updatedCartItems =
                    exist.quantity === 1
                        ? state.items.filter((x) => x.id !== item.id)
                        : state.items.map((x) =>
                            x.id === item.id ? { ...x, quantity: x.quantity - 1 } : x
                        );

                const { itemsPrice, shippingPrice, totalPrice } = calcPrice(updatedCartItems);

                return {
                    items: updatedCartItems,
                    itemsPrice,
                    shippingPrice,
                    totalPrice,
                };
            });
        },
        remove: (item) => {
            set((state) => {
                const updatedCartItems = state.items.filter((x) => x.id !== item.id);

                const { itemsPrice, shippingPrice, totalPrice } = calcPrice(updatedCartItems);

                return {
                    items: updatedCartItems,
                    itemsPrice,
                    shippingPrice,
                    totalPrice,
                };
            });
        },
        setDeliveryType: (deliveryType) => set({ deliveryType }),
        setPaymentType: (paymentType) => set({ paymentType }),
        setTotalPrice: (newPrice) => {
            set(state => {
                if (state.customPCTotalPrice !== newPrice) {
                    return { customPCTotalPrice: newPrice };
                }
                return state;
            });
        },
        reset: () => set({ ...initialState }),
    }
    ),
    {
        name: 'shopping-cart',
    }
)
);

export default function useCartService() {
    const { items, itemsPrice, shippingPrice, totalPrice, increase, decrease, remove, setDeliveryType,
        setPaymentType, deliveryType, paymentType, customPCTotalPrice, setTotalPrice, reset } = cartStore();

    return {
        items,
        itemsPrice,
        shippingPrice,
        totalPrice,
        increase,
        decrease,
        remove,
        setDeliveryType,
        setPaymentType, deliveryType, paymentType,
        customPCTotalPrice, setTotalPrice, reset
    };
}

const calcPrice = (items) => {
    const itemsPrice = round2(
        items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
    const shippingPrice = 0; // Free shipping
    const totalPrice = round2(itemsPrice + shippingPrice);

    return { itemsPrice, shippingPrice, totalPrice };
};
