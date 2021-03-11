<template>
  <div>
    <v-app>
      <v-app-bar clipped-left clipped-right fixed app orange>
        <v-row>
          <v-col cols="12" class="pa-5">
            <v-layout class="container">
              <v-toolbar-title>
                <router-link tag="a" :to="{ name: 'index' }">
                  ADMIN
                </router-link>
                |
                <v-btn dark large outlined color="primary" @click.prevent="logout">
                  <v-icon>mdi-close-circle-outline</v-icon>
                </v-btn>
              </v-toolbar-title>
              <v-spacer />
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
    </v-app>
  </div>
</template>

<script>
import axios from "axios";

export default {
  middleware: ["auth","clearValidationErrors"],

  data() {
    return {};
  },
  methods: {
    logout(){
      this.$auth.logout()
    }
  }
};
</script>
