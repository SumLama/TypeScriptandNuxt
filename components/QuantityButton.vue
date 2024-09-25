<script setup lang="ts">
const quantity =defineModel<number>()
const IncreaseQty= ()=>{
  if(quantity?.value){
    quantity.value++
  }
}
const DecreaseQty= ()=>{
  if(quantity?.value && quantity.value>0){
    quantity.value--
  }
}

</script>
<template>
    <button class="font-bold " @click="DecreaseQty">-</button>
    <input type="text" placeholder="1" v-model.number="quantity" class="h-10 w-10 m-2 text-center border-2 "/>
    <button class="font-bold" @click="IncreaseQty">+</button>   
</template>