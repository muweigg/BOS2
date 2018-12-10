<template>
  <div class="container-fluid form-database">

    <div class="row m-b-15">
      <div class="col-12">
        <h4 class="page-title">{{ title }} 表单数据库</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="card-box">
          <div class="row">
            <div class="col-12 col-sm-2" d-f ai-c>
              <h6>表单名称：xxx 表</h6>
            </div>
            <div class="col-12 col-sm-7">
              <div class="row">
                <div class="col-12 col-sm-6 col-lg-3">
                  <div class="form-group m-b-0">
                    <label class="m-r-10">A字段: </label>
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                  <div class="form-group m-b-0">
                    <label class="m-r-10">B字段: </label>
                    <b-form-input type="text"></b-form-input>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                  <div class="form-group m-b-0">
                    <label class="m-r-10">C字段: </label>
                    <b-form-input type="text"></b-form-input>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                  <div class="form-group m-b-0">
                    <label class="m-r-10">D字段: </label>
                    <b-form-input type="text"></b-form-input>
                  </div>
                </div>
              </div>
              <div class="row m-t-10" v-if="isExpand">
                <div class="col-12 col-sm-6 col-lg-3">
                  <div class="form-group m-b-0">
                    <label class="m-r-10">E字段: </label>
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                  <div class="form-group m-b-0">
                    <label class="m-r-10">F字段: </label>
                    <b-form-input type="text"></b-form-input>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                  <div class="form-group m-b-0">
                    <label class="m-r-10">G字段: </label>
                    <b-form-input type="text"></b-form-input>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3">
                  <div class="form-group m-b-0">
                    <label class="m-r-10">H字段: </label>
                    <b-form-input type="text"></b-form-input>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-3" d-f ai-c jc-fe>
              <div class="form-group form-inline m-b-0" jc-fe>
                <b-btn as-fe @click="isExpand = !isExpand">
                  <i class="fa m-r-5" :class="{ 'fa-minus': isExpand, 'fa-plus': !isExpand }"></i>更多查询
                </b-btn>
                <b-btn class="m-l-10"><i class="md-search"></i>查询</b-btn>
                <b-btn class="m-l-10"><i class="md-refresh"></i>重置</b-btn>
                <b-btn class="m-l-10">导出</b-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <table ref="responsiveDatatable" class="table table-bordered table-bordered dt-responsive nowrap">
          <thead>
            <tr>
              <th data-priority="1">序号</th>
              <th data-priority="2">企业名称</th>
              <th data-priority="2">营业税收</th>
              <th data-priority="3">创建人名称</th>
              <th data-priority="3">创建日期</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 20" :key="i">
              <td>{{i}}</td>
              <td>企业名称 {{i}}</td>
              <td>{{i}}</td>
              <td>非典</td>
              <td>2018-12-10</td>
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
    name: 'form-database',
    data () {
      return {
        title: 'XXXX',
        isExpand: false,
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

<style scoped lang="scss" src="./form-database.scss"></style>