<template>
  <div id="video">
    <Video/>
    <Navbar />
  </div>
</template>

<script>
import Video from "@/components/Video";
import Navbar from "@/components/Navbar";

export default {
  components: {
    Video,
    Navbar
  },
  created() {
    this.user = this.$store.getters.user
  },
  data() {
    return {
      name: "",
      email:"",
      user:""
      
    }
  },
  mounted(){
    // this.user = this.$store.getters.user
    if (this.user == "") {
      window.location = "#/login"
    }
  }

}
</script>

<style>

</style>