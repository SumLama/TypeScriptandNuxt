<script setup lang="ts">
interface Product{
    id:number,
    title:string,
    image:string,
    price:number,
    description:string
}

const {data,status} = await useFetch<Product[]>("https://fakestoreapi.com/products")
</script>

<template>
  
    <div v-if="status==='pending'" class="text-center text-2xl">
        <h1>Loading....</h1>
    </div>
    <div v-else-if="status==='success' && data">
        <ProductList :products="data"/>
    </div>
   
</template>
