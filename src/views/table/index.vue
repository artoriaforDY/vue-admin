<template>
  <div>table</div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getTableList();
  },
  methods: {
    getTableList() {
      this.$axios
        .get("/api/getTable/index")
        .then(res => {
          console.log("res:", res);
        })
        .catch(error => {
          console.log("error:", error);
        });
    }
  }
};
</script>
<style scoped lang="less">
</style>