<script setup>
import asideX from '../components/aside.vue'
import asideY from '../components/asideY.vue'
import footerX from '../components/footer.vue'


</script>
<script>
export default {
              data() {
                     return {
                            posts:[]
                     }
              },
              created() {
                     
                     fetch("http://localhost:3000/players")
                     .then(response => response.json())
                     .then(data => this.posts = data)
                    
              },
              methods: {
          ps() {
            alert(this.posts[0].id)
           },
           async authUser() {
              async function getPlayers(url) {
    const response = await fetch(url + "players");
    const profile = await response.json();
    return profile;
  }
              function genreRnadom(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  let id = document.getElementById("id").value;
  let password = document.getElementById("pass").value;
  const url = "http://localhost:3000/"
  const user = await getPlayers(url);

  user.forEach(async (element) => {
    if (id == element.name && password == element.password) {
      let cookie = genreRnadom(8);
      document.cookie = `auth=${cookie}; max-age=3600; path=/`;
      element.cookie = cookie;
      const user = {
        name: element.name,
        password: element.password,
        nfts: element.nfts,
        mail:element.mail,
        description:element.description,
        photo:element.photo,
        coins:element.coins,
        cookie: cookie,
        points: element.points,
        id: element.id,
      };
      const response = await fetch(url + "players/" + element.id, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });

      // Awaiting response.json()
      const resData = await response.json();
      window.location.href = "http://localhost:5173/Home"

      return;
    }
  });
  
}
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
                     <p class="col-start-5 self-center text-[2.5rem] text-[white]">Login</p>

              </div>
              <div
                     class="flex mt-[10%] sm:mt-0  flex-col w-full col-start-2 col-end-[-2] sm:col-end-2 p-[1rem]  row-start-2 row-end-2  items-center rounded bg-gradient-to-b from-fuchsia-400  sm:w-[85vw] h-[70vh]">

                     <form class="border-[1px] flex flex-col justify-around align-between text-[white] rounded h-full w-full ">
                          
                            <label class="flex w-full justify-around" for="id">Username
                                   <input  class="rounded text-[black]" type="text" id="id">
                            </label>
                            <label class="flex w-full justify-around" for="pass">Password
                                   <input class="rounded text-[black]" type="password" id="pass">
                            </label>
                            <input type="button"  v-on:click="authUser()"  class=" cursor-pointer hover:text-black transition duration-800 ease-in-out hover:bg-white rounded w-[75%] self-center h-[2.5rem] bg-gray-900 text-[white]" value="Login">
                     </form>
              </div>
              <footerX class="row-start-4 row-end-5"></footerX>

       </div>

</template>