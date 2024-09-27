<script setup lang="ts">
const route = useRoute()
const selectedImage = ref<string | null>()
const cartstore = cartStore()
const quantity = ref<number>(1)
interface Product {
    id: number,
    title: string
    image: string,
    price: number,
    description: string
}
const increaseQty = () => {
    quantity.value++
}

const decreaseQty = () => {
    if (quantity.value > 1) {
        quantity.value--
    }
}

const selectImage = (img: string) => {
    selectedImage.value = img
}

const addToCart = () => {
    if (product.value) {
        const newItem = {
            id: product.value.id,
            image: product.value.image,
            title: product.value.title,
            price: product.value.price,
            quantity: quantity.value,
        }
        cartstore.addItem(newItem)
        alert("Added to cart")
    } 
}
const handleInput=(event:Event)=>{
  const input = event.target as HTMLInputElement
  const value = Number(input.value)
  if(isNaN(value)||value<1){
    quantity.value=1
  }else{
    quantity.value=value
  }

}
const { data: product, status } = await useFetch<Product>(`https://fakestoreapi.com/products/${route.params.id}`);
</script>
<template>
   
    <div v-if="status === 'pending'" class="text-center text-2xl">
        <h1>Loading.............</h1>
    </div>
    <div v-else-if="status === 'success' && product" class="flex-row md:flex mx-5">
        <div class="grid grid-cols-1 w-full md:w-1/3 h-1/2 md:justify-items-center">
            <div>
                <img :src="selectedImage || product.image" :alt="product.title" class="h-[330px] w-72 border-2 md:my-3 p-7 object-contain" />
            </div>
            <div class="flex flex-row gap-2 h-20 w-72 my-4 md:my-0">
                <img :src="product.image" @click="selectImage(product.image)" :alt="product.title" class="h-auto w-1/4 border-2 p-2 object-contain" />
                <img :src="product.image" @click="selectImage(product.image)" :alt="product.title" class="h-auto w-1/4 border-2 p-2 object-contain" />
                <img :src="product.image" @click="selectImage(product.image)" :alt="product.title" class="h-auto w-1/4 border-2 p-2 object-contain" />
                <img :src="product.image" @click="selectImage(product.image)" :alt="product.title" class="h-auto w-1/4 border-2 p-2 object-contain" />
            </div>
        </div>
        <div class="w-full md:w-1/2 md:mx-10 lg:mx-0">
            <ul>
                <li class="text-2xl">{{ product.title }}</li>
                <li class="my-2">
                    <div class="text-xl">
                        <label>Price:</label><br>
                        $ {{ product.price }}
                    </div>
                </li>
                <li class="my-2">
                    <div class="text-xl">
                        <label>Quantity:</label>
                        <div class="flex">
                            <button :class="quantity<=1 ? 'text-gray-200 hover:cursor-not-allowed':'text-black hover:cursor-pointer'" 
                             class=" text-4xl" @click="decreaseQty()">-</button>
                           <input  type="number" placeholder="1" v-model.number="quantity" min="1" class="h-10 w-10 m-2 text-center border-2" @input="handleInput($event)"/>
                            <button class="cursor-pointer text-3xl" @click="increaseQty()">+</button>
                        </div>
                    </div>
                </li>
                <li class="my-3 mb-5">
                    <button class="bg-gray-800 text-white p-2 rounded-md w-2/4 text-lg" @click="addToCart()">Add to cart</button>
                </li>
                <li class="text-base border-t mt-5 pt-2">
                    <label>Description</label><br>
                    {{ product.description }}
                </li>
            </ul>
        </div>
    </div>
</template>




