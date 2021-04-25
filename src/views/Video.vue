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

}
</script>

<style>

</style>