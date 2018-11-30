import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import {UPDATE_URL} from '../store/mutation-types'

const beforeEnter = (to, from, next) => {
  if (!store.state.isLogged) {
    store.commit(UPDATE_URL, to.path);
    next('/');
  } else next();
};

// 指挥中心
import CommandCenter from '../pages/command-center/command-center.vue'

// Admin root
import Admin from '../pages/Admin.vue'

// Login
import Login from '../pages/login/login.vue'

// 企业数据查询
import EnterpriseDataQuery from '../pages/enterprise-data-query/enterprise-data-query.vue'

// 行业数据查询
import IndustryDataQuery from '../pages/industry-data-query/industry-data-query.vue'

// 同公司不同时段对比
import SameContrast from '../pages/same-contrast/same-contrast.vue'

// 不同公司同时段对比详情
import DifferentContrast from '../pages/different-contrast/different-contrast.vue'

// 综合数据查询
import IntegratedDataQuery from '../pages/integrated-data-query/integrated-data-query.vue'

// 自定义查询结果
import CustomQueryResult from '../pages/custom-query-result/custom-query-result.vue'

// 自定义查询模板
import CustomQueryTemplate from '../pages/custom-query-template/custom-query-template.vue'

// 自定义统计模板
import CustomStatisticsTemplate from '../pages/custom-statistics-template/custom-statistics-template.vue'

// 自定义报告模板
import CustomReportTemplate from '../pages/custom-report-template/custom-report-template.vue'

// 创建模板
import CreateTemplate from '../pages/create-template/create-template.vue'

const login = {path: '/', component: Login};

const commandCenter = {path: '/command-center', component: CommandCenter, beforeEnter};

const enterpriseDataQuery = {path: 'enterprise-data-query', component: EnterpriseDataQuery};
const industryDataQuery = {path: 'industry-data-query', component: IndustryDataQuery};
const sameContrast = {path: 'same-contrast', component: SameContrast};
const differentContrast = {path: 'different-contrast', component: DifferentContrast};

const integratedDataQuery = {path: 'integrated-data-query', component: IntegratedDataQuery};
const customQueryResult = {path: 'custom-query-result', component: CustomQueryResult};

const customQueryTemplate = {path: 'custom-query-template', component: CustomQueryTemplate};
const customStatisticsTemplate = {path: 'custom-statistics-template', component: CustomStatisticsTemplate};
const customReportTemplate = {path: 'custom-report-template', component: CustomReportTemplate};
const createTemplate = {path: 'create-template', component: CreateTemplate};

const admin = {
  path: '/admin',
  component: Admin,
  children: [
    enterpriseDataQuery,
    industryDataQuery,
    sameContrast,
    differentContrast,

    integratedDataQuery,
    customQueryResult,

    customQueryTemplate,
    customStatisticsTemplate,
    customReportTemplate,
    createTemplate
  ],
  beforeEnter
};

const routes = [
  login,
  commandCenter,
  admin,
  {path: '*', redirect: '/'}
];

Vue.use(VueRouter);

export default new VueRouter({routes});
