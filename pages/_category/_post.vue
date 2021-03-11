<template>
  <div>
      <h1>{{ post.article.category }}</h1>
      <hr />
      <h4>{{ post.article.retracts }}</h4>
      <h1>{{ post.article.title }}</h1>
      <h3>{{ post.article.subtitle }}</h3>

      <hr class="mb-2" />
      <img :src="this.googlePhoto+post.article.image" />

      <hr class="mb-2" />
      
      <!-- <v-btn>#{{ post.tags }}</v-btn> -->
      <v-btn v-for="(item, index) in post.tags" :key="index">#{{ item }}</v-btn>

      <hr class="mt-2 mb-2" />
      <h3 v-for="item in post.relatedNews" :key="item.id">
        #{{ item.titleadapter }}
      </h3>
  </div>
</template>

<script>
import axios from "axios";

export default {
  scrollToTop: true,
  data() {
    return {
      googlePhoto: 'https://storage.googleapis.com/ogirassol/photos/',
      urlSite: 'https://jalapaonews.vercel.app/',
      category: this.$route.params.category,
      slug: this.$route.params.post,
    };
  },
  head() {
    return {
      title: this.post.article.title + ' - O Girassol',
      meta: [
        // { hid: '', name: "og:title", content: this.post.article.title },
        // { hid: '', name: "og:url", content: this.urlSite + this.category + "/" + this.slug },
        // { hid: '', name: "og:description", content: this.post.article.subtitle },
        // { hid: '', name: "og:image", content: this.googlePhoto + this.post.article.image },
        // { hid: '', name: "article:tag", content: this.post.article.tags },
        // { hid: '', name: "og:image:secure_url", content: this.googlePhoto + this.post.article.image },
        // { hid: '', name: "og:image:alt", content: this.post.article.title },
        { hid: 'description', name: "description", content: this.post.article.subtitle },
        { hid: 'keywords', name: "keywords", content: this.post.article.tags },

        { hid: 'og:title', property: "og:title", content: this.post.article.title },
        { hid: 'og:url', property: "og:url", content: this.urlSite + this.category + "/" + this.slug },
        { hid: 'og:description', property: "og:description", content: this.post.article.subtitle },
        { hid: 'og:image', property: "og:image", content: this.googlePhoto + this.post.article.image },
        { hid: 'article:ta', property: "article:tag", content: this.post.article.tags },
        { hid: 'og:image:secure_url', property: "og:image:secure_url", content: this.googlePhoto + this.post.article.image },
        { hid: 'og:image:alt', property: "og:image:alt", content: this.post.article.title },

        { hid: 'twitter:url', name: "twitter:url", content: this.urlSite + this.category + "/" + this.slug },
        { hid: 'twitter:title', name: "twitter:title", content: this.post.article.title },
        { hid: 'twitter:description', name: "twitter:description", content: this.post.article.subtitle },
        { hid: 'twitter:image', name: "twitter:image", content: this.googlePhoto + this.post.article.image },
        { hid: 'twitter:image:alt', name: "twitter:image:alt", content: this.post.article.title },

      ],
    };
  },
  
  async fetch({ store, params }) {
    await store.dispatch("post/fetchPost", [params.category, params.post]);
  },
  
  computed: {
    post() {
      return this.$store.state.post.all.find(
       (post) => post.article.slug == this.slug
      );
    },
  },
  methods: {},


};
</script>