<template>
  <div class="container-fluid enterprise-data-query">

    <!-- Page-Title -->
    <div class="row">

      <div class="col-sm-12">

        <div class="pull-right">
          <div class="form-row">
            <div class="form-group">
              <select class="form-control">
                <option value="1">近1月</option>
                <option value="3">近3月</option>
                <option value="6">近半年</option>
              </select>
            </div>
            <div class="form-group m-l-15">
              <button class="btn btn-primary waves-effect waves-light">查询</button>
            </div>
          </div>
        </div>

        <h4 class="page-title">企业数据查询</h4>
      </div>

    </div>

    <div class="row">
      <div class="col-12">


        <div class="card-box table-responsive">

          <table ref="responsiveDatatable" class="table table-bordered table-bordered dt-responsive nowrap"
                 cellspacing="0"
                 width="100%">
            <thead>
            <tr>
              <th data-priority="1">序号</th>
              <th data-priority="1">行业分类</th>
              <th data-priority="2">规模以上企业数</th>
              <th data-priority="3">规模以上企业生产总值（亿元）</th>
              <th data-priority="3">规模以上企业营业收入（亿元）</th>
              <th data-priority="3">规模以上企业税收（亿元）</th>
            </tr>
            </thead>

            <tbody v-cloak>
            <tr v-for="i in 35">
              <th><span class="co-name">{{ i }}</span></th>
              <td><router-link to="./industry-data-query">行业分类 {{ i }}</router-link></td>
              <td>{{ 1000 - i }}</td>
              <td>{{ 1 * i }}</td>
              <td>{{ 1 * i }}</td>
              <td>{{ 1 * i }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import language from '../../config/datatables.language';

  export default {
    name: 'enterprise-data-query',
    mounted() {
      const $dom = $(this.$refs.responsiveDatatable);
      const tableButtons = $dom.DataTable({
        lengthChange: false,
        searching: false,
        buttons: ['copy', 'excel', 'pdf'],
        keys: true,
        language: language,
      });
      const buttons = tableButtons.buttons().container();
      const as = buttons.find('a');
      buttons.addClass('btn-group');
      as.addClass('btn').addClass('btn-secondary');
      const id = this.$refs.responsiveDatatable.id;
      buttons.appendTo(`#${id}_wrapper .col-md-6:eq(0)`);
    }
  }
</script>

<style scoped lang="scss" src="./enterprise-data-query.scss"></style>