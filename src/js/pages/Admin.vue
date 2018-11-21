<template>
  <div id="wrapper" class="admin">

    <!-- Top Bar Start -->
    <div class="topbar">
      <!-- LOGO -->
      <div class="topbar-left">
        <div class="text-center">
          <router-link to="/" class="logo">
            <i class="icon-magnet icon-c-logo"></i>
            <span>Ub<i class="md md-album"></i>ld</span>
          </router-link>
          <!-- Image Logo here -->
          <!--<a href="index.html" class="logo">-->
          <!--<i class="icon-c-logo"> <img src="assets/images/logo_sm.png" height="42"/> </i>-->
          <!--<span><img src="assets/images/logo_light.png" height="20"/></span>-->
          <!--</a>-->
        </div>
      </div>

      <!-- Button mobile view to collapse sidebar menu -->
      <nav class="navbar-custom">

        <ul class="list-inline menu-left mb-0">
          <li class="float-left">
            <button class="button-menu-mobile open-left waves-light waves-effect">
              <i class="dripicons-menu"></i>
            </button>
          </li>
        </ul>

      </nav>
    </div>
    <!-- Top Bar End -->


    <!-- ========== Left Sidebar start ========== -->

    <div class="left side-menu">
      <div class="sidebar-inner slimscrollleft">
        <!--- Divider -->
        <div id="sidebar-menu">
          <ul>

            <li class="text-muted menu-title">导航</li>

            <li class="has_sub">
              <a href="javascript:void(0);" class="waves-effect"><i class="ti-home"></i> <span> 数据指挥中心平台 </span> <span
                class="menu-arrow"></span></a>
              <ul class="list-unstyled">
                <li><a href="index.html" target="_blank">数据指挥中心平台</a></li>
              </ul>
            </li>

            <li class="has_sub">
              <a href="javascript:void(0);" class="waves-effect"><i class="ti-home"></i> <span> 大数据分析管理平台 </span> <span
                class="menu-arrow"></span></a>
              <ul class="list-unstyled">
                <li><a href="custom-query-template.html">自定义查询模板</a></li>
                <li><a href="custom-statistics-template.html">自定义统计模板</a></li>
                <li><a href="custom-report-template.html">自定义报告模板</a></li>
              </ul>
            </li>

            <li class="has_sub">
              <a href="javascript:void(0);" class="waves-effect"><i class="ti-home"></i> <span> 数据应用平台 </span> <span
                class="menu-arrow"></span></a>
              <ul class="list-unstyled">
                <router-link tag="li" to="./integrated-data-query" active-class="active">
                  <a href="javascript:">综合数据查询</a>
                </router-link>
                <router-link tag="li" to="./enterprise-data-query" active-class="active">
                  <a href="javascript:">企业数据查询</a>
                </router-link>
              </ul>
            </li>

          </ul>
          <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <!-- ========== Left Sidebar end ========== -->

    <!-- ========== main content start ========== -->
    <div class="content-page">

      <!-- content -->
      <div class="content">
        <router-view></router-view>
      </div>

      <!-- content -->

      <!-- footer -->
      <footer class="footer">
        2015 © Ubold.
      </footer>
    </div>

    <!-- ========== main content end ========== -->


    <!-- ========== Right sidebar start ========== -->
    <div class="side-bar right-bar nicescroll">
      ...
    </div>

    <!-- ========== Right sidebar end ========== -->

  </div>
</template>

<script>
  const loadScript = (id, url, scope) => {
    let script = document.querySelector(`#${id}`);
    if (script) $(script).remove();
    script = document.createElement('script');
    script.id = id;
    script.src = url;
    $(scope).append(script);
  };
  // loadScript('modernizr', './assets/js/common/ubold/modernizr.min.js', 'head');

  export default {
    name: 'Admin',
    mounted() {
      import('script-loader!babel-loader!../common/third-party/ubold/jquery.app');
      // loadScript('bapp', './assets/js/common/ubold/jquery.app.js', 'body');
    },
    methods: {}
  }
</script>

<style scoped lang="scss" src="./Admin.scss"></style>