<template>
  <div class="container-fluid custom-query-template">

    <div class="row m-b-15">
      <div class="col-12">
        <h4 class="page-title">自定义查询模板</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="templates card-box">
          <h6 class="header-title m-t-0">模板管理 <a href="javascript:" class="pull-right">编辑</a></h6>
          <div class="row m-t-15">
            <div class="col-12 col-sm-6">
              <div class="form-group form-inline m-b-0">
                <label>我的模板：</label>
                <b-dd text="选择加载模板">
                  <b-dd-item>自定义模板1 <b-btn size="sm" class="m-l-10">删除</b-btn></b-dd-item>
                  <b-dd-item>自定义模板2 <b-btn size="sm" class="m-l-10">删除</b-btn></b-dd-item>
                  <b-dd-item>自定义模板3 <b-btn size="sm" class="m-l-10">删除</b-btn></b-dd-item>
                </b-dd>
              </div>
            </div>
            <div class="col-12 col-sm-6">
              <div class="form-group form-inline m-b-0">
                <label>模板副本：</label>
                <b-dd text="选择加载模板">
                  <b-dd-item>模板副本1 <b-btn size="sm" class="m-l-10">删除</b-btn></b-dd-item>
                  <b-dd-item>模板副本2 <b-btn size="sm" class="m-l-10">删除</b-btn></b-dd-item>
                  <b-dd-item>模板副本3 <b-btn size="sm" class="m-l-10">删除</b-btn></b-dd-item>
                </b-dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card-box">
      <div class="conditions">
        <div class="row">

        </div>
      </div>
      <div class="group-by border-top border-secondary">
        <div class="row">
          <div class="col-12">
            <b-form-checkbox v-model="groupBy" button-variant="secondary">123
            </b-form-checkbox>
          </div>
        </div>
      </div>
    </div>

    <div class="card-box">

    </div>

  </div>
</template>

<script>
  export default {
    name: 'custom-query-template',
    data () {
      return {
        groupBy: []
      }
    }
  }
</script>

<style scoped lang="scss" src="./custom-query-template.scss"></style>