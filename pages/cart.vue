<script setup lang="ts">
const cart= cartStore()
const handleInput=(event:Event,index:number)=>{
  const input = event.target as HTMLInputElement
  const value = Number(input.value)
  if(isNaN(value)||value<1){
    cart.items[index].quantity = 1
  }
}
</script>
<template>
  <div v-if="cart.itemCount > 0" class="flex justify-center my-8 ">
    <table class="sm:w-4/5 bg-white border-t mx-4 border-gray-200">
      <thead>
        <tr class="bg-gray-200 border-b">
          <th class="py-2 px-4">SNo</th>
          <th class="py-2 px-4">Products</th>
          <th class="py-2 px-4">Quantity</th>
          <th class="py-2 px-4">Price</th>
          <th class="py-2 px-4">Action</th> 
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in cart.items" class="hover:bg-gray-100 border-2">
          <td class="py-2 px-4 text-center">{{ index+1 }}</td>
          <td class="py-2 px-4 flex items-center justify-center">
            <img :src="item.image" :alt="item.title" class=" h-14 sm:h-16 md:h-24 w-14 sm:w-16 md:w-24 object-contain" />
          </td>
          <td class="py-2 px-4  text-center"> 
            <button :class="item.quantity<=1 ? 'text-gray-200 hover:cursor-not-allowed':'text-black hover:cursor-pointer'" 
              class=" text-4xl" @click="cart.decreaseQty(item.id)" >-</button>
            <input type="number" placeholder="1" v-model.number="item.quantity" min="1" class="h-10 w-10 m-2 text-center border-2" @input="handleInput($event, index)"/>
            <button class="cursor-pointer text-3xl" @click="cart.increaseQty(item.id)">+</button>  
          </td>
          <td class="py-2 px-4 text-center">$ {{ (item.price * item.quantity).toFixed(2) }}</td>
          <td class=" text-center " @click="cart.removeItem(item.id)">
            <UIcon name="solar:trash-bin-trash-bold" class="h-8 w-6"/>
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <div class="text-right my-5 mr-10 font-bold">Total: $ {{cart.totalPrice.toFixed(2)}}</div> 
          </td>
          <td colspan="5">
            <div class="flex justify-center"> 
             <NuxtLink to="/checkout">
              <button class="bg-gray-800 text-white p-2 my-5 rounded-md text-sm md:text-base">Checkout Now</button>
             </NuxtLink>
            </div>
          </td> 
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else class="text-center text-3xl">
    <h1>No cart items</h1>
  </div>
</template>
