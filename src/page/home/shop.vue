<template>
<div class="shop">
  <mu-list style="border-top-style:outset;">
    <dt><span>猜你喜欢</span></dt>
    <template v-for="item in list">
     <van-card>
     <div slot="title">
       <strong>{{item.shopname}}</strong>
     </div>
        <div slot="desc">
   {{item.shopdesc}}
       <br>
       <span style="font-size:0.18rem;color:#06c1ae;"> {{item.price}} <mu-badge content="劲爆" secondary slot="right"/></span><del>{{item.msprice}}</del>
       <div style="float:right;text-align:center;">{{item.count}}</div>
     </div>
      <div slot="thumb">
        <img :src="item.imgsrc"/>
     </div>
    </van-card>
    </template>
  </mu-list>
  <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
</div>
</template>
<script>
import Vue from "vue";
import { Card } from "vant";
import { getShopList } from "@/api/shop";
Vue.use(Card);
export default {
  data() {
    return {
      loading: false,
      scroller: null,
      page: 1,
      over: 0
    };
  },
  mounted() {
    let that = this;
    getShopList(1).then(function(response) {
      that.$store.commit("saveShopList", response.data);
    });
    this.scroller = this.$el;
  },
  methods: {
    loadMore() {
      if (this.over == 0) {
        this.loading = true;
        let that = this;
        that.page++;
        getShopList(that.page).then(function(response) {
          if (response.data.length == 0) {
            that.over = 1;
            that.loading = false;
            return;
          }
          that.$store.commit("saveShopList", response.data);
          that.loading = false;
        });
      }
    }
  },
  computed: {
    list: function() {
      return this.$store.state.list;
    }
  }
};
</script>

<style lang="css">
.shop {
  -webkit-overflow-scrolling: touch;
  border: 1px solid #d9d9d9;
}
.van-card {
  border-bottom: 1px solid #ddd8ce;
}
dt {
  border-bottom: 1px solid #ddd8ce;
}
dt span {
  display: block;
  font-size: 0.17rem;
  padding-bottom: 0.1rem;
  color: #333;
  margin-left: 0.14rem;
}
</style>