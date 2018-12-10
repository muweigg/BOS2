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
            <div class="col-12 col-sm-3">
              表单名称：xxx 表
            </div>
            <div class="col-12 col-sm-6"></div>
            <div class="col-12 col-sm-3">
              <div class="form-group form-inline m-b-0" jc-fe>
                <b-btn><i class="md-search"></i>查询</b-btn>
                <b-btn class="m-l-10 m-r-10"><i class="md-refresh"></i>重置</b-btn>
                <b-btn>导出</b-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'form-database',
    data () {
      return {
        title: 'XXXX',
      }
    }
  }
</script>

<style scoped lang="scss" src="./form-database.scss"></style>