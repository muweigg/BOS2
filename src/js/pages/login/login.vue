<template>
  <div class="login">
    <div class="account-pages"></div>
    <div class="clearfix"></div>
    <div class="wrapper-page">
      <div class="card-box">
        <div class="panel-heading">
          <h4 class="text-center"> Sign In to <strong class="text-custom">UBold</strong></h4>
        </div>


        <div class="p-20">
          <div class="form-horizontal m-t-20">

            <div class="form-group ">
              <div class="col-12">
                <input class="form-control" type="text" required="" placeholder="Username">
              </div>
            </div>

            <div class="form-group">
              <div class="col-12">
                <input class="form-control" type="password" required="" placeholder="Password">
              </div>
            </div>

            <div class="form-group ">
              <div class="col-12">
                <div class="checkbox checkbox-primary">
                  <input id="checkbox-signup" type="checkbox">
                  <label for="checkbox-signup">
                    Remember me
                  </label>
                </div>

              </div>
            </div>

            <div class="form-group text-center m-t-40">
              <div class="col-12">
                <button class="btn btn-pink btn-block text-uppercase waves-effect waves-light"
                        @click="login">Log In
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {LOGGED} from '../../store/mutation-types'
  export default {
    name: 'login',
    data () {
      return {

      }
    },
    methods: {
      login () {
        this.$store.commit(LOGGED);
        const path = this.$store.state.toURL;
        this.$router.push((path));
      }
    }
  }
</script>

<style scoped lang="scss" src="./login.scss"></style>