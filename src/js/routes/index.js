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

// 新入网企业记录
import EnterNetwork from '../pages/enter-network/enter-network.vue'

// 退网企业记录
import ExitNetwork from '../pages/exit-network/exit-network.vue'

// 数据异常监测记录
import DataAnomalyMonitor from '../pages/data-anomaly-monitor/data-anomaly-monitor.vue'

// 自建表单管理
import CustomForm from '../pages/custom-form/custom-form.vue'

// 表单数据库
import FormDatabase from '../pages/form-database/form-database.vue'

// 表单数据库
import FormUploader from '../pages/form-uploader/form-uploader.vue'

// 表单数据库
import DocumentUploader from '../pages/document-uploader/document-uploader.vue'

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

// 资讯配置
import InformationConfiguration from '../pages/information-configuration/information-configuration.vue'

// 访问记录查询
import AccessRecordQuery from '../pages/access-record-query/access-record-query.vue'

const login = {path: '/', component: Login};

const commandCenter = {path: '/command-center', component: CommandCenter, beforeEnter};

const enterpriseDataQuery = {path: 'enterprise-data-query', component: EnterpriseDataQuery};
const industryDataQuery = {path: 'industry-data-query', component: IndustryDataQuery};
const sameContrast = {path: 'same-contrast', component: SameContrast};
const differentContrast = {path: 'different-contrast', component: DifferentContrast};
const enterNetwork = {path: 'enter-network', component: EnterNetwork};
const exitNetwork = {path: 'exit-network', component: ExitNetwork};
const dataAnomalyMonitor = {path: 'data-anomaly-monitor', component: DataAnomalyMonitor};

const integratedDataQuery = {path: 'integrated-data-query', component: IntegratedDataQuery};
const customQueryResult = {path: 'custom-query-result', component: CustomQueryResult};

const customForm = {path: 'custom-form', component: CustomForm};
const formDatabase = {path: 'form-database', component: FormDatabase};
const formUploader = {path: 'form-uploader', component: FormUploader};
const documentUploader = {path: 'document-uploader', component: DocumentUploader};
const customQueryTemplate = {path: 'custom-query-template', component: CustomQueryTemplate};
const customStatisticsTemplate = {path: 'custom-statistics-template', component: CustomStatisticsTemplate};
const customReportTemplate = {path: 'custom-report-template', component: CustomReportTemplate};
const createTemplate = {path: 'create-template', component: CreateTemplate};

const informationConfiguration = {path: 'information-configuration', component: InformationConfiguration};
const accessRecordQuery = {path: 'access-record-query', component: AccessRecordQuery};

const admin = {
  path: '/admin',
  component: Admin,
  children: [
    enterpriseDataQuery,
    industryDataQuery,
    sameContrast,
    differentContrast,
    enterNetwork,
    exitNetwork,
    dataAnomalyMonitor,

    integratedDataQuery,
    customQueryResult,

    customForm,
    formDatabase,
    formUploader,
    documentUploader,
    customQueryTemplate,
    customStatisticsTemplate,
    customReportTemplate,
    createTemplate,

    informationConfiguration,
    accessRecordQuery,
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
