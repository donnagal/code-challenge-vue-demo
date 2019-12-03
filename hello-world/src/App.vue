<template>
  <div id="app" class="bg-gray-200">
{{store.myMessage}}

    <FilterBar @filter-change="handleFilterChange" />
    <Products :items="filteredItems"/>
    <Modal />
  </div>
</template>

<script>
import FilterBar from './components/FilterBar.vue'
import Products from './components/Products.vue'
import Modal from './components/Modal.vue'

import store from './store';

export default {
  name: 'app',
  components: {
    Products,
    FilterBar,
    Modal
  },
  data(){
    return {
      data: {
        name: '',
        number: '',
        attemptSubmit: false,
        current: 1,
        isHidden: true,
        isEnter: false,
        isCloseAdd: true,
        isLogged: true,
        selectChoice: [],
        sortKey: '',
        sortSettings: [
        { 'name': true },
        { 'duration': true },
        { 'publishDate': true },
      ],
    },
     items: [
       { 
        name: 'React - basics', 
        description: 'This course is going to take you through basics of React.',
        author: 'James White',
        publishDate: '12-03-2019',
        duration: '00:03:56',
        group: 'js', 
        image: ["https://cdn.auth0.com/blog/react-js/react.png"],
        }, 
        {
          name: 'Vue - learn vue in an hour',
          description: 'This course teaches you how to build a vue application in an hour.',
          author: 'Michael Brown',
          publishDate: '17-10-2019',
          duration: '00:00:59',
          group: 'js', 
          image: ["https://vuejs.org/images/logo.png"],
        },
        {
          name: 'CSS Animations',
          description: 'Learn how to animate anything in CSS',
          author: 'Alan Smith',
          publishDate: '04-12-2018',
          duration: '00:02:11',
          group: 'css', 
          image: ["https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"],
        },
        {
          name: 'JS - Zero to hero',
          description: 'Everything you need to know in JS',
          author: 'Sarah Parker',
          publishDate: '12-03-2019',
          duration: '01:01:35',
          group: 'js', 
          image: ["https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png"],
        }  
      ],

      filteredItems: [],

      store,
    }
  },
    created() {
    this.paginate_total = this.items.length/this.paginate;

    this.filteredItems = this.items.slice(0);
  },
    computed: {
      resultQuery(){
        if(this.searchQuery){
        return this.items.filter((item)=>{
          return this.searchQuery.toLowerCase().split(' ').every(v => item.title.toLowerCase().includes(v))
        })
        }else{
          return this.items;
        }
      }
    },
    methods: {
    orderBy: function(sorKey) {
      this.sortKey = sorKey
      this.sortSettings[sorKey] = !this.sortSettings[sorKey]
      this.desc = this.sortSettings[sorKey]
    },
    isNumeric: function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    },
    validateForm: function (event) {
      this.attemptSubmit = true;
      if (this.missingName || this.wrongNumber) event.preventDefault();
    },
    setPaginate: function (i) {
      if (this.current == 1) {
        return i < this.paginate;
      }
      else {
        return (i >= (this.paginate * (this.current - 1)) && i < (this.current * this.paginate));
      }
    },
    setStatus: function (status) {
      this.status_filter = status;
      this.$nextTick(function () {
        this.updatePaginate();
      });
    },
    updateCurrent: function (i) {
      this.current = i;
    },
    updatePaginate: function () {
      this.current = 1;
      this.paginate_total = Math.ceil(document.querySelectorAll('tbody tr').length/this.paginate);
    },


    handleFilterChange(value) {
      this.filteredItems = this.items.slice(0).filter((item) => item.name.toLowerCase().indexOf(value) !== -1);
    }
  },
}
</script>

<style>
gradient {
    background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
  }
  
  .card button.checkbox.custom {
    margin: auto;
    display: block;
  }
  
  .card button input[type="checkbox"].custom {
    margin-left: 0;
    padding: 0;
  }
  
  .card button input[type=checkbox].css-checkbox {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0px;
    border: 0;
  }
  
  .card button input[type=checkbox].css-checkbox + label.checkbox-cart {
    padding-left: 70px;
    height: 65px;
    width: 195px;
    display: inline-block;
    line-height: 70px;
    background-repeat: no-repeat;
    background-position: center 0;
    font-size: 15px;
    vertical-align: middle;
    cursor: pointer;
  }
  
  .card button input[type=checkbox].css-checkbox + label.checkbox-cart:hover {
    opacity: 1;
  }
  
  .card button input[type=checkbox].css-checkbox:checked + label.checkbox-cart {
    background-position: center -66px;
    opacity: 1;
  }
  
  .card button .checkbox-cart {
    background-image: url(assets/check.png);
  }
  
  .card input[type=checkbox].css-checkbox + label.checkbox-cart {
    opacity: 0;
  }
  
  .card:hover input[type=checkbox].css-checkbox + label.checkbox-cart {
    opacity: 1;
  }
  
</style>
