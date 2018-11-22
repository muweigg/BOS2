<template>
  <div class="container-fluid create-template">

    <div class="row m-b-15">
      <div class="col-12">
        <h4 class="page-title">自定义报告模板</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-md-8">
        <div class="card-box">
          <div class="row">
            <div class="col-12">
              <input type="text" placeholder="请输入报告名称" class="form-control">
            </div>
          </div>
          <div class="row m-t-10">
            <div class="col-12">
              <div class="summernote">
              </div>
            </div>
          </div>
          <div class="row m-t-10">
            <div class="col-12">
              <div d-f ai-c jc-sb>
                <b-btn variant="secondary" v-b-modal.save-template-modal>保存为模板</b-btn>
                <b-btn variant="primary">预览</b-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="card">
          <div class="card-header">
            <div class="row">
              <div class="col-12">选择插入类型</div>
            </div>
          </div>
          <div class="card-body" d-f fxd-c>
            <a href="javascript:">同比增长型</a>
            <a href="javascript:">同期增长型</a>
            <a href="javascript:">XXXX 模型</a>
          </div>
        </div>
      </div>
    </div>

    <b-modal id="save-template-modal" title="保存模板" ref="saveTemplateModal">
      <div class="row">
        <div class="col-12">

          <div class="form-group form-inline">
            <label>我的模板：</label>
            <input type="text" class="form-control">
          </div>

        </div>
      </div>
      <template slot="modal-footer">
        <b-btn @click="$refs.saveTemplateModal.hide()">取消</b-btn>
        <b-btn variant="primary">确定</b-btn>
      </template>
    </b-modal>

  </div>
</template>

<script>
  export default {
    name: 'create-template',
    data () {
      return {}
    },
    mounted () {
      $('.summernote').summernote({
        height: 350,
        minHeight: null,
        maxHeight: null,
        focus: false
      });
    }
  }
</script>

<style scoped lang="scss" src="./create-template.scss"></style>