<template>
  <div id="video">
    <TitlePageVDO />
    <Video/>
    <Navbar />
    
  </div>
</template>

<script>
import Video from "@/components/Video";
import Navbar from "@/components/Navbar";
import TitlePageVDO from "@/components/TitlePageVDO";

export default {
  components: {
    Video,
    Navbar,
    TitlePageVDO
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