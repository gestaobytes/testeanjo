<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <div class="text-center">
          <h1>DASHBOARD</h1>
        </div>
      </v-col>
    </v-row>
  </div>
</template>



<script>
export default {
  middleware: ["auth"],
  // mixins: [_banners, _calls, _mostAccessed],
  layout: "restrict",
  data() {
    return {
      form: {
        title: "",
        body: "",
      },
    };
  },
};
</script>
