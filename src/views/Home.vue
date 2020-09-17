<template>
  <div>
    <input type="text" v-model="search" placeholder="search " />
    <ul style="list-style-type: none">
      <li v-for="article in searcharticles" :key="article">
        <div class="box">
          <marquee>
            <h1>{{article.title }} {{ar}}</h1>
          </marquee>
          <div class="s">
            <img v-if="article.urlToImage" :src="article.urlToImage" alt />
            <i v-else class="fas fa-image"></i>
          </div>
          <p>
            {{article.content }}
            <button @click="navTo(article.url)">
              <div class="link">CLICK HERE</div>
            </button>
          </p>

          {{article.publishedAt}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      ar: ".",
      search: ""
    };
  },

  methods: {
    navTo(url) {
      window.open(url);
    }
  },
  created() {
    this.$http
      .get(
        "https://newsapi.org/v2/top-headlines?country=US&apiKey=f0375434d3374745a2a6e8c39416dc7d"
      )
      .then(response => {
        this.articles = response.data.articles;
      });
  },
  computed: {
    searcharticles: function() {
      return this.articles.filter(article => {
        return article.title.match(this.search);
      });
    }
  }
};
</script>

<style>
.sea {
  right: 0;
}
</style>
