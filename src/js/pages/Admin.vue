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

        <b-dd text="张三" right class="float-right mt-3" no-caret>
          <b-dd-item @click="logout"><i class="md md-settings-power"></i> LOGOUT</b-dd-item>
        </b-dd>

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
                <li>
                  <router-link to="/command-center">数据指挥中心平台</router-link>
                </li>
              </ul>
            </li>

            <li class="has_sub">
              <a href="javascript:void(0);" class="waves-effect"><i class="ti-home"></i> <span> 大数据分析管理平台 </span> <span
                class="menu-arrow"></span></a>
              <ul class="list-unstyled">
                <li>
                  <router-link tag="li" to="./custom-form" active-class="active">
                    <a href="javascript:">自建表单管理</a>
                  </router-link>
                </li>
                <li>
                  <router-link tag="li" to="./custom-query-template" active-class="active">
                    <a href="javascript:">自定义查询模板</a>
                  </router-link>
                </li>
                <li>
                  <router-link tag="li" to="./custom-statistics-template" active-class="active">
                    <a href="javascript:">自定义统计模板</a>
                  </router-link>
                </li>
                <li>
                  <router-link tag="li" to="./custom-report-template" active-class="active">
                    <a href="javascript:">自定义报告模板</a>
                  </router-link>
                </li>
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
  import {LOGGED_OUT} from '../store/mutation-types'

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
      loadScript('bapp', './assets/js/common/ubold/jquery.app.js', 'body');
    },
    methods: {
      logout () {
        this.$store.commit(LOGGED_OUT);
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped lang="scss" src="./Admin.scss"></style>