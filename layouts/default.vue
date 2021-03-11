<template>
  <div>
    <v-app dark>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list>
          <router-link tag="a" class="tr-lasts-posts" :to="{ name: 'login' }">
            <v-list-item class="my-n2">Login</v-list-item>
          </router-link>
          <router-link
            tag="a"
            class="tr-lasts-posts"
            v-for="(item, i) in menuCategories"
            :key="i"
            :to="{ name: 'category', params: { category: item.slug } }"
          >
            <v-list-item class="my-n2">{{ item.title }}</v-list-item>
          </router-link>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar fixed app>
        <v-row>
          <v-col cols="12" class="pa-5">
            <v-layout class="container">
              <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
              <v-toolbar-title>
                <router-link tag="a" :to="{ name: 'index' }">
                  OGIRASSOL
                </router-link>
              </v-toolbar-title>
              <v-spacer />
              <v-btn class="mx-2" fab dark small outlined color="primary">
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn class="mx-2" fab dark small outlined color="primary">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn class="mx-2" fab dark large outlined color="primary">
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </v-layout>
          </v-col>
        </v-row>
      </v-app-bar>

      <v-main>
        <v-container>
          <nuxt />
        </v-container>
      </v-main>

      <v-footer>
        <div class="container">
          <v-card flat tile class="indigo lighten-1 white--text text-center">
            <v-card-text>
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4 white--text"
                icon
              >
                <v-icon size="24px">
                  {{ icon }}
                </v-icon>
              </v-btn>
            </v-card-text>

            <v-card-text class="white--text pt-0">
              Texto do Rodapé da Página
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
              {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </v-card-text>
          </v-card>
        </div>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import axios from "axios";
import { publicApi, adminApi, googleStorage, urlSite } from "@/global";



export default {
  data() {
    return {
      categories: [],
      menuCategories: [],
      classDivHeader: "",
      dateStart: "",
      dateFinish: "",

      drawer: false,

      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },

  computed: {
    imageHeight() {
      console.log(this.$nuxt.$vuetify.breakpoint.name);
      switch (this.$nuxt.$vuetify.breakpoint.name) {
        case "xs":
          return (this.classDivHeader = "pa-0 pb-n2 pl-5 pr-5");
        case "sm":
          return (this.classDivHeader = "pa-0 pb-n2 pl-5 pr-5");
        case "md":
          return (this.classDivHeader = "pa-0 pb-n2");
        case "lg":
          return (this.classDivHeader = "pa-0 pb-n2");
        case "xl":
          return (this.classDivHeader = "pa-0 pb-n2");
      }
    },
  },

  methods: {
    loadCategoriesAndBlogs() {
      axios
        .get(`${publicApi}/categories`)
        .then((res) => {
          this.categories = res.data.map((c) => {
            return c.id, c.title;
          });
          this.menuCategories = res.data;
        });
    },

    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
    },
    allowedDates: (val) => parseInt(val.split("-")[2], 10) % 2 === 0,
  },

  mounted() {
    this.loadCategoriesAndBlogs();

    var dateNow = new Date();
    var year = dateNow.getFullYear();
    var month = dateNow.getMonth() + 1;
    var day = dateNow.getDate();
    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;
    this.dateFinish = year + "-" + month + "-" + day;
  },
};
</script>
