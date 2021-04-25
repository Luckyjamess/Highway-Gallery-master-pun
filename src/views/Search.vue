<template>
  <div id="search">
    <Navbar />
    <TitlePage />
    <Gallery />
  </div>
</template>

<script>
import Gallery from "@/components/Gallery";
import TitlePage from "@/components/TitlePage";
import Navbar from "@/components/Navbar";

export default {
  components: {
    Gallery,
    TitlePage,
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
};
</script>

<style scoped>

</style>