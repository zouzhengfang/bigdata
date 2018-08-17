<template >
<div>
<daohang></daohang>
<lunbo></lunbo>
<lanmu></lanmu>
<shop></shop>
</div>
</template>
<script>
import daohang from './daohang'
import lunbo from './lunbo'
import lanmu from './lanmu'
import shop from './shop'
export default {
  name: "home",
  components: {
    daohang,
    lunbo,
    lanmu,
    shop
  }
};
</script>
