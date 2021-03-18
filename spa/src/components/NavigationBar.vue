<template>
  <div class="header">
    <input
      v-model="searchTerms"
      @keyup.enter="getSearch"
      @input="getSearch"
      placeholder="Search a gif"
      type="text"
    />
    <!-- <a href="#" class="button" @click="getGifs"
      ><span class="gradient"></span><img src="../assets/img/search.svg" alt=""
    /></a> -->
  </div>
</template>

<script>
import { debounce } from 'lodash';

export default {
  name: 'NavigationBar',
  data() {
    return {
      searchTerms: '',
    };
  },
  methods: {
    getGifs() {
      this.$emit('getGifs', this.searchTerms);
    },
    getSearch() {
      debounce(this.getGifs, 800)();
    },
  },
};
</script>
<style lang="scss">
.header {
  position: fixed;
  width: 100%;
  background: rgba(113, 119, 144, 0.25);
  backdrop-filter: blur(20px);
  height: 60px;
  display: flex;
  z-index: 9;
  top: 0;
  justify-content: space-between;
  box-shadow: 0px 6px 8px 0px rgba(34, 60, 80, 0.2);

  input {
    height: 100%;
    width: 100%;
    display: block;
    background-color: rgba(18, 18, 18, 0.5);
    border: none;
    padding: 0 54px;

    color: #fff;
    font-weight: 600;
    &::-webkit-input-placeholder {
      color: #fff;
    }
    &:focus {
      border: none;
      outline: none;
    }
  }
  // .button {
  //   -webkit-transition: all 0.5s ease-in-out 0s;
  //   transition: all 0.5s ease-in-out 0s;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   width: 70px;
  //   max-width: 70px;
  //   max-height: 60px;
  //   overflow: hidden;
  //   position: relative;
  //   -webkit-transform: translatez(0);
  //   transform: translatez(0);
  //   text-decoration: none;

  //   .gradient {
  //     display: block;
  //     position: absolute;
  //     top: 0;
  //     right: 0;
  //     width: 100%;
  //     height: 800%;
  //     bottom: auto;
  //     margin: auto;
  //     z-index: -1;
  //     background: #6086c1;
  //     background: -moz-linear-gradient(45deg, #6086c1 0%, #efe097 70%, #d66466 100%);
  //     background: -webkit-gradient(
  //       linear,
  //       left bottom,
  //       right top,
  //       color-stop(0%, #6086c1),
  //       color-stop(70%, #efe097),
  //       color-stop(100%, #d66466)
  //     );
  //     background: -webkit-linear-gradient(45deg, #6086c1 0%, #efe097 70%, #d66466 100%);
  //     background: -o-linear-gradient(45deg, #6086c1 0%, #efe097 70%, #d66466 100%);
  //     background: -ms-linear-gradient(45deg, #6086c1 0%, #efe097 70%, #d66466 100%);
  //     background: linear-gradient(45deg, #6086c1 0%, #efe097 70%, #d66466 100%);
  //     filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#6086c1", endColorstr="#d66466",GradientType=1 );
  //     -webkit-transition: all 0.5s ease-in-out 0s;
  //     transition: all 0.5s ease-in-out 0s;
  //     -webkit-transform: translateY(0%);
  //     -moz-transform: translateY(0%);
  //     transform: translateY(0%);
  //   }
  //   &:hover {
  //     .gradient {
  //       -webkit-transform: translateY(-85%);
  //       -moz-transform: translateY(-85%);
  //       transform: translateY(-85%);
  //     }
  //   }
  // }
}
</style>
