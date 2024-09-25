import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createPinia } from 'pinia';
export const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
interface cartItem{
    id:number,
    title:string,
    image:string,
    price:number,
    quantity:number  
}
export const cartStore = defineStore('cart', () => {
    const items = ref<Record<number, cartItem>>({});

    const itemCount = computed(() => Object.keys(items.value).length);
    
    const totalPrice = computed(() => 
        Object.values(items.value).reduce((total, item) => total + item.price * item.quantity, 0)
    );

    const addItem = (item: cartItem) => {
        if (items.value[item.id]) {
            items.value[item.id].quantity += item.quantity;
        } else {
            items.value[item.id] = item;
        }
    };

    const removeItem = (itemId: number) => {
        if (items.value[itemId]) {
            delete items.value[itemId];
        }
    };
    return { items,itemCount,totalPrice,addItem,removeItem }
}, {
    persist: true, 
});