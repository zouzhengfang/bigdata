
<template >
<div class="daohang">
<mu-appbar title="">
  <mu-flat-button label="合肥" class="demo-flat-button" labelPosition="before" icon="keyboard_arrow_down" slot="left" secondary/>
  <mu-text-field icon="search" class="appbar-search-field"  hintText="小龙虾" fullWidth />
  <mu-flat-button color="white" label="" icon="crop_free" slot="right"/>
</mu-appbar>
</div>
</template>
<script>
export default {
  name: "daohang",
  data() {
    return {
      msg: "this is about me page !"
    };
  }
};
</script>
<style lang="less">
.appbar-search-field{
  color: #FFF;
  margin-bottom: 0;
  &.focus-state {
    color: #FFF;
  }
  .mu-text-field-hint {
    color: fade(#FFF, 54%);
  }
  .mu-text-field-input {
    color: #FFF;
  }
  .mu-text-field-focus-line {
    background-color: #FFF;
  }
}
.left{
    width:0.6rem ;
    margin-left: 0.02rem;
}
</style>
