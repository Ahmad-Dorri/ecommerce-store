import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Product } from '@/types';
import { toast } from 'react-hot-toast';

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCartStore = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);
        if (existingItem) {
          return toast.error('آیتم در سبد شما وجود دارد');
        }

        set({
          items: [...get().items, data],
        });
        toast.success('آیتم با موفقیت به سبد خرید اضافه شد.');
      },
      removeItem: (id: string) => {
        set({
          items: [...get().items.filter((item) => item.id !== id)],
        });
        toast.success('محصول با موفقیت از سبد خرید حذف شد.');
      },
      removeAll: () => {
        set({
          items: [],
        });
        toast.success('تمام محصولات با موفقیت از سبد خرید حذف شدند.');
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
export default useCartStore;
