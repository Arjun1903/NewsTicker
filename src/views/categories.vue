<template>
  <div>
    <h6>
      <button @click="test">BUSINESS</button>
    </h6>
    <h6>
      <button @click="test1">POLITICS</button>
    </h6>
    <h6>
      <button @click="test2">ENTERTAINMENT</button>
    </h6>
    <h6>
      <button @click="test3">SPORTS</button>
    </h6>
    <h6>
      <button @click="test4">TECHNOLOGY</button>
    </h6>
    <h6>
      <button @click="test5">SCIENCE</button>
    </h6>
    <h6>
      <button @click="test6">HEALTH</button>
    </h6>
    <h6>
      <button @click="test7">FASHION</button>
    </h6>
    <h6>
      <button @click="test8">CRIME</button>
    </h6>

    <input type="text" v-model="search" placeholder="search " />
    <ul style="list-style-type: none">
      <li v-for="article in searcharticles" :key="article">
        <div class="box">
          <h1>{{article.title }} {{ar}}</h1>
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
    },
    test: function() {
      this.$http
        .get(
          "https://newsapi.org/v2/everything?q=business&apiKey=f0375434d3374745a2a6e8c39416dc7d"
        )
        .then(response => {
          this.articles = response.data.articles;
        });
    },
    test1: function() {
      this.$http
        .get(
          "https://newsapi.org/v2/everything?q=politics&apiKey=f0375434d3374745a2a6e8c39416dc7d"
        )
        .then(response => {
          this.articles = response.data.articles;
        });
    },
    test2: function() {
      this.$http
        .get(
          "https://newsapi.org/v2/everything?q=entertainment&apiKey=f0375434d3374745a2a6e8c39416dc7d"
        )
        .then(response => {
          this.articles = response.data.articles;
        });
    },
    test3: function() {
      this.$http
        .get(
          "https://newsapi.org/v2/everything?q=sports&apiKey=f0375434d3374745a2a6e8c39416dc7d"
        )
        .then(response => {
          this.articles = response.data.articles;
        });
    },
    test4: function() {
      this.$http
        .get(
          "https://newsapi.org/v2/everything?q=technology&apiKey=f0375434d3374745a2a6e8c39416dc7d"
        )
        .then(response => {
          this.articles = response.data.articles;
        });
    },
    test5: function() {
      this.$http
        .get(
          "https://newsapi.org/v2/everything?q=science&apiKey=f0375434d3374745a2a6e8c39416dc7d"
        )
        .then(response => {
          this.articles = response.data.articles;
        });
    },
    test6: function() {
      this.$http
        .get(
          "https://newsapi.org/v2/everything?q=health&apiKey=f0375434d3374745a2a6e8c39416dc7d"
        )
        .then(response => {
          this.articles = response.data.articles;
        });
    },
    test7: function() {
      this.$http
        .get(
          "https://newsapi.org/v2/everything?q=fashion&apiKey=f0375434d3374745a2a6e8c39416dc7d"
        )
        .then(response => {
          this.articles = response.data.articles;
        });
    },
    test8: function() {
      this.$http
        .get(
          "https://newsapi.org/v2/everything?q=crime&apiKey=f0375434d3374745a2a6e8c39416dc7d"
        )
        .then(response => {
          this.articles = response.data.articles;
        });
    }
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
</style>
