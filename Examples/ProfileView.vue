<script setup>
import { routeLocationKey } from 'vue-router';
import asideX from '../components/aside.vue'
import asideY from '../components/asideY.vue'
import footerX from '../components/footer.vue'

</script>
<script>
export default {
              data() {
                     return {
                            users:[]
                     }
              },
              created() {
                     if (document.cookie == "") {
                            return this.users = []
                     }
                    
                    
                     fetch("http://localhost:3000/players")
                     .then(response => response.json())
                     .then(data =>   {
                            
                            for(let x = 0; x< data.length;x++) {
                                  
                                   if(document.cookie == ("auth="+data[x].cookie)){
                                         
                                          return this.users = data[x]
}
                            }
                           
                     } )
                    
              },
              methods: {
         
         },
       }

</script>
<template>
   <div class="grid grid-cols-8 grid-rows-[200px 300px]">
              <asideX class="row-start-1 row-end-3">

              </asideX>

              <div
                     class="mt-[10%] grid grid-cols-8 sm:flex col-start-2 sm:col-end-2 col-end-[-2] w-full row-start-1 row-end-1 justify-center items-center rounded bg-gray-900 sm:w-[85vw] h-[15vh]">
                     <asideY class="col-start-2 cursor-pointer"></asideY>
                     <p class="col-start-5 self-center text-[2.5rem] text-[white]">Profile</p>

              </div>
              <div
                     class="flex mt-[10%] sm:mt-0  flex-col w-full col-start-2 col-end-[-2] sm:col-end-2 p-[1rem]  row-start-2 row-end-2  items-center rounded bg-gradient-to-b from-fuchsia-400 sm:w-[85vw] h-[70vh]">
                  <div class="w-[50%] flex h-[20%] bg-gradient-to-r from-fuchsia-500 via-violet-400 to-sky-500 rounded border-[1px] justify-center">
                    <div class="flex justify-between w-[85%] items-center text-[2rem] font-bold">#{{this.users.id}}
                      <div class="bg-gray-900 rounded-full cursor-pointer h-[4rem] w-[4rem] p-[1rem] flex items-center justify-center">
                      <svg class="w-[20px]  col-start-3 mx:col-start-2 fill-current inline-block self-center" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_901_1558)"> <path d="M29 7H30C30.553 7 31 7.447 31 8V30C31 30.553 30.553 31 30 31H2C1.447 31 1 30.553 1 30V8C1 7.447 1.447 7 2 7H19M6 28V19H10V28M14 28V13H18V28M22 28V1H26V28" stroke="#ffffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_901_1558"> <rect width="32" height="32" fill="white"></rect> </clipPath> </defs> </g></svg>
                    </div>
                    </div>
                      
                     
                       <img class="object-cover h-[8rem] w-[8rem] border-[5px] flex justify-center items-center rounded-full absolute mt-[1rem] overflow-hidden" :src="users.photo"></div>
                    
                    
                  
                  <div class=" bg-gray-200/10 w-[50%] h-[35%] rounded flex mt-[2rem] border-[1px] flex-col items-center justify-center">
                    <p class="text-[2rem] font-bold">{{this.users.name}}</p>
                    <p class="text-[1.4rem]">{{this.users.description}}</p>
                  </div>
                  <div class=" bg-gray-200/10 w-[50%] h-[35%] rounded grid mt-[2rem] border-[1px] grid-cols-2 p-[1rem]">
                    <div class="flex justify-center"><p class="text-[1.5rem] font-bold">Mail</p></div>
                    <div  class="flex justify-center"> <p class="text-[1.5rem] font-bold">Password</p></div>
                    <div class="flex justify-center"><p>{{this.users.mail}}</p></div>
                    <div  class="flex justify-center"><p>****</p></div>
                  
                  </div>
                    </div>
    <footerX class="row-start-4 row-end-5"></footerX>
  </div>
</template>