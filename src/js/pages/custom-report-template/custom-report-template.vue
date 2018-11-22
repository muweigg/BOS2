<template>
  <div class="container-fluid custom-report-template">

    <div class="row m-b-15">
      <div class="col-12">
        <h4 class="page-title">自定义报告模板</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="filter card-box">
          <form action="" class="form">
            <div class="form-inline">

              <div class="form-group">
                <label for="reportName">报告名称：</label>
                <input type="text" id="reportName" class="form-control">
              </div>

              <div class="form-group">
                <label for="reportTemplate">报告模板：</label>
                <select name="" id="reportTemplate" class="form-control">
                  <option value="0">全部</option>
                  <option value="1">固定投资增长型</option>
                  <option value="2">房地产开发和销售模型</option>
                  <option value="3">社区消费品种额增长模型</option>
                </select>
              </div>

              <div class="form-group">
                <label for="reportStatus">报告模板：</label>
                <select name="" id="reportStatus" class="form-control">
                  <option value="0">全部</option>
                  <option value="1">草稿</option>
                  <option value="2">已生成</option>
                </select>
              </div>

              <div class="form-group">
                <label for="reportTime">生成时间：</label>
                <input type="date" id="reportTime" class="form-control">
                &nbsp;&nbsp;-&nbsp;&nbsp;
                <input type="date" id="reportTime2" class="form-control">
              </div>

              <div class="form-group">
                <button class="btn btn-primary"><i class="md-search"></i>查询</button>
                <button class="btn btn-primary"><i class="md-refresh"></i>重置</button>
                <button class="btn btn-primary" v-b-modal.create-template-modal><i class="md-add"></i>创建</button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <table ref="responsiveDatatable" class="table table-bordered table-bordered dt-responsive nowrap" cellspacing="0" width="100%">
          <thead>
          <tr>
            <th data-priority="1">序号</th>
            <th data-priority="2">报告名称</th>
            <th data-priority="3">报告模板</th>
            <th data-priority="2">状态</th>
            <th data-priority="4">生成时间</th>
            <th data-priority="3">创建者</th>
            <th data-priority="1">操作</th>
          </tr>
          </thead>
          <tbody v-cloak>
          <tr v-for="i in 35">
            <td><span class="co-name">{{ i }}</span></td>
            <td>渝北区固定投资增长报告 {{ i }}</td>
            <td>固定投资增长模型</td>
            <td>已生成</td>
            <td>2018-09-12 14:22</td>
            <td>张三</td>
            <td class="text-center">
              <a href="javascript:">查看</a>
              <a href="create-template.html">编辑</a>
              <a href="javascript:">下载</a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <b-modal id="create-template-modal" title="创建报告"
             ref="createTemplateModal">
      <div class="row">
        <div class="col-12">
          <h5>选择要创建的模板类型：</h5>
        </div>
      </div>
      <div class="row m-t-10 m-b-10">
        <div class="col-12">

          <div class="form-group form-inline">
            <label>我的模板：</label>
            <b-dd text="选择加载模板">
              <b-dd-item>自定义模板1 <b-btn size="sm" class="m-l-10">删除</b-btn></b-dd-item>
              <b-dd-item>自定义模板2 <b-btn size="sm" class="m-l-10">删除</b-btn></b-dd-item>
              <b-dd-item>自定义模板3 <b-btn size="sm" class="m-l-10">删除</b-btn></b-dd-item>
            </b-dd>
          </div>

          <div class="form-group form-inline">
            <label>模板副本：</label>
            <b-dd text="选择加载模板">
              <b-dd-item>模板副本1 <b-btn size="sm" class="m-l-10">删除</b-btn></b-dd-item>
              <b-dd-item>模板副本2 <b-btn size="sm" class="m-l-10">删除</b-btn></b-dd-item>
              <b-dd-item>模板副本3 <b-btn size="sm" class="m-l-10">删除</b-btn></b-dd-item>
            </b-dd>
          </div>
        </div>
      </div>
      <template slot="modal-footer">
        <b-btn @click="$refs.createTemplateModal.hide()">取消</b-btn>
        <b-btn variant="primary" @click="gotoCreateTemplate">确定</b-btn>
      </template>
    </b-modal>

  </div>
</template>

<script>
  import language from '../../config/datatables.language';

  export default {
    name: 'custom-report-template',
    data () {
      return {}
    },
    mounted () {
      const $dom = $(this.$refs.responsiveDatatable);
      $dom.DataTable({
        lengthChange: false,
        searching: false,
        language: language
      });
    },
    methods: {
      gotoCreateTemplate () {
        this.$router.push('/admin/create-template');
      }
    }
  }
</script>

<style scoped lang="scss" src="./custom-report-template.scss"></style>