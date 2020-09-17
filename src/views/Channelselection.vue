<template>
  <div>
    <h6>
      <button @click="test">BBC NEWS</button>
    </h6>
    <h6>
      <button @click="test1">GOOGLE NEWS</button>
    </h6>
    <h6>
      <button @click="test2">CBC NEWS</button>
    </h6>
    <h6>
      <button @click="test3">BUSINESS INSIDER</button>
    </h6>
    <h6>
      <button @click="test4">CNBC</button>
    </h6>
    <h6>
      <button @click="test5">GOOGLE NEWS INDIA</button>
    </h6>
    <center>
      <h6>
        <button @click="test6">The SPORT BIBLE</button>
      </h6>
      <h6>
        <button @click="test7">POLITICO</button>
      </h6>
      <h6>
        <button @click="test8">THE TIMES OF INDIA</button>
      </h6>
      <h6>
        <button @click="test9">MSNBC</button>
      </h6>
    </center>

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
    },
    test: function() {
      this.$http
        .get(
          "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f0375434d3374745a2a6e8c39416dc7d"
        )
        .then(response => {
          this.articles = response.data.articles;
        });
    },
    test1: function() {
      this.$http
        .get(
          "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=f0375434d3374745a2a6e8c39416dc7d"
        )
        .then(response => {
          this.articles = response.data.articles;
        });
    },
    test2: function() {
      this.$http
        .get(
          "https://newsapi.org/v2/top-headlines?sources=cbc-news&apiKey=f0375434d3374745a2a6e8c39416dc7d"
        )
        .then(response => {
          this.articles = response.data.articles;
        });
    },
    test3: function() {
      this.$http
        .get(
          "https://newsapi.org/v2/top-headlines?sources=business-insider&apiKey=f0375434d3374745a2a6e8c39416dc7d"
        )
        .then(response => {
          this.articles = response.data.articles;
        });
    },
    test4: function() {
      this.$http
        .get(
          "https://newsapi.org/v2/top-headlines?sources=cnbc&apiKey=f0375434d3374745a2a6e8c39416dc7d"
        )
        .then(response => {
          this.articles = response.data.articles;
        });
    },
    test5: function() {
      this.$http
        .get(
          "https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=f0375434d3374745a2a6e8c39416dc7d"
        )
        .then(response => {
          this.articles = response.data.articles;
        });
    },
    test6: function() {
      this.$http
        .get(
          "https://newsapi.org/v2/top-headlines?sources=the-sport-bible&apiKey=f0375434d3374745a2a6e8c39416dc7d"
        )
        .then(response => {
          this.articles = response.data.articles;
        });
    },
    test7: function() {
      this.$http
        .get(
          "https://newsapi.org/v2/top-headlines?sources=politico&apiKey=f0375434d3374745a2a6e8c39416dc7d"
        )
        .then(response => {
          this.articles = response.data.articles;
        });
    },
    test8: function() {
      this.$http
        .get(
          "https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=f0375434d3374745a2a6e8c39416dc7d"
        )
        .then(response => {
          this.articles = response.data.articles;
        });
    },
    test9: function() {
      this.$http
        .get(
          "https://newsapi.org/v2/top-headlines?sources=msnbc&apiKey=f0375434d3374745a2a6e8c39416dc7d"
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
marquee {
  display: inline-block;
   
}
.box {
  background-color: lightgrey;
  width: 100%;
  border: black;
  padding: 50px;
  margin: 20px;
}
h6 {
  display: inline;
  background: grey;
  border: 2px solid rgba(33, 68, 72, 0.59);
  font-size: 30px;
  margin: 3px;
}
.s {
  right: 0;
  display: grid;
  grid-template-columns: 200px auto 40px;
  grid-template-rows: 100px;
  overflow: hidden;
}
img {
  right: 0;
  max-width: 100%;
  height: auto;
}
.link {
  color: red;
}
</style>