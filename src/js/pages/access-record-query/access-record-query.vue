<template>

  <div class="container-fluid access-record-query">

    <div class="row m-b-15">
      <div class="col-12">
        <h4 class="page-title">访问记录查询</h4>
      </div>
    </div>

    <div class="card-box form-inline">
      <div class="form-group m-r-10">
        <label>用户姓名：</label>
        <b-form-input />
      </div>

      <div class="form-group m-r-10">
        <label>功能节点：</label>
        <b-form-select :options="[
          {value: 0, text: '全部'},
          {value: 1, text: '数据异常监测记录'}
        ]" />
      </div>

      <div class="form-group m-r-10">
        <label>访问时间：</label>
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
            <th data-priority="1">用户姓名</th>
            <th data-priority="2">访问功能节点</th>
            <th data-priority="2">访问时间</th>
          </tr>
          </thead>
          <tbody v-cloak>
          <tr v-for="i in 35">
            <td><span class="co-name">{{ i }}</span></td>
            <td>非典 {{ i }}</td>
            <td>{{ i % 2 === 0 ? '角色管理' : '部门管理' }}</td>
            <td>2018-12-24  14:35</td>
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
    name: 'access-record-query',
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

<style scoped lang="scss" src="./access-record-query.scss"></style>