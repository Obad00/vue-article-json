<template>
    <div>
      <h1>Liste des Articles</h1>
      <ul>
        <li v-for="article in articles" :key="article.id">
          <router-link :to="'/articles/' + article.id">{{ article.title }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        articles: []
      };
    },
    created() {
      this.fetchArticles();
    },
    methods: {
      fetchArticles() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => {
            this.articles = response.data;
          });
      }
    }
  };
  </script>
  