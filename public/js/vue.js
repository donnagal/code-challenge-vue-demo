new Vue({
  el: '#items',
  created() {
    this.paginate_total = this.items.length/this.paginate;
  },
  data: {
     current: 1,
     active: false,
     isHidden: true,
     isEnter: true,
     isCloseAdd: true,
     items: [
      { 
        name: 'React - basics', 
        description: 'This course is going to take you through basics of React.',
        author: 'James White',
        publishDate: '12/03/2019',
        duration: '00:03:56',
        group: 'js', 
        image: ["https://cdn.auth0.com/blog/react-js/react.png"],
    }, 
    {
      name: 'Vue - learn vue in an hour',
      description: 'This course teaches you how to build a vue application in an hour.',
      author: 'Michael Brown',
      publishDate: '17/10/2019',
      duration: '00:00:59',
      group: 'js', 
      image: ["https://vuejs.org/images/logo.png"],
    },
    {
      name: 'CSS Animations',
      description: 'Learn how to animate anything in CSS',
      author: 'Alan Smith',
      publishDate: '04/12/2018',
      duration: '00:02:11',
      group: 'css', 
      image: ["https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"],
    },
    {
      name: 'JS - Zero to hero',
      description: 'Everything you need to know in JS',
      author: 'Sarah Parker',
      publishDate: '12/03/2019',
      duration: '01:01:35',
      group: 'js', 
      image: ["https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png"],
    }  
    ],
    paginate: 1000,
    paginate_total: 0,
    search_filter: '',
    status_filter: ''
  },
  methods: {
    mouseOver: function(){
      this.active = !this.active;   
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
    }
  }
});