<template>

  <div class="container-fluid information-configuration">

    <div class="row m-b-15">
      <div class="col-12">
        <h4 class="page-title">资讯配置</h4>
      </div>
    </div>

    <div class="card-box form-inline">
      <div class="form-group m-r-10">
        <label>资讯名称：</label>
        <b-form-input />
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
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <table ref="responsiveDatatable" class="table table-bordered dt-responsive nowrap" cellspacing="0" width="100%">
          <thead>
          <tr>
            <th data-priority="1">序号</th>
            <th data-priority="1">资讯名称</th>
            <th data-priority="2">创建时间</th>
            <th data-priority="2">是否展示</th>
            <th data-priority="1">操作</th>
          </tr>
          </thead>
          <tbody v-cloak>
          <tr v-for="i in 35">
            <td><span class="co-name">{{ i }}</span></td>
            <td>资讯名称 {{ i }}</td>
            <td>2018-12-24  14:35</td>
            <td>{{ i % 2 === 0 ? '是' : '否' }}</td>
            <td class="text-center">
              <a href="javascript:">预览</a>
              <a href="javascript:">删除</a>
              <a href="javascript:">取消展示</a>
              <a href="javascript:">加入队列</a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
  
</template>

<script>
  import language from '../../config/datatables.language';

  export default {
    name: 'information-configuration',
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
  }
</script>

<style scoped lang="scss" src="./information-configuration.scss"></style>