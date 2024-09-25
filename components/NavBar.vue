<script setup lang="ts">
const cart = cartStore()
</script>
<template>   
    <div>
        <div class="grid grid-cols-2 justify-items-end text-2xl my-5 mx-2 " >
            <div class="flex">
                <NuxtLink to="/" exact-active-class="text-[#0058A0] px-3">Home</NuxtLink>
                <NuxtLink to="/products" exact-active-class="text-[#0058A0]">Products</NuxtLink>
            </div>
            <div>
                <NuxtLink to="/cartlisting" exact-active-class="text-[#0058A0]">
                    <UIcon name="heroicons:shopping-cart" class="w-8 h-8"  />
                    <span class="text-base align-text-top mx-1">{{cart.itemCount }}</span>
                </NuxtLink>
            </div>    
        </div>  
    </div>
</template>

<style scoped>

</style>