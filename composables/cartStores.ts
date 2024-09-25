interface cartItem{
    id:number,
    title:string,
    image:string,
    price:number,
    quantity:number  
}
 export const cartStore = defineStore('cart',()=>{
    const items =ref<Record<number,cartItem>>({})
      
    const itemCount = computed(()=>{ return Object.keys(items.value).length})
    const totalPrice = computed(()=> {return Object.values(items.value).reduce((total:number,item)=>total+item.price*item.quantity,0)})
    const addItem = (item:any)=>{
        if(items.value[item.id]){
            items.value[item.id].quantity += item.quantity
        }
        else{
            items.value[item.id] = item
        }
    }
    
    const removeItem =(itemId:number)=>{
        if(items.value[itemId]){
            delete items.value[itemId]
        }
    }

    return {items,itemCount,totalPrice,addItem,removeItem}
 })



