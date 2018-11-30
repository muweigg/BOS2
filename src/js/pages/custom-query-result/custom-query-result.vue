<template>
  <div class="container-fluid custom-query-result">

    <div class="card-box">

        <div class="tools">
          <form action="">
            <div class="row">
              <div class="form-inline col-12 col-sm-6">
                <div class="form-group">报表类型：</div>
                <div class="form-group">
                  <select name="" class="form-control">
                    <option value="0">统计表</option>
                    <option value="1">柱状图</option>
                    <option value="2">饼图</option>
                  </select>
                </div>

                <div class="form-group ml-3">时段选择：</div>
                <div class="form-group">
                  <b-dd text="数据处理">
                    <b-dd-item>2018年2季度</b-dd-item>
                    <b-dd-item>2018年1季度</b-dd-item>
                    <b-dd-item>2017年4季度</b-dd-item>
                    <b-dd-item>2017年3季度</b-dd-item>
                    <div class="dropdown-item">
                      <input type="text" class="form-control" @focus="toggleShowTips" @blur="toggleShowTips">
                      <button class="btn btn-secondary">确认</button>
                      <div class="card-box tips" v-if="isShowTips">
                        <p><span>例：输入格式如下</span></p><p><span>月：201801，201805</span></p><p><span>季：2012A，2012B</span></p><p><span>&nbsp;&nbsp; &nbsp; &nbsp; 2012C，2012D</span></p><p><span>年：2012，2013</span></p><p><span>其他：2013-，last10</span></p>
                      </div>
                    </div>
                  </b-dd>
                </div>
              </div>

              <div class="form-inline col-12 col-sm-6" d-f jc-fe>

                <b-dd text="数据处理" right>
                  <b-dd-item>新增指标</b-dd-item>
                  <b-dd-item>筛选</b-dd-item>
                  <b-dd-divider></b-dd-divider>
                  <b-dd-item class="submenu">
                    统计
                    <div class="dropdown-menu pull-left">
                      <b-dd-item class="submenu">
                        对行运算
                        <div class="dropdown-menu pull-left">
                          <b-dd-item>SUM求和</b-dd-item>
                          <b-dd-item>x平均值</b-dd-item>
                          <b-dd-item>Co计数</b-dd-item>
                          <b-dd-item>MAX最大值</b-dd-item>
                          <b-dd-item>MIN最小值</b-dd-item>
                        </div>
                      </b-dd-item>
                      <b-dd-divider></b-dd-divider>
                      <b-dd-item>对列运算</b-dd-item>
                    </div>
                  </b-dd-item>
                  <b-dd-divider></b-dd-divider>
                  <b-dd-item>恢复</b-dd-item>
                  <b-dd-item>去除空行空列</b-dd-item>
                </b-dd>

                <b-dd text="表格处理" right class="ml-3">
                  <b-dd-item>转置</b-dd-item>
                  <b-dd-item>恢复默认</b-dd-item>
                </b-dd>

              </div>

            </div>
          </form>
        </div>

        <table class="table table-striped">
          <thead>
          <tr>
            <th></th>
            <th>累计值(亿元)</th>
            <th>累计增长(%)</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>地区生产总值</td>
            <td>15,200</td>
            <td>20</td>
          </tr>
          <tr>
            <td>第一产业增加值</td>
            <td>15,200</td>
            <td>20</td>
          </tr>
          <tr>
            <td>第二产业增加值</td>
            <td>15,200</td>
            <td>20</td>
          </tr>
          <tr>
            <td>工业增加值</td>
            <td>15,200</td>
            <td>20</td>
          </tr>
          <tr>
            <td>第三产业增加值</td>
            <td>15,200</td>
            <td>20</td>
          </tr>
          </tbody>
        </table>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'custom-query-result',
    data () {
      return {
        isShowTips: false,
      }
    },
    methods: {
      toggleShowTips () {
        this.isShowTips = !this.isShowTips;
      }
    }
  }
</script>

<style scoped lang="scss" src="./custom-query-result.scss"></style>