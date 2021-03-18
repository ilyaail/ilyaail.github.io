<template>
  <div class="homepage">
    <NavigationBar @getGifs="useGifs" />

    <vue-masonry-gallery
      class="masonry-wrapper"
      :imgsArr="imgsArr"
      :reachBottomDistance="100"
      @scrollReachBottom="addMoreGifs"
    ></vue-masonry-gallery>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar';
import VueMasonryGallery from 'vue-masonry-gallery/vendor/VueMasonryGallery/VueMasonryGallery';
import { getData } from '../utils/getData';

export default {
  components: {
    NavigationBar,
    VueMasonryGallery,
  },
  data() {
    return {
      imgsArr: [],
      offset: 0,
      limit: 15,
      newGifs: [],
      query: '',
    };
  },
  methods: {
    async useGifs(query) {
      this.offset = 0;
      this.query = query;
      this.imgsArr = await getData(query, this.limit, this.offset);
    },
    async addMoreGifs() {
      this.newGifs = await getData(this.query, this.limit, this.offset);
      this.imgsArr = this.imgsArr.concat(this.newGifs);
      this.offset += this.limit;
    },
  },
  async mounted(query) {
    this.imgsArr = await getData(query, this.limit, this.offset);
    this.offset = this.limit;
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  background: url('https://4kwallpapers.com/images/wallpapers/macos-big-sur-apple-layers-fluidic-colorful-dark-wwdc-2020-5120x2880-1432.jpg');
  background-size: cover;
  background-position: center;
}

.masonry-wrapper {
  margin-top: 70px;
  overflow: hidden;
  .vue-masonry-gallery-scroll {
    background: rgba(16, 18, 27, 0.4);
    border-radius: 14px;
    backdrop-filter: blur(20px);
    max-width: 97%;
    margin: 0 auto;
    height: 90vh !important;
    overflow: hidden;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
}
.homepage {
  height: 100vh;
  overflow-y: hidden !important;
}
</style>
