<template>
  <div class="container-fluid integrated-data-query">

    <b-tabs>
      <b-tab title="标准查询" active>
        <div class="filter card-box">

          <div class="form-row">
            <div class="form-group">
              <div class="radio">
                <input type="radio" id="monthly" :value="0" v-model="queryType" checked>
                <label for="monthly">
                  月度数据
                </label>
              </div>
            </div>
            <div class="form-group">
              <div class="radio">
                <input type="radio" id="quarter" :value="1" v-model="queryType">
                <label for="quarter">
                  季度数据
                </label>
              </div>
            </div>
            <div class="form-group">
              <div class="radio">
                <input type="radio" id="year" :value="2" v-model="queryType">
                <label for="year">
                  年度数据
                </label>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <div class="radio">
                <input type="radio" id="all-yubei" :value="0" v-model="areaType" checked>
                <label for="all-yubei">
                  全渝北区
                </label>
              </div>
            </div>
            <div class="form-group">
              <div class="radio">
                <input type="radio" id="xz" :value="1" v-model="areaType">
                <label for="xz">
                  按行政区
                </label>
              </div>
            </div>
          </div>

          <div class="form-row" v-if="areaType === 1">
            <div class="form-group">
              <div class="checkbox">
                <input id="checkbox0" type="checkbox">
                <label for="checkbox0" class="m-b-0">
                  两江新区
                </label>
              </div>
            </div>
            <div class="form-group">
              <div class="checkbox">
                <input id="checkbox1" type="checkbox">
                <label for="checkbox1" class="m-b-0">
                  兴（石船）工业园区
                </label>
              </div>
            </div>
            <div class="form-group">
              <div class="checkbox">
                <input id="checkbox2" type="checkbox">
                <label for="checkbox2" class="m-b-0">
                  保税港区
                </label>
              </div>
            </div>
            <div class="form-group">
              <div class="checkbox">
                <input id="checkbox3" type="checkbox">
                <label for="checkbox3" class="m-b-0">
                  前沿科技城
                </label>
              </div>
            </div>
            <div class="form-group">
              <div class="checkbox">
                <input id="checkbox4" type="checkbox">
                <label for="checkbox4" class="m-b-0">
                  空港工业区
                </label>
              </div>
            </div>
            <div class="form-group">
              <div class="checkbox">
                <input id="checkbox5" type="checkbox">
                <label for="checkbox5" class="m-b-0">
                  创新经济走廊
                </label>
              </div>
            </div>
            <div class="form-group">
              <div class="checkbox">
                <input id="checkbox6" type="checkbox">
                <label for="checkbox6" class="m-b-0">
                  农业园区
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="card-box" d-f fxd-c fxd-r-sm>
          <div class="query-tree-wrap">
            <div class="query-tree"></div>
          </div>

          <div fx-auto>

            <div class="tools">
              <form action="">
                <div class="row">
                  <div class="form-inline col-12 col-sm-6">
                    <div class="form-group">报表类型：</div>
                    <div class="form-group">
                      <select name="" class="form-control">
                        <option value="0">统计表</option>
                        <option value="1">柱状图</option>
                        <option value="2">饼图</option>
                      </select>
                    </div>

                    <div class="form-group ml-3">时段选择：</div>
                    <div class="form-group">
                      <b-dd text="数据处理">
                        <b-dd-item>2018年2季度</b-dd-item>
                        <b-dd-item>2018年1季度</b-dd-item>
                        <b-dd-item>2017年4季度</b-dd-item>
                        <b-dd-item>2017年3季度</b-dd-item>
                        <div class="dropdown-item">
                          <input type="text" class="form-control" @focus="toggleShowTips" @blur="toggleShowTips">
                          <button class="btn btn-secondary">确认</button>
                          <div class="card-box tips" v-if="isShowTips">
                            <p><span>例：输入格式如下</span></p><p><span>月：201801，201805</span></p><p><span>季：2012A，2012B</span></p><p><span>&nbsp;&nbsp; &nbsp; &nbsp; 2012C，2012D</span></p><p><span>年：2012，2013</span></p><p><span>其他：2013-，last10</span></p>
                          </div>
                        </div>
                      </b-dd>
                    </div>
                  </div>

                  <div class="form-inline col-12 col-sm-6" d-f jc-fe>

                    <b-dd text="数据处理" right>
                      <b-dd-item>新增指标</b-dd-item>
                      <b-dd-item>筛选</b-dd-item>
                      <b-dd-divider></b-dd-divider>
                      <b-dd-item class="submenu">
                        统计
                        <div class="dropdown-menu pull-left">
                          <b-dd-item class="submenu">
                            对行运算
                            <div class="dropdown-menu pull-left">
                              <b-dd-item>SUM求和</b-dd-item>
                              <b-dd-item>x平均值</b-dd-item>
                              <b-dd-item>Co计数</b-dd-item>
                              <b-dd-item>MAX最大值</b-dd-item>
                              <b-dd-item>MIN最小值</b-dd-item>
                            </div>
                          </b-dd-item>
                          <b-dd-divider></b-dd-divider>
                          <b-dd-item>对列运算</b-dd-item>
                        </div>
                      </b-dd-item>
                      <b-dd-divider></b-dd-divider>
                      <b-dd-item>恢复</b-dd-item>
                      <b-dd-item>去除空行空列</b-dd-item>
                    </b-dd>

                    <b-dd text="表格处理" right class="ml-3">
                      <b-dd-item>转置</b-dd-item>
                      <b-dd-item>恢复默认</b-dd-item>
                    </b-dd>

                  </div>

                </div>
              </form>
            </div>

            <table class="table table-striped" v-if="areaType === 0">
              <thead>
              <tr>
                <th></th>
                <th>累计值(亿元)</th>
                <th>累计增长(%)</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>地区生产总值</td>
                <td>15,200</td>
                <td>20</td>
              </tr>
              <tr>
                <td>第一产业增加值</td>
                <td>15,200</td>
                <td>20</td>
              </tr>
              <tr>
                <td>第二产业增加值</td>
                <td>15,200</td>
                <td>20</td>
              </tr>
              <tr>
                <td>工业增加值</td>
                <td>15,200</td>
                <td>20</td>
              </tr>
              <tr>
                <td>第三产业增加值</td>
                <td>15,200</td>
                <td>20</td>
              </tr>
              </tbody>
            </table>

            <table class="table table-striped" v-else>
              <thead>
              <tr>
                <th rowspan="2"></th>
                <th colspan="2">累计值(亿元)</th>
                <th colspan="2">累计增长(%)</th>
              </tr>
              <tr>
                <th>保税港区</th>
                <th>空港工业区</th>
                <th>保税港区</th>
                <th>空港工业区</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>地区生产总值</td>
                <td>18,200</td>
                <td>18,200</td>
                <td>20</td>
                <td>20</td>
              </tr>
              <tr>
                <td>第一产业增加值</td>
                <td>18,200</td>
                <td>18,200</td>
                <td>20</td>
                <td>20</td>
              </tr>
              <tr>
                <td>第二产业增加值</td>
                <td>18,200</td>
                <td>18,200</td>
                <td>20</td>
                <td>20</td>
              </tr>
              <tr>
                <td>工业增加值</td>
                <td>18,200</td>
                <td>18,200</td>
                <td>20</td>
                <td>20</td>
              </tr>
              <tr>
                <td>第三产业增加值</td>
                <td>18,200</td>
                <td>18,200</td>
                <td>20</td>
                <td>20</td>
              </tr>
              </tbody>
            </table>

          </div>
        </div>
      </b-tab>
      <b-tab title="自定义查询">
        <div class="templates card-box">
          <div class="m-t-0 header-title">
            模板管理
            <a href="javascript:" class="pull-right">编辑</a>
          </div>
          <div class="row">
            <div class="col-12">
              <a href="javascript:" class="template">我的自定义查询模板1</a>
              <a href="javascript:" class="template">我的自定义查询模板2</a>
              <a href="javascript:" class="template">我的自定义查询模板3</a>
            </div>
          </div>
        </div>

        <div class="row m-b-15">
          <div class="col-12">
            <h4 class="page-title">
              查询条件自定义
              <div class="pull-right">
                <button class="btn btn-secondary" data-toggle="modal" data-target=".create-template">保存模板</button>
                <router-link to="./custom-query-result" tag="button" class="btn btn-primary">查询数据</router-link>
              </div>
            </h4>
          </div>
        </div>

        <div class="filter card-box">

          <div class="form-row">
            <div class="form-group">
              <div class="radio">
                <input type="radio" id="monthly" :value="0" v-model="queryType" checked>
                <label for="monthly">
                  月度数据
                </label>
              </div>
            </div>
            <div class="form-group">
              <div class="radio">
                <input type="radio" id="quarter" :value="1" v-model="queryType">
                <label for="quarter">
                  季度数据
                </label>
              </div>
            </div>
            <div class="form-group">
              <div class="radio">
                <input type="radio" id="year" :value="2" v-model="queryType">
                <label for="year">
                  年度数据
                </label>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <div class="radio">
                <input type="radio" id="all-yubei" :value="0" v-model="areaType" checked>
                <label for="all-yubei">
                  全渝北区
                </label>
              </div>
            </div>
            <div class="form-group">
              <div class="radio">
                <input type="radio" id="xz" :value="1" v-model="areaType">
                <label for="xz">
                  按行政区
                </label>
              </div>
            </div>
          </div>

          <div class="form-row" v-if="areaType === 1">
            <div class="form-group">
              <div class="checkbox">
                <input id="checkbox0" type="checkbox">
                <label for="checkbox0" class="m-b-0">
                  两江新区
                </label>
              </div>
            </div>
            <div class="form-group">
              <div class="checkbox">
                <input id="checkbox1" type="checkbox">
                <label for="checkbox1" class="m-b-0">
                  兴（石船）工业园区
                </label>
              </div>
            </div>
            <div class="form-group">
              <div class="checkbox">
                <input id="checkbox2" type="checkbox">
                <label for="checkbox2" class="m-b-0">
                  保税港区
                </label>
              </div>
            </div>
            <div class="form-group">
              <div class="checkbox">
                <input id="checkbox3" type="checkbox">
                <label for="checkbox3" class="m-b-0">
                  前沿科技城
                </label>
              </div>
            </div>
            <div class="form-group">
              <div class="checkbox">
                <input id="checkbox4" type="checkbox">
                <label for="checkbox4" class="m-b-0">
                  空港工业区
                </label>
              </div>
            </div>
            <div class="form-group">
              <div class="checkbox">
                <input id="checkbox5" type="checkbox">
                <label for="checkbox5" class="m-b-0">
                  创新经济走廊
                </label>
              </div>
            </div>
            <div class="form-group">
              <div class="checkbox">
                <input id="checkbox6" type="checkbox">
                <label for="checkbox6" class="m-b-0">
                  农业园区
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="card-box" d-f fxd-c fxd-r-sm>
          <div class="query-tree-wrap">
            <div class="query-tree"></div>
          </div>
          <div fx-auto>
            <div class="row">
              <div class="col-6">

                <div class="card">
                  <div class="card-header">
                    <div class="row">
                      <div class="col-12 col-sm-12 col-lg-6">
                        <div class="input-group">
                          <input type="text" class="form-control">
                          <div class="input-group-append">
                            <button class="btn btn-outline-secondary">查询</button>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-sm-12 col-lg-6 text-right m-t-5">
                        当前选中 5 条
                        &nbsp;
                        总共 7 条
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="card-tools">
                      <a href="javascript:">全选</a>
                      &nbsp;&nbsp;&nbsp;
                      <a href="javascript:">反选</a>
                      &nbsp;&nbsp;&nbsp;
                      <a href="javascript:">清空</a>
                    </div>
                    <ul class="list-group m-t-15">
                      <li class="list-group-item">
                        <div class="checkbox">
                          <input id="checkbox0" type="checkbox">
                          <label for="checkbox0" class="m-b-0">
                            第一产业增加值
                          </label>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="checkbox">
                          <input id="checkbox0" type="checkbox">
                          <label for="checkbox0" class="m-b-0">
                            第二产业增加值
                          </label>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="checkbox">
                          <input id="checkbox0" type="checkbox">
                          <label for="checkbox0" class="m-b-0">
                            工业增加值
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>

              <div class="col-6">

                <div class="card">
                  <div class="card-header">
                    <div class="row">
                      <div class="col-12">
                        当前选中 5/7 条
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="card-tools">
                      <a href="javascript:">清空</a>
                      &nbsp;&nbsp;&nbsp;
                      <a href="javascript:">清除为选择项</a>
                    </div>
                    <ul class="list-group m-t-15">
                      <li class="list-group-item">
                        <div class="checkbox">
                          <input id="checkbox0" type="checkbox">
                          <label for="checkbox0" class="m-b-0">
                            第一产业增加值
                          </label>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="checkbox">
                          <input id="checkbox0" type="checkbox">
                          <label for="checkbox0" class="m-b-0">
                            第二产业增加值
                          </label>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="checkbox">
                          <input id="checkbox0" type="checkbox">
                          <label for="checkbox0" class="m-b-0">
                            工业增加值
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </b-tab>
    </b-tabs>

    <div class="modal fade create-template" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel3"
         aria-hidden="true" style="display: none;">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="myLargeModalLabel3">创建模板</h4>
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-12">
                <input type="text" class="form-control" placeholder="请为自定义模板命名">
              </div>
            </div>
            <div class="row m-t-10 m-b-10">
              <div class="col-12">
                <textarea name="" id="" cols="30" rows="10" class="form-control" placeholder="请为自定义添加说明"></textarea>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary">保存</button>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'integrated-data-query',
    data () {
      return {
        queryType: 0,
        areaType: 0,
        isShowTips: false,
      }
    },
    mounted () {
      this.initTree();
    },
    methods: {
      initTree () {

        const queryData = [
          {
            text: '国民经济核算',
            state: {
              opened: true,
              // selected: true
            },
            children: [
              {
                text: '地区生成总值',
                state: {
                  selected: true
                },
              }
            ]
          },
          '能源',
          '国内贸易',
          '利用内资',
          {
            text: '财政',
            children: [
              '财政收入',
              '财政支出',
            ]
          },
          {
            text: '人民生活',
            children: [
              '居民人均可支配收入',
              '常住居民人均可支配收入',
            ]
          },
        ];

        $('.query-tree').jstree({core: { data: queryData }});
      },

      toggleShowTips () {
        this.isShowTips = !this.isShowTips;
      }
    },
  }
</script>

<style scoped lang="scss" src="./integrated-data-query.scss"></style>