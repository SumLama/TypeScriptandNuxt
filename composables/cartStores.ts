import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createPinia, defineStore } from 'pinia';

export const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

interface cartItem {
    id: number;
    title: string;
    image: string;
    price: number;
    quantity: number;
}
export const cartStore = defineStore('cart', () => {
    const items = ref<Array<cartItem>>([])

    const itemCount = computed(() => items.value.length)
    
    const totalPrice = computed(() => 
        items.value.reduce((total, item) => total + item.price * item.quantity, 0)
    );

    const addItem = (item: cartItem) => {
        const existingItem = items.value.find(i => i.id === item.id)
            if (existingItem) {
                existingItem.quantity += item.quantity
            } else {
                items.value.push(item)
            }  
        }
    const removeItem = (itemId: number) => {
        items.value = items.value.filter(item => item.id !== itemId)
    }

    const increaseQty = (itemId: number) => {
        const existingItem = items.value.find(i => i.id === itemId)
        if (existingItem) {
            existingItem.quantity++
        }
    };

    const decreaseQty = (itemId: number) => {
        const existingItem = items.value.find(i => i.id === itemId)
        if (existingItem && existingItem.quantity > 1) {
            existingItem.quantity--
        }
    }
    const clearStore = ()=>{
        items.value =[]
    }

    return { items, itemCount, totalPrice, addItem, removeItem,increaseQty,decreaseQty,clearStore}
}, 
{
    persist: true
})
