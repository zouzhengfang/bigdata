<template>
<div class="lanmu">
  <dl class="list" id="daogou">
        <a>
            <span class="info">
                <strong>我们约吧</strong>
                <small>恋人家人好朋友</small>
            </span>
            <span class="imgbox" data-com="unveil"  style="background: none;"><img src="//p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png" ></span>
        </a>
        <a class="react huilife" href="//i.meituan.com/topic/huilife" gaevent="imt/homepage/homeguide3" rel="nofollow">
            <span class="info">
                <strong>低价超值</strong>
                <small>十元惠生活</small>
            </span>
            <span class="imgbox" data-com="unveil" style="background: none;"><img src="//p0.meituan.net/mmc/a06d0c5c0a972e784345b2d648b034ec9710.jpg" ></span>
        </a>
        <a class="react scense" gaevent="imt/homepage/homeguide4" rel="nofollow">
            <span class="info">
                <strong>聚餐宴请</strong>
                <small>朋友家人常聚聚</small>
            </span>
            <span class="imgbox" data-com="unveil"  style="background: none;"><img src="//p1.meituan.net/mmc/08615b8ae15d03c44cc5eb9bda381cb212714.png" ></span>
        </a>
</dl>
</div>
</template>
<script>
export default {
  name: "lunbo",
  data() {
    return {};
  }
};
</script>

<style lang="css">
dl.list {
  border-top: 1px solid #ddd8ce;
  border-bottom: 1px solid #ddd8ce;
  margin-top: 0.2rem;
  margin-bottom: 0;
  background-color: #fff;
}
#daogou .dd-padding {
  padding: 0.01rem;
  display: -webkit-box;
  overflow: hidden;
  text-align: center;
}
#daogou a {
  float: left;
  margin-top: 0.15rem;
  margin-left: 0.15rem;
  height: 1.3rem;
  width: 1rem;
  min-width: auto;
}
#daogou .info strong {
  display: block;
  color: #55a40f;
  font-size: 0.15rem;
  text-align: center;
}
#daogou .info small {
  display: block;
  text-align: center;
}
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.imgbox img {
  float: left;
  margin-top: 0.01rem;
  top: 0;
  height: 0.7rem;
  width: 1.04rem;
}
</style>
