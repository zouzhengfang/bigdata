<template>
    <div class="lunbo">
        <van-swipe :autoplay="3000" >
             <van-swipe-item v-for="(image, index) in images" :key="index">
               <img v-lazy="image" class="lunboqi" />
                </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import { Lazyload } from "vant";
Vue.use(Swipe).use(SwipeItem);
Vue.use(Lazyload, {
  preLoad: 1.3,
  error: "dist/error.png",
  loading: "dist/loading.gif",
  attempt: 1
});
export default {
  name: "lunbo",
  data() {
    return {
      images: ["/static/imgs/1.png", "/static/imgs/1.png"]
    };
  }
};
</script>
<style>
.lunboqi {
  height: 1.2rem;
}
</style>

