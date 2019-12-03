<template>
  <div>
      <form class="bg-black p-5 text-center text-gray-600 realtive z-10 flex content-start flex-wrap">
        <div class="lg:w-1/2 m-4 lg:m-0">
          <input v-model="searchQuery"
          type="text" class="p-2 bg-grey-darker lg:w-1/2" placeholder="Search">
          <button class="text-white py-2 rounded px-10 font-bold bg-gray-800" @click.prevent="setStatus('')">All</button>
        </div>

        <div class="lg:w-1/2 ml-4 lg:ml-0 lg:text-left">
            <span class="text-gray-600 py-2 pr-10 font-bold">Sort by:</span>
            <button class="lg:w-auto w-10 text-white py-2 rounded pr-10 font-bold" @click.prevent="orderBy('publishDate')"><i class="far fa-calendar-alt"></i> <span class="hidden lg:inline-block">Date</span></button> |
            <button class="lg:w-auto w-10 text-white py-2 rounded px-10 font-bold" @click.prevent="orderBy('duration')"><i class="far fa-clock"></i> <span class="hidden lg:inline-block">Duration</span></button> <span class="hidden lg:inline-block">|</span>
            <button class="lg:w-auto w-10 text-white py-2 rounded px-10 font-bold text-xs hidden lg:inline-block" @click.prevent="setStatus('css')">CSS</button>
            <button class="lg:w-auto w-10 text-white py-2 rounded px-10 font-bold text-xs hidden lg:inline-block" @click.prevent="setStatus('js')">JS</button>
        </div>
        <div class="lg:absolute right-0 top-0 m-5 lg:w-auto  w-full">
        <button class="lg:w-32 w-full text-black bg-white py-2 rounded px-10 font-bold"><i class="fas fa-shopping-cart"></i></button>
        <div v-if="isEnter" class="lg:w-32 w-full bg-green-500 text-white text-xs py-3 px-5">
            <div v-html="selectChoice.join('<br/><br/>')"></div>
        </div>
    </div>
    </form>
  </div>
</template>

<script>
  // import Cart from './Cart.vue';
  import store from '../store';


  export default {
    name: "FilterBar",
    data() {
      return {
        searchQuery: undefined,
        isEnter: false,

        store,
      }
    },
    watch: {
      searchQuery(value) {
        this.$emit('filter-change', value);

        this.store.myMessage = value;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>