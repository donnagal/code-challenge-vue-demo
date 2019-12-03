<template>
<!--Modal-->
    <div v-if="!isHidden && isCloseAdd && !isEnter"
            class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50 z-10"></div>
            
            <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            
            <div v-on:click="isHidden = !isHidden" class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
                <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
                <span class="text-sm">(Esc)</span>
            </div>
        
            <!-- Add margin if you want to see some of the overlay behind the modal-->
            <div class="modal-content py-4 text-left px-6 text-gray-900">
                <!--Title-->
                <div class="flex justify-between items-center pb-8">
                <p class="text-xl font-bold">To continue, log in to your account</p>
                <div v-on:click="isHidden = !isHidden" class="modal-close cursor-pointer z-50">
                    <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                    </svg>
                </div>
                </div>
        
                <!--Body-->
                <form v-on:submit="validateForm">
                    <div class="my-3" v-bind:class="{ 'has-warning': attemptSubmit && missingName }">
                        <label class="hidden" for="name">Name</label>
                        <input id="name" name="name" placeholder="User Name" class="transition focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal ds-input" type="text" v-model="name">
                        <div class="text-xs text-red-500 pl-8 pt-1" v-if="attemptSubmit && missingName">This field is required.</div>
                    </div>
                    
                    <div class="mb-6" v-bind:class="{ 'has-warning': attemptSubmit && wrongNumber }">
                        <label class="hidden" for="number">Enter a number between 1 and 10</label>
                        <input id="number" name="number"  placeholder="Enter a number between 1 and 10" class="transition focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal ds-input" type="text" v-model="number">
                        <div class="text-xs text-red-500 pl-8 pt-1" v-if="attemptSubmit && wrongNumber">Make sure this is a number between 1 and 10.</div>
                    </div>
                
                    <button v-on:click="isEnter = !isEnter && !missingName && !wrongNumber" class="w-full bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded mb-8">Enter</button>
                </form>


                <!--Footer-->
                <div class="flex justify-end pt-5">
                    <a href="#" class="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">Don't have an account?</a>
                    <button  v-on:click="isHidden = !isHidden" class=" px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400">Close</button>
                </div>
                
            </div>
            </div>
        </div>
</template>

<script>
  export default {
    name: "Modal",
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>