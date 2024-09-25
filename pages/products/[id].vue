<script setup lang="ts">
const route = useRoute()
const quantity = ref<number>(1);
const selectedImage=  ref<string | null>();
const cartstore = cartStore();
interface Product{
    id:number,
    title:string,
    image:string,
    price:number,
    description:string  
}

const {data:product,status} = await useFetch<Product>(`https://fakestoreapi.com/products/${route.params.id}`)

const IncreaseQty= ()=>{
    quantity.value++;
}
const DecreaseQty= ()=>{
  if(quantity.value>0){
      quantity.value--;
  }
}
const selectImage=(img:string)=>{
    selectedImage.value=img;

}
const addToCart = ()=>{
    if(product.value){
        const newItem={
        id:product.value.id,
        image:product.value.image,
        title:product.value.title,
        price:product.value.price,
        quantity:quantity.value
        }
    cartstore.addItem(newItem);
   alert("Added to cart")    
    }
}
</script>
<template>
    <div v-if="status=='pending'" class="text-center text-2xl ">
        <h1>Loading.............</h1>
    </div>
    <div v-else-if="status==='success' && product" class="flex-row md:flex mx-5 ">                                                   
      <div class="grid grid-cols-1 w-full md:w-1/3  h-1/2  md:justify-items-center ">
        <div >
            <img :src="selectedImage || product.image" :alt="product.title" class="h-[330px] w-72 border-2 md:my-3 p-7 object-contain"/>
        </div>
        <div class=" flex flex-row gap-2 h-20 w-72 my-4 md:my-0 ">
            <img :src="product.image" @click="selectImage(product.image)" :alt="product.title" class="h-auto w-1/4 border-2 p-2 object-contain"/>
            <img :src="product.image" @click="selectImage(product.image)"  :alt="product.title" class="h-auto w-1/4 border-2 p-2 object-contain"/>
            <img :src="product.image" @click="selectImage(product.image)"  :alt="product.title" class="h-auto w-1/4  border-2 p-2 object-contain"/>
            <img :src="product.image" @click="selectImage(product.image)"  :alt="product.title" class="h-auto w-1/4  border-2 p-2  object-contain"/>
        </div> 
            
        </div> 
        <div class="w-full md:w-1/2 md:mx-10 lg:mx-0">
            <ul>
                <li class="text-2xl">
                    {{ product.title }}
                </li>
                <li class="my-2">
                    <div class="text-xl" >
                        <label>Price:</label><br>
                   $ {{ product.price }}
                    </div>   
                </li  >
                <li  class="my-2">
                    <div class="text-xl" >
                        <label>Quantity:</label>
                        <div class="inline mx-4">
                            <button class="font-bold " @click="DecreaseQty">-</button>
                            <input type="text" placeholder="1" v-model.number="quantity" class="h-10 w-10 m-2 text-center border-2 " />
                            <button class="font-bold" @click="IncreaseQty">+</button>  
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
