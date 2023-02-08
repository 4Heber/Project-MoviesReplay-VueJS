<script setup>
import asideX from "../components/aside.vue";
import asideY from "../components/asideY.vue";
import footerX from "../components/footer.vue";
</script>
<script>
export default {
  data() {
    return {
      users: []
    }
  },
  created() {

    fetch("http://localhost:3000/players")
      .then(response => response.json())
      .then(data => this.users = data)

  },
  methods: {

    async register() {
      const url = "http://localhost:3000/"
      async function postPlayers(url, user) {
        const response = await fetch(url + "players"
          , {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(user),
          });


        return;
      }
      async function postStats(url, stat) {
        const response = await fetch(url + "stats"
          , {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(stat),
          });


        return;
      }
      async function getPlayers(url) {
        const response = await fetch(url + "players");
        const profile = await response.json();
        return profile;
      }


      let compare = await getPlayers(url);
      let exists = false;
      let uname = document.getElementById("id").value;
      let upass = document.getElementById("pass").value;
      let mail = document.getElementById("mail").value;
      compare.forEach((element) => {
        if (element.name == uname) {
          exists = true;
        }
      });
      if (exists == true || (uname == "") | (upass == "") || (mail == "")) {
        return false;
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
      let cookie = genreRnadom(8)
      document.cookie = `auth=${cookie}; max-age=3600; path=/`;
      const user = {
        name: uname,
        password: upass,
        nfts: [],
        description: "",
        coins: 1,
        cookie: cookie,
        photo: "https://th.bing.com/th/id/OIP.-6wDXFm_OzDMZXRrEj19nAHaHa?pid=ImgDet&rs=1https://th.bing.com/th/id/OIP.-6wDXFm_OzDMZXRrEj19nAHaHa?pid=ImgDet&rs=1",
        mail: mail,
        points: 0
      };
      await postPlayers(url, user);
      const stat = {
        id: uname,
        games: 0,
        most_played: "None"

      }
      await postStats(url, stat)
      window.location.href = "http://localhost:5173/Home"


    },

  },
}
</script>

<template>
  <div class="grid grid-cols-8 grid-rows-[200px 300px]">
    <asideX class="row-start-1 row-end-3"> </asideX>

    <div
      class="mt-[10%] grid grid-cols-8 sm:flex col-start-2 sm:col-end-2 col-end-[-2] w-full row-start-1 row-end-1 justify-center items-center rounded bg-gray-900 sm:w-[85vw] h-[15vh]">
      <asideY class="col-start-2 cursor-pointer"></asideY>
      <p class="col-start-5 self-center text-[2.5rem] text-[white]">Register</p>
    </div>
    <div
      class="flex mt-[10%] sm:mt-0 flex-col w-full col-start-2 col-end-[-2] sm:col-end-2 p-[1rem] row-start-2 row-end-2 items-center rounded bg-gray-700 sm:w-[85vw] h-[70vh]">
      <form class="border-[1px] flex flex-col justify-around align-between text-[white] rounded h-full w-full">
        <label class="flex w-full justify-around" for="mail">Mail
          <input class="rounded text-[black]" type="mail" id="mail" />
        </label>
        <label class="flex w-full justify-around" for="mail">Username
          <input class="rounded text-[black]" type="text" id="id" />
        </label>
        <label class="flex w-full justify-around" for="password">Password
          <input class="rounded text-[black]" type="password" id="pass" />
        </label>
        <input type="button" v-on:click="register()"
          class="cursor-pointer hover:text-black transition duration-800 ease-in-out hover:bg-white rounded w-[75%] self-center h-[2.5rem] bg-gray-900 text-[white]"
          value="Register" />
      </form>
    </div>
    <footerX class="row-start-4 row-end-5"></footerX>
  </div>
</template>
