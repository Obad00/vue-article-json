<template>
    <div>
      <h1>{{ isEdit ? 'Modifier' : 'Ajouter' }} un Article</h1>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="title" class="form-label">Titre</label>
          <input type="text" id="title" v-model="article.title" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="body" class="form-label">Contenu</label>
          <textarea id="body" v-model="article.body" class="form-control" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">{{ isEdit ? 'Modifier' : 'Ajouter' }}</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        article: {
          title: '',
          body: ''
        },
        isEdit: false
      };
    },
    created() {
      if (this.$route.params.id) {
        this.isEdit = true;
        this.fetchArticle();
      }
    },
    methods: {
      fetchArticle() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
          .then(response => {
            this.article = response.data;
          });
      },
      handleSubmit() {
        if (this.isEdit) {
          axios.put(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`, this.article)
            .then(() => {
              this.$router.push('/');
            });
        } else {
          axios.post('https://jsonplaceholder.typicode.com/posts', this.article)
            .then(() => {
              this.$router.push('/');
            });
        }
      }
    }
  };
  </script>
  