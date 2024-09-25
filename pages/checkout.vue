<script setup>
const cart = cartStore();
const items = ref(cart.items);
const handleOrder = () => {
  alert("Placed Order successfully...!");
};
</script>

<template>
  <div class="p-5">
    <div class="flex justify-between items-start space-x-5 space-y-2">
      <div class="grid grid-cols-3 ">
        <div v-for="(item, index) in items" :key="index" class="p-4 mx-4 my-4 border-2  flex flex-col w-72 h-72">
          <div class="flex  justify-center">
            <img :src="item.image" :alt="item.name" class="h-24 w-18 my-4"  />
          </div>
          
          <div class="text-lg font-semibold"> {{ item.title }}</div>
          <div class="text-base lg:text-lg">Qty: {{ item.quantity }}</div>
        </div>
      </div>
      <div class="border-4 flex flex-col items-center justify-center text-center py-3 bg-gray-200 w-72 h-72">
        <p class="text-xl font-semibold mb-3">Order Summary</p>
        <p class="my-1 text-base">Total Price: ${{ cart.totalPrice.toFixed(2) }}</p>
        <button class="bg-gray-800 text-white p-2 rounded-md text-sm mt-3" @click="handleOrder">
          Place Order
        </button>
      </div>
    </div>
  </div>
</template>

