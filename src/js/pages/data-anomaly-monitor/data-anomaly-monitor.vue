<template>

  <div class="container-fluid data-anomaly-monitor">

    <div class="row m-b-15">
      <div class="col-12">
        <h4 class="page-title">数据异常监测记录</h4>
      </div>
    </div>

    <div class="card-box form-inline">
      <div class="form-group m-r-10">
        <label>数据处理地：</label>
        <b-form-select v-model="selected" :options="[
          {value: 0, text: '工业总产值'}
        ]"></b-form-select>
      </div>

      <div class="form-group m-r-10">
        <label>创建时间：</label>
        <b-form-input type="date"/>
        &nbsp;-&nbsp;
        <b-form-input type="date"/>
      </div>

      <div class="form-group">
        <b-btn variant="primary" class="m-r-5"><i class="md-search"></i>查询</b-btn>
        <b-btn variant="primary" class="m-r-5"><i class="md-refresh"></i>重置</b-btn>
        <b-btn variant="primary" v-b-modal.settings-modal><i class="md-settings"></i>设置</b-btn>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <table ref="responsiveDatatable" class="table table-bordered dt-responsive nowrap" cellspacing="0" width="100%">
          <thead>
          <tr>
            <th data-priority="1">序号</th>
            <th data-priority="1">异常指标名称</th>
            <th data-priority="2">监测参数</th>
            <th data-priority="2">异常时段</th>
            <th data-priority="3">实际指标</th>
            <th data-priority="4">记录时间</th>
            <th data-priority="1">操作</th>
          </tr>
          </thead>
          <tbody v-cloak>
          <tr v-for="i in 35">
            <td><span class="co-name">{{ i }}</span></td>
            <td>异常指标名称 {{ i }}</td>
            <td>月度数据，总量，<，5000（值）</td>
            <td>2018-08</td>
            <td>{{ i }}%</td>
            <td>2018-09-12 14:22</td>
            <td class="text-center">
              <a href="javascript:" v-b-modal.anomaly-detail-modal>查看详情</a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <b-modal id="anomaly-detail-modal" title="异常详情"
             ref="anomalDetailModal" size="lg">
      <div class="row">
        <div class="col-4">指标名称：工业总产值</div>
        <div class="col-8">监测条件：季度数据，同比增长，<，10%（值）</div>
      </div>
      <div class="row m-t-10">
        <div class="col-4">异常时段：2018-Q3</div>
        <div class="col-4">实际指标：6%</div>
        <div class="col-4">记录时间：2018-08-08 14:14:14</div>
      </div>
      <div class="row m-t-10">
        <div class="col-12">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>序号</th>
                <th>企业名称</th>
                <th>增长总额</th>
                <th>实际指标</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 10">
                <td>{{ i }}</td>
                <td>企业 {{ i }}</td>
                <td>{{ i }}%</td>
                <td>{{ i }}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <template slot="modal-footer">
        <b-btn variant="primary">下载</b-btn>
      </template>
    </b-modal>

    <b-modal id="settings-modal" title="数据指标异常监测设置"
             ref="settingsModal" size="xl">
      <div class="row" ai-s>
        <div class="col-3" d-f fxd-c fxw-n>
          <h4 class="header-title">可选指标</h4>
          <div class="card" fx-auto>
            <div class="card-body">
              <ul>
                <li v-for="i in 20"><a href="javascript:">渝北区固定投资增长总额 {{ i }}</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-9" d-f fxd-c fxw-n>
          <h4 class="header-title list-title">
            <div class="row">
              <div class="col-2">已选指标</div>
              <div class="col-2">数据时段</div>
              <div class="col-2">数据类型</div>
              <div class="col-1">比较符</div>
              <div class="col-2">比较对象</div>
              <div class="col-2"></div>
              <div class="col-1" d-f jc-c>操作</div>
            </div>
          </h4>
          <div class="card" fx-auto>
            <div class="card-body">
              <div class="row" v-for="i in 5">
                <div class="col-2" d-f ai-c>渝北区固定投资增长总额</div>
                <div class="col-2">
                  <b-form-select :options="[
                    {value: 0, text: '月度数据'}
                  ]"/>
                </div>
                <div class="col-2">
                  <b-form-select :options="[
                    {value: 0, text: '总量'}
                  ]"/>
                </div>
                <div class="col-1">
                  <b-form-select :options="[
                    {value: 0, text: '<'}
                  ]"/>
                </div>
                <div class="col-2">
                  <b-form-select :options="[
                    {value: 0, text: '值'}
                  ]"/></div>
                <div class="col-2">
                  <b-form-input/>
                </div>
                <div class="col-1" d-f ai-c jc-c><a href="javascript:">删除</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <template slot="modal-footer">
        <b-btn @click="$refs.settingsModal.hide()">取消</b-btn>
        <b-btn variant="primary">确定</b-btn>
      </template>
    </b-modal>


  </div>
  
</template>

<script>
  import language from '../../config/datatables.language';

  export default {
    name: 'data-anomaly-monitor',
    data () {
      return {
        selected: 0,
      }
    },
    mounted () {
      const $dom = $(this.$refs.responsiveDatatable);
      $dom.DataTable({
        lengthChange: false,
        searching: false,
        language: language
      });
    },
  }
</script>

<style scoped lang="scss" src="./data-anomaly-monitor.scss"></style>