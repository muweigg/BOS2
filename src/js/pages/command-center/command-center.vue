<template>
  <b-container class="command-center">
    <div id="bmap" v-b-modal.analysis-modal></div>
    <h4 class="title"><img src="../../../assets/images/logo.png" alt="">渝北区数据指挥中心平台</h4>

    <div class="left-data-area">
      <div class="l-t-1" :class="{ 'mw-expand': isLt1Open }">
        <h5 v-show="!isLt1Open">
          <strong @click="isLt1Open = true">
            <i class="fa fa-plus"></i>
          </strong>
        </h5>
        <h5 v-show="isLt1Open">
          <strong @click="isLt1Open = false">
            <i class="fa fa-minus"></i>
            指标轮询
          </strong>
          <span class="pos-center fz16 c2">财政收入总值（亿元）</span>
          <i class="fa fa-sort-amount-desc fz16 c2"></i>
        </h5>
        <div class="text-center" v-show="isLt1Open">（2018-01——2018-08）</div>
        <div class="list-wrap" v-show="isLt1Open">
          <ul>
            <li>
              <div class="num">1</div>
              <div class="region">两江新区</div>
              <div class="c-progress">
                <div style="width: 100%;"></div>
              </div>
              <div class="count">1414.44</div>
            </li>
            <li>
              <div class="num">2</div>
              <div class="region">创新经济走廊</div>
              <div class="c-progress">
                <div style="width: 90%;"></div>
              </div>
              <div class="count">900.44</div>
            </li>
            <li>
              <div class="num">3</div>
              <div class="region">两江新区</div>
              <div class="c-progress">
                <div style="width: 80%;"></div>
              </div>
              <div class="count">800.44</div>
            </li>
            <li>
              <div class="num">4</div>
              <div class="region">两江新区</div>
              <div class="c-progress">
                <div style="width: 70%;"></div>
              </div>
              <div class="count">700.44</div>
            </li>
            <li>
              <div class="num">5</div>
              <div class="region">两江新区</div>
              <div class="c-progress">
                <div style="width: 60%;"></div>
              </div>
              <div class="count">600.44</div>
            </li>
            <li>
              <div class="num">6</div>
              <div class="region">两江新区</div>
              <div class="c-progress">
                <div style="width: 50%;"></div>
              </div>
              <div class="count">500.44</div>
            </li>
            <li>
              <div class="num">7</div>
              <div class="region">两江新区</div>
              <div class="c-progress">
                <div style="width: 40%;"></div>
              </div>
              <div class="count">400.44</div>
            </li>
            <li>
              <div class="num">8</div>
              <div class="region">两江新区</div>
              <div class="c-progress">
                <div style="width: 30%;"></div>
              </div>
              <div class="count">300.44</div>
            </li>
            <li>
              <div class="num">9</div>
              <div class="region">两江新区</div>
              <div class="c-progress">
                <div style="width: 20%;"></div>
              </div>
              <div class="count">200.44</div>
            </li>
            <li>
              <div class="num">10</div>
              <div class="region">两江新区</div>
              <div class="c-progress">
                <div style="width: 10%;"></div>
              </div>
              <div class="count">100.44</div>
            </li>
          </ul>
        </div>
        <div class="tools">
          <!-- 系统时间 -->
          <div class="system-time">
            系统时间：{{ systemTime }}
          </div>

          <!-- 行业分布 -->
          <div class="distribution">
            行业分布
            <ul>
              <li v-b-modal.industrial-distribution-modal>农、林、牧、渔业</li>
              <li v-b-modal.industrial-distribution-modal>采矿业</li>
              <li v-b-modal.industrial-distribution-modal>制造业</li>
              <li v-b-modal.industrial-distribution-modal>住宿和餐饮业</li>
              <li v-b-modal.industrial-distribution-modal>金融业</li>
              <li v-b-modal.industrial-distribution-modal>房地产业</li>
              <li v-b-modal.industrial-distribution-modal>租赁和商务服务</li>
              <li>...</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="l-t-2" :class="{ 'mw-expand': isLt2Open }">
        <h5 v-show="!isLt2Open">
          <strong @click="isLt2Open = true">
            <i class="fa fa-plus"></i>
          </strong>
        </h5>
        <h5 v-show="isLt2Open">
          <strong @click="isLt2Open = false">
            <i class="fa fa-minus"></i>
            经济指标曲线
          </strong>
          <span>亿元</span>
        </h5>
        <div ref="economicIndexChart" class="line-chart" v-show="isLt2Open"></div>
      </div>
    </div>

    <div class="right-data-area">
      <div class="r-t-1" :class="{ 'mw-expand': isRt1Open }">
        <h5 v-show="!isRt1Open">
          <strong @click="isRt1Open = true">
            <i class="fa fa-plus"></i>
          </strong>
        </h5>
        <h5 v-show="isRt1Open">
          <strong @click="isRt1Open = false">
            <i class="fa fa-minus"></i>
            行业分类：木耳物流园
          </strong>
        </h5>
        <div ref="industryClassificationChart" class="pie-chart" v-show="isRt1Open"></div>

        <div class="tools">
          <!-- 天气 -->
          <div class="weather">
            <img src="../../../assets/images/temp/weather.png" width="30" alt="">
            多云，17&#8451;/25&#8451;
            <div class="weather-detail">
              <div>东南风，4级</div>
              <div>PM 2.5 22pg/m&sup2;</div>
              <div>空气质量优</div>
              <div d-f>
                <div ta-c fx-auto>
                  <div>明天</div>
                  <div>17&#8451;-25&#8451;</div>
                  <img src="../../../assets/images/temp/weather.png" width="30" alt="">
                </div>
                <div ta-c fx-auto>
                  <div>后天</div>
                  <div>17&#8451;/25&#8451;</div>
                  <img src="../../../assets/images/temp/weather.png" width="30" alt="">
                </div>
              </div>
            </div>
          </div>

          <!-- 指标分布 -->
          <div class="distribution">
            指标分布
            <ul>
              <li v-b-modal.index-distribution-modal>国内生产总值</li>
              <li v-b-modal.index-distribution-modal>固定投资总额</li>
              <li v-b-modal.index-distribution-modal>财政收入</li>
              <li v-b-modal.index-distribution-modal>贷款总额</li>
              <li>...</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="r-t-2" :class="{ 'mw-expand': isRt2Open }">
        <h5 v-show="!isRt2Open">
          <strong @click="isRt2Open = true">
            <i class="fa fa-plus"></i>
          </strong>
        </h5>
        <h5 v-show="isRt2Open">
          <strong @click="isRt2Open = false">
            <i class="fa fa-minus"></i>
            指标雷达：木耳物流园VS两江新区
          </strong>
        </h5>
        <div ref="indexRadarChart" class="radar-chart" v-show="isRt2Open"></div>
      </div>

      <div class="r-t-3" :class="{ 'mw-expand': isRt3Open }">
        <h5 v-show="!isRt3Open">
          <strong @click="isRt3Open = true">
            <i class="fa fa-plus"></i>
          </strong>
        </h5>
        <h5 v-show="isRt3Open">
          <strong @click="isRt3Open = false">
            <i class="fa fa-minus"></i>
            核心指标增长
          </strong>
        </h5>
        <div class="list-wrap" v-show="isRt3Open">
          <table>
            <thead>
            <th>指标名称</th>
            <th>指标月（18/10）</th>
            <th>同比增长</th>
            </thead>
            <tbody>
            <tr>
              <td>工业生产总值</td>
              <td>1643.45 亿</td>
              <td><i class="ion-arrow-up-a fz20"></i> 14.54%</td>
            </tr>
            <tr>
              <td>固定投资总值</td>
              <td>589.35 亿</td>
              <td><i class="ion-arrow-up-a fz20"></i> 12.24%</td>
            </tr>
            <tr>
              <td>财务收入总值</td>
              <td>283.21 亿</td>
              <td><i class="ion-arrow-down-a fz20"></i> 5.67%</td>
            </tr>
            <tr>
              <td>居民消费支出总值</td>
              <td>756.32 亿</td>
              <td><i class="ion-arrow-down-a fz20"></i> 2.43%</td>
            </tr>
            </tbody>
          </table>
        </div>

        <!--进入系统-->
        <div class="goto-system" v-b-modal.goto-system-modal>
          <span>进入<br>系统</span>
        </div>
      </div>
    </div>

    <div class="bottom">
      <a href="javascript:">
        <img src="../../../assets/images/temp/news.png" alt="">
        新闻新闻新闻新闻新闻新闻新闻新闻
      </a>
      <a href="javascript:">
        <img src="../../../assets/images/temp/news.png" alt="">
        新闻新闻新闻新闻新闻新闻新闻新闻
      </a>
      <a href="javascript:">
        <img src="../../../assets/images/temp/news.png" alt="">
        新闻新闻新闻新闻新闻新闻新闻新闻
      </a>
      <a href="javascript:">
        <img src="../../../assets/images/temp/news.png" alt="">
        新闻新闻新闻新闻新闻新闻新闻新闻
      </a>
      <a href="javascript:">
        <img src="../../../assets/images/temp/news.png" alt="">
        新闻新闻新闻新闻新闻新闻新闻新闻
      </a>

      <!--自定义区域-->
      <div class="custom-area">
        自定义区域
        <i class="fa fa-mouse-pointer"></i>
        <i class="fa fa-caret-up" @click="openCustomArea"></i>

        <ul v-show="isCustomAreaOpen" v-cloak>
          <li>自定义模块 <a href="javascript:" class="pull-right">删除</a></li>
          <li>自定义模块 <a href="javascript:" class="pull-right">删除</a></li>
          <li>自定义模块 <a href="javascript:" class="pull-right">删除</a></li>
        </ul>
      </div>
    </div>

    <b-modal id="industrial-distribution-modal" size="lg" hide-footer title="房地产行业 -- 2018 年度"
             @shown="initRegionalDistributionChart">
      <div class="row">
        <div class="col-2">企业总数</div>
        <div class="col-2">78,956</div>
        <div class="col-2">就业人员（万人）</div>
        <div class="col-2">78,788</div>
        <div class="col-2">生产总值（亿元）</div>
        <div class="col-2">17,559,25</div>
      </div>
      <div class="row m-t-15">
        <div class="col-12">
          <b-tabs>
            <b-tab title="区域分布" active>
              <div class="row">
                <div class="col-12">
                  <div ref="regionalDistributionChart" class="bar-chart"></div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <table class="table">
                    <thead>
                    <tr>
                      <th>指标</th>
                      <th>值（亿元）</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>
                        <label>
                          房地产施工面积（万平方米）
                          <input type="checkbox" class="pull-right">
                        </label>
                      </td>
                      <td>17,559.25</td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          商品住宅施工面积（万平方米）
                          <input type="checkbox" class="pull-right">
                        </label>
                      </td>
                      <td>17,559.25</td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          办公楼施工面积（万平方米）
                          <input type="checkbox" class="pull-right">
                        </label>
                      </td>
                      <td>17,559.25</td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          商业营业用房新开工面积（万平方米）
                          <input type="checkbox" class="pull-right">
                        </label>
                      </td>
                      <td>17,559.25</td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          房地产竣工面积（万平方米）
                          <input type="checkbox" class="pull-right">
                        </label>
                      </td>
                      <td>17,559.25</td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          商品住宅竣工面积（万平方米）
                          <input type="checkbox" class="pull-right">
                        </label>
                      </td>
                      <td>17,559.25</td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          办公楼竣工面积（万平方米）
                          <input type="checkbox" class="pull-right">
                        </label>
                      </td>
                      <td>17,559.25</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </b-modal>

    <b-modal id="index-distribution-modal" size="lg" hide-footer title="国内生产总值 -- 2018年度"
             @shown="initIndexDistributionChart">
      <div class="row">
        <div class="col-2">企业总数</div>
        <div class="col-2">78,956</div>
        <div class="col-2">就业人员（万人）</div>
        <div class="col-2">78,788</div>
        <div class="col-2">生产总值（亿元）</div>
        <div class="col-2">17,559,25</div>
      </div>
      <div class="row m-t-15">
        <div class="col-12">
          <b-tabs>
            <b-tab title="区域分布" active>
              <div class="row">
                <div class="col-12">
                  <div ref="indexDistributionChart" class="bar-chart"></div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <table class="table">
                    <thead>
                    <tr>
                      <th>指标</th>
                      <th>值（亿元）</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>
                        <label>
                          建筑业
                          <input type="checkbox" class="pull-right">
                        </label>
                      </td>
                      <td>17,559.25</td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          采矿业
                          <input type="checkbox" class="pull-right">
                        </label>
                      </td>
                      <td>17,559.25</td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          农、林、牧、渔业
                          <input type="checkbox" class="pull-right">
                        </label>
                      </td>
                      <td>17,559.25</td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          制造业
                          <input type="checkbox" class="pull-right">
                        </label>
                      </td>
                      <td>17,559.25</td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          房地产竣工面积（万平方米）
                          <input type="checkbox" class="pull-right">
                        </label>
                      </td>
                      <td>17,559.25</td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          金融业
                          <input type="checkbox" class="pull-right">
                        </label>
                      </td>
                      <td>17,559.25</td>
                    </tr>
                    <tr>
                      <td>
                        <label>
                          房地产业
                          <input type="checkbox" class="pull-right">
                        </label>
                      </td>
                      <td>17,559.25</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </b-modal>

    <b-modal id="analysis-modal" size="lg" hide-footer title="两江新区 -- 2018年度"
             @shown="initEconomicAccountingChart">
      <div class="row">
        <div class="col-2">企业总数</div>
        <div class="col-2">78,956</div>
        <div class="col-2">就业人员（万人）</div>
        <div class="col-2">78,788</div>
        <div class="col-2">生产总值（亿元）</div>
        <div class="col-2">17,559,25</div>
      </div>
      <div class="row">
        <div class="col-2">固定资产投资（亿元）</div>
        <div class="col-2">78,956</div>
        <div class="col-2">财政收入（亿元</div>
        <div class="col-2">78,788</div>
      </div>
      <div class="row m-t-15">
        <div class="col-12">
          <b-tabs v-model="tabIndex">
            <b-tab title="经济核算" class="d-b3-1" active>
              <div class="row">
                <div class="col-3">
                  <ul>
                    <li class="active"><a href="javascript:">地区生产总值</a></li>
                    <li><a href="javascript:">地区生产总值比重</a></li>
                    <li><a href="javascript:">地区生产总值指数（上年=100）</a></li>
                    <li><a href="javascript:">第三次产业贡献率</a></li>
                    <li><a href="javascript:">三次产业拉动力</a></li>
                    <li><a href="javascript:">收入法地区生产总值</a></li>
                    <li><a href="javascript:">支出法地区生产总值</a></li>
                    <li><a href="javascript:">居民消费支出</a></li>
                  </ul>
                </div>
                <div class="col-9">
                  <div class="row">
                    <div class="col-12">
                      <i class="fa fa-bar-chart-o"></i>
                      <span class="pull-right tools">
                        <a href="javascript:">打印</a>
                        <a href="javascript:">保存</a>
                      </span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div ref="economicAccountingChart" class="bar-chart"></div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <table class="table">
                        <thead>
                        <tr>
                          <th>指标</th>
                          <th>值（亿元）</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>
                            <label>
                              户籍总户数（万户）
                              <input type="checkbox" class="pull-right">
                            </label>
                          </td>
                          <td>17,559.25</td>
                        </tr>
                        <tr>
                          <td>
                            <label>
                              户籍总人口（万人）
                              <input type="checkbox" class="pull-right">
                            </label>
                          </td>
                          <td>17,559.25</td>
                        </tr>
                        <tr>
                          <td>
                            <label>
                              男性户籍人口（万人）
                              <input type="checkbox" class="pull-right">
                            </label>
                          </td>
                          <td>17,559.25</td>
                        </tr>
                        <tr>
                          <td>
                            <label>
                              女性户籍人口（万人）
                              <input type="checkbox" class="pull-right">
                            </label>
                          </td>
                          <td>17,559.25</td>
                        </tr>
                        <tr>
                          <td>
                            <label>
                              农业人口（万人）
                              <input type="checkbox" class="pull-right">
                            </label>
                          </td>
                          <td>17,559.25</td>
                        </tr>
                        <tr>
                          <td>
                            <label>
                              非农业人口（万人）
                              <input type="checkbox" class="pull-right">
                            </label>
                          </td>
                          <td>17,559.25</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>
            <b-tab title="行业分析" class="d-b3-2">
              <div class="row">
                <div class="col-3">
                  <ul>
                    <li class="active"><a href="javascript:">行业分析概览</a></li>
                    <li><a href="javascript:">农、林、牧、渔业</a></li>
                    <li><a href="javascript:">采矿业</a></li>
                    <li><a href="javascript:">制造业</a></li>
                    <li><a href="javascript:">电力、燃气及水的生产和供应</a></li>
                    <li><a href="javascript:">建筑业</a></li>
                    <li><a href="javascript:">交通运输、仓储和邮政</a></li>
                    <li><a href="javascript:">信息传输、计算机服务和软件业</a></li>
                    <li><a href="javascript:">批发和零售</a></li>
                    <li><a href="javascript:">住宿和餐饮业</a></li>
                    <li><a href="javascript:">金融业</a></li>
                    <li><a href="javascript:">房地产业</a></li>
                    <li><a href="javascript:">租赁和商务服务</a></li>
                    <li><a href="javascript:">科学研究、技术服务和地址勘察</a></li>
                    <li><a href="javascript:">水利、环境和公共设施管理</a></li>
                    <li><a href="javascript:">居民服务和其他服务</a></li>
                    <li><a href="javascript:">教育</a></li>
                    <li><a href="javascript:">卫生、社会保障和社会福利</a></li>
                    <li><a href="javascript:">文化、体育和娱乐业</a></li>
                    <li><a href="javascript:">公共管理和社会组织</a></li>
                  </ul>
                </div>
                <div class="col-9">
                  <div class="row">
                    <div class="col-12">
                      <i class="fa fa-bar-chart-o"></i>
                      <span class="pull-right tools">
                            <a href="javascript:">打印</a>
                            <a href="javascript:">保存</a>
                          </span>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>
            <b-tab title="基础指标分析" class="d-b3-3">
              <div class="row">
                <div class="col-3">
                  <div ref="baseIndexAnalysisTree" class="tree-link"></div>
                </div>
                <div class="col-9">
                  <div class="row">
                    <div class="col-12">
                      <i class="fa fa-bar-chart-o"></i>
                      <span class="pull-right tools">
                        <a href="javascript:">打印</a>
                        <a href="javascript:">保存</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </b-modal>

    <b-modal id="goto-system-modal" hide-header hide-footer>
      <div class="row">
        <div class="col-4">
          <router-link to="./admin/custom-query-template">
            <i class="fa fa-bar-chart-o"></i><br>
            自定义查询模板
          </router-link>
        </div>
        <div class="col-4">
          <router-link to="./admin/custom-statistics-template">
            <i class="fa fa-bar-chart-o"></i><br>
            自定义统计模板
          </router-link>
        </div>
        <div class="col-4">
          <router-link to="./admin/custom-report-template">
            <i class="fa fa-bar-chart-o"></i><br>
            自定义报告模板
          </router-link>
        </div>
        <div class="col-4">
          <router-link to="./admin/integrated-data-query">
            <i class="fa fa-bar-chart-o"></i><br>
            综合数据查询
          </router-link>
        </div>
        <div class="col-4">
          <router-link to="./admin/enterprise-data-query">
            <i class="fa fa-bar-chart-o"></i><br>
            企业数据查询
          </router-link>
        </div>
      </div>
    </b-modal>

  </b-container>
</template>

<script>
  import {timer, Subject} from 'rxjs';
  import {map, takeUntil} from 'rxjs/operators';
  import * as Echarts from 'echarts';
  import BMapConfig from './custom_map_config.json';

  const destroyManager = new Subject();

  const methods = {
    // 百度地图
    initBMap () {
      const map = new BMap.Map("bmap");
      const point = new BMap.Point(116.404, 39.915);
      map.centerAndZoom(point, 15);
      map.setMapStyleV2({styleJson: BMapConfig});
      return map;
    },
    // 经济指标曲线
    async initEconomicIndexChart() {
      // TODO Ajax get
      const data = await import('./chart-data-1.json');
      const option = {
        textStyle: {
          color: '#fff',
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: data.legend,
          textStyle: {
            color: '#fff',
          },
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
          splitLine: false,
        },
        series: data.series
      };
      const dom = this.$refs.economicIndexChart;
      const myChart = Echarts.init(dom);
      myChart.setOption(option, true);
      return myChart;
    },
    // 行业分类饼状图
    async initIndustryClassificationChart() {
      // TODO Ajax get
      const data = await import('./chart-data-2.json');
      const option = {
        textStyle: {
          color: '#fff',
        },
        title: {
          text: '工业总产值（亿元）',
          x: 'center',
          textStyle: {
            color: '#fff',
          },
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 10,
          top: 20,
          bottom: 20,
          data: data.legendData,
          selected: data.selected,
          textStyle: {
            color: '#fff',
          },
        },
        series: [{
          // name: '姓名',
          type: 'pie',
          radius: '55%',
          center: ['40%', '50%'],
          data: data.seriesData,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
          lableLine: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
        }]
      };
      const dom = this.$refs.industryClassificationChart;
      const myChart = Echarts.init(dom);
      myChart.setOption(option, true);
      return myChart;
    },
    // 指标雷达
    async initIndexRadarChart() {
      // TODO Ajax get
      const data = await import('./chart-data-3.json');
      const option = {
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 10,
          top: 20,
          bottom: 20,
          textStyle: {
            color: '#fff',
          },
          data: data.legend
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#fff',
              // backgroundColor: '#999',
              // borderRadius: 3,
              // padding: [3, 5]
            }
          },
          indicator: data.indicator,
          radius: '70%',
          center: ['50%', '50%'],
        },
        series: data.series
      };
      const dom = this.$refs.indexRadarChart;
      const myChart = Echarts.init(dom);
      myChart.setOption(option, true);
      return myChart;
    },
    // 区域分布柱状图
    async initRegionalDistributionChart() {
      // TODO Ajax get
      const data = await import('./chart-data-4.json');
      const option = {
        textStyle: {
          color: '#fff',
        },
        color: ['#5b9bd5', '#ed7d31', '#00b050'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          textStyle: {
            color: '#fff',
          },
          data: data.legend
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: data.xAxisData
        }],
        yAxis: [{
          type: 'value'
        }],
        series: data.series
      };
      const dom = this.$refs.regionalDistributionChart;
      const myChart = Echarts.init(dom);
      myChart.setOption(option, true);
      return myChart;
    },
    // 指标分布柱状图
    async initIndexDistributionChart() {
      // TODO Ajax get
      const data = await import('./chart-data-5.json');
      const option = {
        textStyle: {
          color: '#fff',
        },
        color: ['#5b9bd5', '#ed7d31', '#00b050'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          textStyle: {
            color: '#fff',
          },
          data: data.legend
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: data.xAxis
        }],
        yAxis: [{
          type: 'value'
        }],
        series: data.series
      };
      const dom = this.$refs.indexDistributionChart;
      const myChart = Echarts.init(dom);
      myChart.setOption(option, true);
      return myChart;
    },
    // 经济核算柱状图
    async initEconomicAccountingChart() {
      const data = await import('./chart-data-6.json');
      const option = {
        textStyle: {
          color: '#fff',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          // bottom: -50,
          textStyle: {
            color: '#fff',
            fontSize: 10,
          },
          data: data.legend,
          x: 'left',
          // y: 'bottom'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          show: false,
          data: []
        }],
        yAxis: [{
          type: 'value',
          splitLine: false,
        }],
        series: data.series
      };
      const dom = this.$refs.economicAccountingChart;
      const myChart = Echarts.init(dom);
      myChart.setOption(option, true);
      return myChart;
    },
    initBaseIndexAnalysisTree() {
      const data = [
        {
          text: '人口',
          state: {
            opened: true,
            selected: true
          },
          children: [
            '户籍总户数总人口',
            '户籍人口自然变动',
            '1%人口抽样调查',
            '人口普查基本情况',
            '人口年龄结构和抚养比',
            '计划生育',
          ]
        },
        '就业',
        '人民生活',
        '价格指数',
        '要素市场',
      ];
      const dom = this.$refs.baseIndexAnalysisTree;
      $(dom).jstree({core: {data: data}});
    },
    openCustomArea(e) {
      e.stopPropagation();
      this.isCustomAreaOpen = !this.isCustomAreaOpen;
    }
  };

  const watch = {};

  export default {
    name: 'command-center',
    data() {
      return {
        systemTime: '',
        isLt1Open: true,
        isLt2Open: true,
        isRt1Open: true,
        isRt2Open: true,
        isRt3Open: true,
        isCustomAreaOpen: '',
        tabIndex: 0,
      }
    },
    beforeDestroy () {
      destroyManager.next(true);
    },
    mounted() {
      timer(0, 1000).pipe(
        map(count => new Date().format('MM-dd hh:mm:ss')),
        takeUntil(destroyManager)
      ).subscribe(time => this.systemTime = time);

      this.initEconomicIndexChart();
      this.initIndustryClassificationChart();
      this.initIndexRadarChart();
      this.initBaseIndexAnalysisTree();

      this.$nextTick(() => this.initBMap());
    },
    methods: methods,
    watch: watch
  }
</script>

<style scoped lang="scss" src="./command-center.scss"></style>