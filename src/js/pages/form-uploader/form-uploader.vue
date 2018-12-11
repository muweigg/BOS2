<template>

  <div class="container-fluid form-uploader">

    <div class="row m-b-15">
      <div class="col-12">
        <h4 class="page-title">表单上传</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="filter card-box">
          <div class="form-inline">

              <div class="form-group">
                <label for="templateType">模板类型：</label>
                <select name="" id="templateType" class="form-control">
                  <option value="0">所有</option>
                </select>
              </div>

              <div class="form-group">
                <label for="uploaderUser">上传人：</label>
                <input type="text" id="uploaderUser" class="form-control">
              </div>

              <div class="form-group">
                <label for="uploaderTime">上传时间：</label>
                <input type="date" id="uploaderTime" class="form-control">
                &nbsp;&nbsp;-&nbsp;&nbsp;
                <input type="date" id="uploaderTime2" class="form-control">
              </div>

              <div class="form-group">
                <button class="btn btn-primary"><i class="md-search"></i>查询</button>
                <button class="btn btn-primary"><i class="md-refresh"></i>重置</button>
                <button class="btn btn-primary" v-b-modal.form-uploader-modal><i class="md-add"></i>上传表单</button>
              </div>

          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <table ref="responsiveDatatable" class="table table-bordered table-bordered dt-responsive nowrap" cellspacing="0" width="100%">
          <thead>
          <tr>
            <th data-priority="1">序号</th>
            <th data-priority="2">表单名称</th>
            <th data-priority="4">表单模板</th>
            <th data-priority="3">数据行数</th>
            <th data-priority="2">上传时间</th>
            <th data-priority="4">上传人</th>
            <th data-priority="1">操作</th>
          </tr>
          </thead>
          <tbody v-cloak>
          <tr v-for="i in 35">
            <td><span class="co-name">{{ i }}</span></td>
            <td>表单 {{ i }}</td>
            <td>模板 {{ i }}</td>
            <td>{{ i }}</td>
            <td>2018-09-12 14:22</td>
            <td>非典 {{ i }}</td>
            <td class="text-center">
              <a href="javascript:" v-b-modal.form-view-modal>查看</a>
              <a href="javascript:">下载</a>
              <a href="javascript:">删除</a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <b-modal id="form-uploader-modal" title="表单上传"
             ref="formUploader">
      <div class="row">
        <div class="col-12">
          <div class="form-group row">
            <label class="col-3 col-form-label">权限角色：</label>
            <div class="col-9">
              <div class="row">
                <div class="col-12">
                  <b-form-select v-model="selectedForm" :options="options"/>
                </div>
                <div class="col-12">
                  <a href="javascript:" class="pull-right">下载该表单模板</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="form-group row">
            <label class="col-3 col-form-label">上传表单：</label>
            <div class="col-9">
              <input type="file" name="" class="form-control">
            </div>
          </div>
        </div>
      </div>
      <template slot="modal-footer">
        <b-btn @click="$refs.formUploader.hide()">取消</b-btn>
        <b-btn variant="primary">确定</b-btn>
      </template>
    </b-modal>

    <b-modal id="form-view-modal" title="表单查看"
             ref="formView" size="xl">
      <div class="row">
        <div class="col-12">
          <table class="table table-bordered" cellspacing="0" width="100%">
            <thead>
            <tr>
              <th colspan="6">调查单位基本情况表</th>
            </tr>
            <tr>
              <th>序号</th>
              <th>企业名称</th>
              <th>行业代码</th>
              <th>营业税收</th>
              <th>创建人名称</th>
              <th>创建日期</th>
            </tr>
            </thead>
            <tbody v-cloak>
            <tr v-for="i in 10">
              <td><span class="co-name">{{ i }}</span></td>
              <td>公司 {{ i }}</td>
              <td>代码 {{ i }}</td>
              <td>{{ i }}</td>
              <td>非典 {{ i }}</td>
              <td>2018-09-12 14:22</td>
            </tr>
            </tbody>
          </table>

        </div>
      </div>
      <template slot="modal-footer">
        <b-btn variant="primary">下载</b-btn>
      </template>
    </b-modal>

  </div>
  
</template>

<script>
  import language from '../../config/datatables.language';

  export default {
    name: 'form-uploader',
    data () {
      return {
        selectedForm: 0,
        options: [
          {value: 0, text: '表单1'},
          {value: 1, text: '表单2'},
          {value: 2, text: '表单3'},
        ]
      }
    },
    mounted () {
      const $dom = $(this.$refs.responsiveDatatable);
      $dom.DataTable({
        lengthChange: false,
        searching: false,
        language: language
      });
    }
  }
</script>

<style scoped lang="scss" src="./form-uploader.scss"></style>