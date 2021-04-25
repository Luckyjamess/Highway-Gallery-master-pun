<template>
  <div style="display:inline-block" v-if="isLoaded">{{ numLike }}</div>
</template>

<script>
import axios from "axios";
export default {
  name: "likeBox",
  props: ["imgUrl"],
  data() {
    return {
      numLike: 777,
      isLoaded: false,
    };
  },
  created() {
    this.getlike();
    /*axios
        .post("http://localhost:2002/api/getlikeimg", {payload:"https://images.unsplash.com/photo-1619283027421-dd50f72d21b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjI0OTR8MHwxfGFsbHwyfHx8fHx8Mnx8MTYxOTM0MTI2Mw&ixlib=rb-1.2.1&q=80&w=400"})
        .then((res) => {console.log(res);alert(res.data.likeNum);});*/
  },
  methods: {
    async getlike() {
      await axios
        .post("http://localhost:2002/api/getlikeimg", {payload: this.$props.imgUrl})
        .then((res) => {
          console.log(res);
          if(res.data.data.likeNum!=null)
            this.numLike = res.data.data.likeNum;
          else
            this.numLike = 0;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.isLoaded = true;
        });
    },
  },
};
</script>
