<script setup lang="ts">
const cart = cartStore()
const router = useRouter()
const handleOrder = () => {
  alert("Order placed successfully......")
  cart.clearStore()
  router.push('/products')
}
</script>
<template>
  <div class="p-5">
    <div v-if="cart.items.length> 0" class="flex justify-between items-start space-x-5 space-y-2">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div v-for="(item, index) in cart.items" :key="index" class="p-4 mx-4  border-2 flex flex-col w-72 h-72">
          <div class="flex justify-center">
            <img :src="item.image" :alt="item.title" class="h-24 w-18 my-4" />
          </div>
          <div class="text-lg font-semibold">{{ item.title }}</div>
          <div class="text-base lg:text-lg">Qty: {{ item.quantity }}</div>
        </div>
      </div>
      <div class="border-4 flex flex-col items-center justify-center text-center  bg-gray-200 w-72 h-72">
        <p class="text-xl font-semibold mb-3">Order Summary</p>
        <p class="my-1 text-base">
          Total Price: ${{ cart.totalPrice.toFixed(2) }}
        </p>
        <button
          class="bg-gray-800 text-white p-2 rounded-md text-sm mt-3"
          @click="handleOrder">
          Place Order
        </button>
      </div>
    </div>
  </div>  
</template>