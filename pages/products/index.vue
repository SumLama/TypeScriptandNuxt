<script setup lang="ts">
import type {Product} from '~/types/interface';
const {data:products,status} = await useFetch<Product[]>("https://fakestoreapi.com/products")
</script>

<template>
    <div v-if="status === 'error'" class="text-center text-2xl">
        <h1>Fetching error occured.</h1>
    </div>
    <div v-else-if="status==='success' && products">
        <ProductList :products="products" />
   </div>
</template>
