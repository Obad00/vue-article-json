import { createRouter, createWebHistory } from 'vue-router';
import ArticleList from '../components/ArticleList.vue';
import ArticleDetail from '../components/ArticleDetail.vue';
import ArticleForm from '../components/ArticleForm.vue';

const routes = [
  { path: '/', name: 'ArticleList', component: ArticleList },
  { path: '/articles/:id', name: 'ArticleDetail', component: ArticleDetail },
  { path: '/add', name: 'AddArticle', component: ArticleForm },
  { path: '/edit/:id', name: 'EditArticle', component: ArticleForm }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
