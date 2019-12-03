<template>
    <div class="bg-white px-8 py-10 shadow-lg">
        <img class="object-scale-down h-48 w-full pb-5" :src="item.image">
            <div class="mt-1">
            <h3 class="text-xl text-gray-900 pb-3 uppercase">
                {{ item.name }}
            </h3>
            <p class="mt-1 text-sm font-bold">{{item.author}}</p>
            <p class="text-xs text-gray-600 pt-1"><i class="far fa-calendar-alt"></i> {{ item.publishDate }}</p>
            <p class="text-xs text-gray-600 py-2"><i class="far fa-clock"></i> {{ item.duration }}</p>
            <p class="mt-3 pb-5">{{item.description}}</p>
        </div>
    </div>
</template>

<script>
import store from '../store';

export default {
  name: "Product",
  props: {
      item: Object,
  },

  data() {
      return {
          store
      }
  }
};
</script>