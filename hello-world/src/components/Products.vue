<template>
  <div class="container mx-auto lg:py-10 text-center">
    <h2 class="text-3xl font-bold text-gray-900">Pick your premium </h2>
    <p class="mt-1 mb-4 px-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <div class="flex flex-wrap lg:mx-32">
        <div class="card lg:w-1/2 md:w-1/2 w-full p-5 relative z-0"
          v-for="item in items" v-bind:key="item.index">
            <Product :item="item" />
          </div>
      </div>
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  name: "Products",
  props: ["items"],
  components: {
    Product,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
