<template>
  <div class="container-fluid custom-form">

    <div class="row m-b-15">
      <div class="col-12">
        <h4 class="page-title">自建表单管理</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="filter card-box">
          <form action="" class="form">
            <div class="form-inline">

              <div class="form-group">
                <label for="reportName">表单名称：</label>
                <input type="text" id="reportName" class="form-control">
              </div>

              <div class="form-group">
                <label for="reportTime">创建时间：</label>
                <input type="date" id="reportTime" class="form-control">
                &nbsp;&nbsp;-&nbsp;&nbsp;
                <input type="date" id="reportTime2" class="form-control">
              </div>

              <div class="form-group">
                <button class="btn btn-primary"><i class="md-search"></i>查询</button>
                <button class="btn btn-primary"><i class="md-refresh"></i>重置</button>
                <button class="btn btn-primary" v-b-modal.create-form-modal><i class="md-add"></i>创建表单</button>
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
            <th data-priority="2">表单名称</th>
            <th data-priority="4">创建时间</th>
            <th data-priority="3">表单描述</th>
            <th data-priority="2">权限角色</th>
            <th data-priority="1">操作</th>
          </tr>
          </thead>
          <tbody v-cloak>
          <tr v-for="i in 35">
            <td><span class="co-name">{{ i }}</span></td>
            <td>表单 {{ i }}</td>
            <td>2018-09-12 14:22</td>
            <td>用于统计 XXXX {{ i }}</td>
            <td>管理员，综合科</td>
            <td class="text-center">
              <a href="javascript:" v-b-modal.edit-form-modal>编辑</a>
              <a href="javascript:">停用</a>
              <router-link to="./form-database">数据库</router-link>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <b-modal id="edit-form-modal" title="编辑表单"
             ref="editFormModal">
      <div class="row">
        <div class="col-12">
          <div class="form-group form-inline">
            <label>表单名称：</label>
            <b-form-input type="text"
                          placeholder="表单名称"></b-form-input>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="form-group form-inline">
            <label>表单描述：</label>
            <b-form-input type="text"
                          placeholder="表单描述"></b-form-input>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="form-group form-inline m-b-0">
            <label>权限角色：</label>
            <b-form-select :options="options"/>
          </div>
        </div>
      </div>
      <template slot="modal-footer">
        <b-btn @click="$refs.editFormModal.hide()">取消</b-btn>
        <b-btn variant="primary">确定</b-btn>
      </template>
    </b-modal>

    <b-modal id="create-form-modal" title="创建表单" size="lg"
             ref="createFormModal">
      <div class="row">
        <div class="col-6">
          <div class="form-group form-inline">
            <label>表单名称：</label>
            <b-form-input type="text"
                          placeholder="表单名称"></b-form-input>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group form-inline">
            <label>表单描述：</label>
            <b-form-input type="text"
                          placeholder="表单描述"></b-form-input>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group form-inline">
            <label>权限角色：</label>
            <b-form-select :options="options"/>
          </div>
        </div>
      </div>
      <div class="card-box">
        <h4 class="header-title">数据库属性 <b-btn class="m-l-15" @click="addField">添加字段</b-btn> <b-btn @click="removeField">删除字段</b-btn></h4>
        <table class="table fields m-t-15">
          <thead>
            <tr>
              <th>序号</th>
              <th>操作</th>
              <th>字段名称</th>
              <th>字段名</th>
              <th>字段长度</th>
              <th>单位</th>
              <th>小数点</th>
              <th>默认值</th>
              <th>字段类型</th>
              <th>主键</th>
              <th>允许空值</th>
              <th>是否查询</th>
              <th>查询类型</th>
              <th>验证条件</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(field, key, index) in fields" :key="index + field.key">
              <td>{{ index + 1 }}</td>
              <td><b-form-checkbox v-model="fieldChecked" :value="field">&nbsp;</b-form-checkbox></td>
              <td><b-form-input type="text" v-model="field.name" placeholder="字段名称"/></td>
              <td><b-form-input type="text" v-model="field.asName" placeholder="字段名"/></td>
              <td><b-form-input type="text" v-model="field.length" placeholder="字段长度"/></td>
              <td><b-form-input type="text" v-model="field.unit" placeholder="选填"/></td>
              <td><b-form-input type="text" v-model="field.decimal" value="0" placeholder="小数点"/></td>
              <td><b-form-input type="text" v-model="field.default" value="0" placeholder="默认值"/></td>
              <td><b-form-select v-model="field.fieldType" :options="fieldTypeOptions"/></td>
              <td><b-form-checkbox v-model="field.primaryKey">&nbsp;</b-form-checkbox></td>
              <td><b-form-checkbox v-model="field.allowNull">&nbsp;</b-form-checkbox></td>
              <td><b-form-checkbox v-model="field.isQuery">&nbsp;</b-form-checkbox></td>
              <td><b-form-select v-model="field.queryType" :options="queryTypeOptions"/></td>
              <td><b-form-input v-model="field.validate" type="text" placeholder="选填"/></td>
            </tr>
          </tbody>
        </table>
      </div>
      <template slot="modal-footer">
        <b-btn @click="$refs.createFormModal.hide()">取消</b-btn>
        <b-btn variant="primary">创建表单</b-btn>
      </template>
    </b-modal>

  </div>
</template>

<script>
  import language from '../../config/datatables.language';

  export default {
    name: 'custom-form',
    data () {
      return {
        fields: {},
        fieldChecked: [],
        options: [
          { value: 0, text: '街道办事员' },
          { value: 1, text: '系统管理员' },
        ],
        fieldTypeOptions: [
          { value: 0, text: '字符串' },
          { value: 1, text: '时间' },
        ],
        queryTypeOptions: [
          { value: 0, text: '普通查询' },
          { value: 1, text: '范围查询' },
        ],
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
    methods: {
      addField () {
        const field = this.getField();
        this.$set(this.fields, field.key, field);
      },
      removeField () {
        this.fieldChecked.forEach(field => this.$delete(this.fields, field.key));
      },
      getUniqueKey() {
        return `Key_${Math.random() * Math.pow(10, 17)}_${Date.now() * 1}`;
      },
      getField () {
        return {
          key: this.getUniqueKey(),
          name: '',
          asName: '',
          length: 0,
          unit: '',
          decimal: 0,
          default: '',
          fieldType: this.fieldTypeOptions[0].value,
          primaryKey: false,
          allowNull: false,
          isQuery: false,
          queryType: this.queryTypeOptions[0].value,
          validate: ''
        }
      }
    }
  }
</script>

<style scoped lang="scss" src="./custom-form.scss"></style>