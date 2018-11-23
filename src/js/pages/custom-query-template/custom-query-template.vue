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
          <div class="col-12">
            <div class="form-group form-inline">
              A、
              <input type="text" readonly value="入职登记表" class="form-control">
              <select name="" class="form-control">
                <option value="0">性别</option>
                <option value="1">籍贯</option>
              </select>
              <select name="" class="form-control">
                <option value="0">=</option>
                <option value="1">!=</option>
                <option value="2">&gt;</option>
                <option value="3">&gt;=</option>
                <option value="4">&lt;</option>
                <option value="5">&lt;=</option>
                <option value="6">in</option>
                <option value="7">包含于</option>
                <option value="8">不包含于</option>
              </select>
              <select name="" class="form-control">
                <option value="0">值</option>
                <option value="1">表单</option>
              </select>
              <input type="text" value="女" class="form-control">
              <a href="javascript:">添加条件</a>
              <a href="javascript:">删除</a>
            </div>
            <div class="form-group form-inline">
              B、
              <input type="text" readonly value="工资表" class="form-control">
              <select name="" class="form-control">
                <option value="0">性别</option>
                <option value="1" selected>籍贯</option>
              </select>
              <select name="" class="form-control">
                <option value="0">=</option>
                <option value="1" selected>!=</option>
                <option value="2">&gt;</option>
                <option value="3">&gt;=</option>
                <option value="4">&lt;</option>
                <option value="5">&lt;=</option>
                <option value="6">in</option>
                <option value="7">包含于</option>
                <option value="8">不包含于</option>
              </select>
              <select name="" class="form-control">
                <option value="0">值</option>
                <option value="1" selected>表单</option>
              </select>
              <input type="text" readonly value="入职登记表" class="form-control">
              <select name="" class="form-control">
                <option value="0">性别</option>
                <option value="1" selected>籍贯</option>
              </select>
              <a href="javascript:">添加条件</a>
              <a href="javascript:">删除</a>
            </div>
            <div class="form-group form-inline">
              C、
              <input type="text" readonly value="工资表" class="form-control">
              <select name="" class="form-control">
                <option value="0">工资</option>
              </select>
              <select name="" class="form-control">
                <option value="0">=</option>
                <option value="1">!=</option>
                <option value="2">&gt;</option>
                <option value="3">&gt;=</option>
                <option value="4">&lt;</option>
                <option value="5">&lt;=</option>
                <option value="6">in</option>
                <option value="7" selected>包含于</option>
                <option value="8">不包含于</option>
              </select>
              <select name="" class="form-control">
                <option value="0">值</option>
                <option value="1">表单</option>
              </select>
              <span class="range">
                <input type="text" class="form-control" value="5000">
                ---
                <input type="text" class="form-control" value="10000">
              </span>
              <a href="javascript:">添加条件</a>
              <a href="javascript:">删除</a>
            </div>
            <div class="form-group form-inline">
              D、
              <input type="text" readonly value="工资表" class="form-control">
              <select name="" class="form-control">
                <option value="0">性别</option>
                <option value="1" selected>籍贯</option>
              </select>
              <select name="" class="form-control">
                <option value="0">=</option>
                <option value="1">!=</option>
                <option value="2">&gt;</option>
                <option value="3">&gt;=</option>
                <option value="4">&lt;</option>
                <option value="5">&lt;=</option>
                <option value="6" selected>in</option>
                <option value="7">包含于</option>
                <option value="8">不包含于</option>
              </select>
              <select name="" class="form-control">
                <option value="0">值</option>
                <option value="1">表单</option>
              </select>
              <input type="text" value="重庆" class="form-control">
              <a href="javascript:">添加条件</a>
              <a href="javascript:">删除</a>
            </div>
          </div>
        </div>
      </div>
      <div class="group-by border-top border-secondary">
        <div class="row">
          <div class="col-12">
            <div class="form-group form-inline m-t-15 m-b-0">
              <div class="checkbox">
                <input id="group-by" type="checkbox">
                <label for="group-by" class="m-b-0">&nbsp;</label>
              </div>
              <span>Group By</span>
              <input type="text" readonly value="工资表" class="form-control">
              <select name="" class="form-control">
                <option value="0">性别</option>
                <option value="1">籍贯</option>
                <option value="2" selected>工资</option>
              </select>
              <a href="javascript:">继续添加</a>
            </div>
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
      return {}
    }
  }
</script>

<style scoped lang="scss" src="./custom-query-template.scss"></style>