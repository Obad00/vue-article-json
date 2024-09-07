<template>
    <div>
      <h1>{{ article.title }}</h1>
      <p>{{ article.body }}</p>
      <button @click="deleteArticle" class="btn btn-danger">Supprimer</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        article: {}
      };
    },
    created() {
      this.fetchArticle();
    },
    methods: {
      fetchArticle() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
          .then(response => {
            this.article = response.data;
          });
      },
      deleteArticle() {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
          .then(() => {
            this.$router.push('/');
          });
      }
    }
  };
  </script>
  