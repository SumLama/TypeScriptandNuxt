<script setup lang="ts">
defineProps({
    products:Array<{
        id:number,
        title:string,
        image:string,
        price:number,
        description:string
    }>
})
</script>
<template>
   <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 justify-items-center gap-5 m-8 font-serif text-lg cursor-pointer">
        <div v-for="product in products" :key="product.id" >
            <ul>
                <li>
                    <NuxtLink :to="`/products/${product.id}`"> 
                    <img :src="product.image" :alt="product.title" class="h-[220px] w-[220px] p-3 border-2 rounded-md hover:shadow hover:border-4 object-contain">
                    </NuxtLink> 
                </li>
                <li class="my-3">
                    {{ product.title }}
                </li>
                <li class="my-3 text-orange-700">
                    $ {{ product.price }}
                </li>
            </ul>
        </div>
    </div>
</template>
