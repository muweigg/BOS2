import Vue from 'vue'
import VueRouter from 'vue-router'

// 指挥中心
import CommandCenter from '../pages/command-center/command-center.vue'

// Admin root
import Admin from '../pages/Admin.vue'

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

// 自定义报告模板
import CustomReportTemplate from '../pages/custom-report-template/custom-report-template.vue'

// 创建模板
import CreateTemplate from '../pages/create-template/create-template.vue'

const commandCenter = {path: '/', component: CommandCenter};

const enterpriseDataQuery = {path: 'enterprise-data-query', component: EnterpriseDataQuery};
const industryDataQuery = {path: 'industry-data-query', component: IndustryDataQuery};
const sameContrast = {path: 'same-contrast', component: SameContrast};
const differentContrast = {path: 'different-contrast', component: DifferentContrast};

const integratedDataQuery = {path: 'integrated-data-query', component: IntegratedDataQuery};

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

    customReportTemplate,
    createTemplate
  ]
};

const routes = [
  commandCenter, admin,
  {path: '*', redirect: '/'}
];

Vue.use(VueRouter);

export default new VueRouter({routes})
