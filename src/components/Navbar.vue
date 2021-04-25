<template>
  <nav class="navbar navbar-expand-lg navbar-light shadow fixed-top">
    <router-link to="/" class="navbar-brand"
      ><strong>HIGH</strong>WAY</router-link
    >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <!-- <li class="nav-item active" v-if="user ==''">
          <router-link to="/login" class="nav-link">Please Login</router-link>
        </li> -->
        <li class="nav-item active" v-if="user != ''">
          <div class="nav-link">{{ user }}</div>
        </li>
        <li class="nav-item active">
          <a class="nav-link" v-if="user != ''" @click="pagePhoto">Photo</a>
          <!-- <router-link to="/photos" class="nav-link" >Photo</router-link> -->
        </li>
        <li class="nav-item active">
          <a class="nav-link" v-if="user != ''" @click="pageVideo">Video</a>
          <!-- <router-link to="/video" class="nav-link">Video</router-link> -->
        </li>
        <li class="nav-item active">
          <!-- <router-link to="/" class="nav-link">Logout</router-link> -->
          <!-- <div >Logout</div> -->
          <a class="nav-link" v-if="user != ''" @click="logout">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      user:'Please Login'
    }
  },
  created() {
    this.user = this.$store.getters.user
    console.log("Create Navbar Page");
    console.log(this.user);
  },
  computed(){
    this.user = this.$store.getters.user
  },
  mounted() {
    // this.user = this.$store.getters.user
    this.user = this.$store.getters.user
    // if (this.user == null) {
    //   window.location = "#/login"
    // }
  },
   methods: {

     logout(){
        this.$store.dispatch("getUsername",null)
        window.location = "#/login"
     },
     pagePhoto(){
        //this.$store.dispatch("getUsername",this.username)
        window.location = "#/photos"
     },
     pageVideo(){
        //this.$store.dispatch("getUsername",this.username)
        window.location = "#/video"
     },

   }
};
</script>

<style>
</style>