<template>
  <div>
    <!-- <p v-if="$fetchState.pending">Buscando montanhas...</p>
    <p v-else-if="$fetchState.error">Ocorreu um erro:(</p>
    <div v-else> -->

    <!-- <h1>{{ registers }}</h1>
    <hr />
    <h1>titleCategory: {{ titleCategory }}</h1>
    <h1>loadMore: {{ loadMore }}</h1>
    <h1>page: {{ page }}</h1>
    <h1>lastPage: {{ lastPage }}</h1> -->

    <h1>{{ titleCategory }}</h1>

    <router-link
      tag="a"
      class="ma-3"
      v-for="(item, i) in registers"
      :key="i"
      :to="{
        name: 'category-post',
        params: { category: item.slugCategory, post: item.slug },
      }"
    >
      <h3 class="my-n2">{{ item.titleadapter }}</h3>
    </router-link>

    <hr />
    <v-btn
      color="primary"
      block
      large
      outlined
      dark
      @click="getLoadMore()"
      class="mt-5 mb-7"
      v-if="loadMore"
      >CARREGAR MAIS</v-btn
    >

    <!-- </div> -->
  </div>
</template>

<script>
import axios from "axios";
import { publicApi, adminApi } from "@/global";

export default {
  scrollToTop: true,

  async asyncData({ params, $axios }) {
    var response = await $axios.get(`/public/${params.category}`);
    let titleCategory = response.data.data[0].category;
    let slugCategory = response.data.data[0].slugCategory;
    let registers = response.data.data;
    let lastPage = response.data.last_page;
    let loadMore = lastPage <= 1 ? false : true;
    let page = 1;

    return {
      registers: registers,
      titleCategory: titleCategory,
      slugCategory: slugCategory,
      page: page,
      lastPage: lastPage,
      loadMore: loadMore,
    };
  },

  head() {
    return {
      title: this.titleCategory + " - O GIRASSOL",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Portal de notícias de Palmas e Tocantins com os mais variados temas: política, eleições, palmas, concursos, opinião, esporte e demais assuntos no site com mais de 20 anos de atividade.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Jornal Girassol, Palmas, Notícias do Tocantins, Notícias de Palmas, Política, Portal CT, T1 Notícias, Concursos, Vestibular Tocantins, Eleições, Concursos Tocantins, Concurso PM",
        },
      ],
    };
  },

  methods: {
    getLoadMore() {
      this.page++;
      axios
        .get(`${publicApi}/${this.slugCategory}?page=${this.page}`)
        .then((res) => {
          this.registers = this.registers.concat(res.data.data);
          this.loadMore = this.page >= res.data.last_page ? false : true;
        });
    },
  },
};
</script>