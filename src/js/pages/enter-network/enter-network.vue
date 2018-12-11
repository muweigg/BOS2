<template>

  <div class="container-fluid custom-form">

    <div class="row m-b-15">
      <div class="col-12">
        <h4 class="page-title">新入网企业记录</h4>
      </div>
    </div>

    <div class="card-box form-inline">
      <div class="form-group m-b-0 m-r-10">
        <div class="input-group">
          <div class="input-group-prepend">
            <button class="btn btn-primary waves-effect waves-light dropdown-toggle" type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">组织机构代码
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">组织机构代码</a>
              <a class="dropdown-item" href="#">企业详细名称</a>
            </div>
          </div>
          <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
        </div>
      </div>

      <div class="form-group m-r-10">
        <label>数据处理地：</label>
        <b-form-select v-model="selected" :options="[
          {value: 0, text: '大竹林街道'}
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
        <b-btn variant="primary"><i class="md-refresh"></i>重置</b-btn>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <table ref="responsiveDatatable" class="table table-bordered table-bordered dt-responsive nowrap" cellspacing="0" width="100%">
          <thead>
          <tr>
            <th data-priority="1">序号</th>
            <th data-priority="2">企业名称</th>
            <th data-priority="2">阻止机构代码</th>
            <th data-priority="3">数据处理地</th>
            <th data-priority="4">入网时间</th>
            <th data-priority="1">操作</th>
          </tr>
          </thead>
          <tbody v-cloak>
          <tr v-for="i in 35">
            <td><span class="co-name">{{ i }}</span></td>
            <td>企业 {{ i }}</td>
            <td>阻止机构代码 XXXX {{ i }}</td>
            <td>大竹林街道（500112014002</td>
            <td>2018-09-12 14:22</td>
            <td class="text-center">
              <a href="javascript:">查看</a>
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
    name: 'enter-network',
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

<style scoped lang="scss" src="./enter-network.scss"></style>