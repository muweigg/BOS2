<template>
  <div class="container-fluid custom-statistics-template">

    <div class="row m-b-15">
      <div class="col-12">
        <h4 class="page-title">自定义统计模板</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-sm-9">
        <div class="row">
          <div class="col-12">
            <div class="card-box">
              <h4 class="header-title m-t-0 m-b-15">函数选择区：</h4>
              <b-btn v-b-modal.params-define-modal>Sum (X1)</b-btn>
              <b-btn v-b-modal.params-define-modal>Avg (X1)</b-btn>
              <b-btn v-b-modal.params-define-modal>Count (X1)</b-btn>
              <b-btn v-b-modal.params-define-modal>Max (X1)</b-btn>
              <b-btn v-b-modal.params-define-modal>Min (X1)</b-btn>
              <b-btn v-b-modal.params-define-modal>Sumif (X1, X2, X3)</b-btn>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="card-box">
              <h4 class="header-title m-t-0 m-b-15">运算符选择区：</h4>
              <b-btn>+</b-btn>
              <b-btn>-</b-btn>
              <b-btn>*</b-btn>
              <b-btn>/</b-btn>
              <b-btn>(</b-btn>
              <b-btn>)</b-btn>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="card-box params-select-area">
              <h4 class="header-title m-t-0">
                <div class="form-group form-inline">
                  参数选择区：您的表达式将会有 <input type="number" v-model="paramSize" class="form-control"> 个参数
                </div>
              </h4>
              <ul>
                <li :class="{ active: paramSize >= 1 }"><strong>a</strong></li>
                <li :class="{ active: paramSize >= 2 }"><strong>b</strong></li>
                <li :class="{ active: paramSize >= 3 }"><strong>c</strong></li>
                <li :class="{ active: paramSize >= 4 }"><strong>d</strong></li>
                <li :class="{ active: paramSize >= 5 }"><strong>e</strong></li>
                <li :class="{ active: paramSize >= 6 }"><strong>f</strong></li>
                <li :class="{ active: paramSize >= 7 }"><strong>g</strong></li>
                <li :class="{ active: paramSize >= 8 }"><strong>h</strong></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-9">
            <div class="card-box create-expression">
              <h4 class="header-title m-t-0">创建表达式：</h4>
              <div class="row m-t-15">
                <div class="col-12">
                  <div class="form-group form-inline">
                    <strong>=</strong> <input type="text" class="form-control m-l-10">
                  </div>

                  <div class="row">
                    <div class="col-12 col-sm-8">
                      <div class="form-group row">
                        <label class="col-2 col-form-label"><strong>a =</strong></label>
                        <div class="col-10" d-f ai-c>
                          <input type="text" class="form-control">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-2 col-form-label"><strong>b =</strong></label>
                        <div class="col-10" d-f ai-c>
                          <input type="text" class="form-control">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-2 col-form-label"><strong>c =</strong></label>
                        <div class="col-10" d-f ai-c>
                          <input type="text" class="form-control">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-2 col-form-label"><strong>d =</strong></label>
                        <div class="col-10" d-f ai-c>
                          <input type="text" class="form-control">
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <p>
                        说明：<br>
                        1、您可以输入固定值；<br>
                        2、您可以输入数组，以逗号隔开；<br>
                        3、您也可以直接拖动关联数据源至输入框
                      </p>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-12">
                      <b-btn v-b-modal.save-template-modal>保存模板</b-btn>
                      <div class="pull-right">
                        <b-btn variant="primary" v-b-modal.exec-result-modal>执行</b-btn>
                        <b-btn>关闭</b-btn>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-3">
            <div class="card-box">
              <h4 class="header-title">选择关联数据源：</h4>
              <ul class="m-t-15">
                <li><a href="javascript:" v-b-modal.field-select-modal>1-6月固定投资</a></li>
                <li><a href="javascript:" v-b-modal.field-select-modal>1-6月企业收入</a></li>
                <li><a href="javascript:" v-b-modal.field-select-modal>1-6月从业人数</a></li>
                <li><a href="javascript:" v-b-modal.field-select-modal>1-6月税收</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-3">
        <div class="row">
          <div class="col-12">
            <div class="card-box my-custom-templates">
              <ul>
                <li><a href="javascript:">我的自定义模板1</a></li>
                <li><a href="javascript:">我的自定义模板2</a></li>
                <li><a href="javascript:">我的自定义模板3</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-modal id="params-define-modal" title="参数定义" ref="paramsDefineModal">
      <div class="row">
        <div class="col-2">X1：</div>
        <div class="col-10">
          <b-form-radio-group name="radio1">
            <b-form-radio value="a">a</b-form-radio>
            <b-form-radio value="b">b</b-form-radio>
            <b-form-radio value="c">c</b-form-radio>
            <b-form-radio value="d">d</b-form-radio>
          </b-form-radio-group>
        </div>
      </div>
      <div class="row">
        <div class="col-2">X2：</div>
        <div class="col-10">
          <b-form-radio-group name="radio2">
            <b-form-radio value="a">a</b-form-radio>
            <b-form-radio value="b">b</b-form-radio>
            <b-form-radio value="c">c</b-form-radio>
            <b-form-radio value="d">d</b-form-radio>
          </b-form-radio-group>
        </div>
      </div>
      <div class="row">
        <div class="col-2">X3：</div>
        <div class="col-10">
          <b-form-radio-group name="radio3">
            <b-form-radio value="a">a</b-form-radio>
            <b-form-radio value="b">b</b-form-radio>
            <b-form-radio value="c">c</b-form-radio>
            <b-form-radio value="d">d</b-form-radio>
          </b-form-radio-group>
        </div>
      </div>
      <template slot="modal-footer">
        <b-btn @click="$refs.paramsDefineModal.hide()">取消</b-btn>
        <b-btn variant="primary">确定</b-btn>
      </template>
    </b-modal>

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

    <b-modal id="field-select-modal" title="字段选择" ref="fieldSelectModal">
      <div class="row">
        <div class="col-12">

          <div class="form-group form-inline">
            <label>选择本查询中你要 <br> 作为数据源的字段：</label>
            <select name="" class="form-control">
              <option value="0">企业代码</option>
              <option value="1">...</option>
            </select>
          </div>

        </div>
      </div>
      <template slot="modal-footer">
        <b-btn @click="$refs.fieldSelectModal.hide()">取消</b-btn>
        <b-btn variant="primary">确定</b-btn>
      </template>
    </b-modal>

    <b-modal id="exec-result-modal" title="执行结果" ref="execResultModal">
      <div class="row">
        <div class="col-12">
          <ul>
            <li>显示每一步的计算过程和结果</li>
            <li>显示每一步的计算过程和结果</li>
            <li>显示每一步的计算过程和结果</li>
          </ul>
          <strong>= 15%</strong>
        </div>
      </div>
      <template slot="modal-footer">
        <b-btn variant="primary" @click="$refs.execResultModal.hide()">确定</b-btn>
      </template>
    </b-modal>

  </div>
</template>

<script>
  export default {
    name: 'custom-statistics-template',
    data () {
      return {
        paramSize: 0
      }
    }
  }
</script>

<style scoped lang="scss" src="./custom-statistics-template.scss"></style>