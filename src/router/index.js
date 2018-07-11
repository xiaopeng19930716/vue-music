import Vue from 'vue';
import Router from 'vue-router';
import Recommend from '@/components/recommend/recommend';
import Singer from '@/components/singer/singer';
import Rank from '@/components/rank/rank';
import Search from '@/components/search/search';
// 子路由
import SingerDetail from '@/components/singer-detail/singer-detail';
import RecommendDesc from '@/components/recommend-desc/recommend-desc';
import RankDetail from '@/components/rank-detail/rank-detail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    }, {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: RecommendDesc
        }
      ]
    }, {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    }, {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: RankDetail
        }
      ]
    }, {
      path: '/search',
      component: Search,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    }
  ]
});
