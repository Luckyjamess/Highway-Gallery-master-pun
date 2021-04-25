<template>
  <div class="custom-container" id="gellery">
    <div class="video-content">
      <div class="row content">
        <div v-for="vdo in allVideo" :key="vdo">
          <iframe width="420" height="315" :src="vdo.videos.large.url">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      styleClass: "classStack",
      video: null,
    };
  },
  computed: {
    allVideo() {
         if (this.$store.getters.searchVideo == null) {
        return this.$store.getters.allVideo.hits;
      } else {
        return this.$store.getters.searchVideo.hits;
      }
      
    }
  },
  mounted() {
    this.$store.dispatch("getPhoto");
    this.$store.dispatch("getVideo");
    this.video = this.$store.getters.allVideo;
    console.log(this.$store.getters.searchVideo);
  },
};
</script>
    
<style scoped>
.custom-container {
  width: 80vw;
  margin: 0 auto;
}
.video-content {
  margin-top: 10vh;
}

.content{
    display: flex;
    justify-content: center;
}
</style>