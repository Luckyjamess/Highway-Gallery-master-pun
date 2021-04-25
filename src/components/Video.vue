<template>
  <div class="custom-container" id="gellery">
    <div class="video-content">
      <div class="row content">
        <div v-for="vdo in video.hits" :key="vdo">
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
  computed: {},
  mounted() {
    this.$store.dispatch("getPhoto");
    this.$store.dispatch("getVideo");
    this.video = this.$store.getters.allVideo;
    console.log(this.video);
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