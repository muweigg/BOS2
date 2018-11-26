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
                <input class="form-control" type="text" required="" placeholder="Username"
                       :disabled="disabled"
                       v-model="username">
              </div>
            </div>

            <div class="form-group">
              <div class="col-12">
                <input class="form-control" type="password" required="" placeholder="Password"
                       :disabled="disabled"
                       v-model="password">
              </div>
            </div>

            <div class="form-group ">
              <div class="col-12">
                <div class="checkbox checkbox-primary">
                  <input id="checkbox-signup" type="checkbox"
                         :disabled="disabled"
                         v-model="rememberMe">
                  <label for="checkbox-signup">
                    Remember me
                  </label>
                </div>

              </div>
            </div>

            <div class="form-group text-center m-t-40">
              <div class="col-12">
                <button class="btn btn-pink btn-block text-uppercase waves-effect waves-light"
                        :disabled="disabled"
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
  import api from '../../api'

  export default {
    name: 'login',
    data () {
      return {
        username: 'admin',
        password: '123123',
        disabled: false,
        rememberMe: false,
      }
    },
    methods: {
      async login () {
        this.disabled = true;

        const resp = await api.login({
          username: this.username,
          password: this.password,
        }).catch(e => this.disabled = false);

        if (!resp.data) {
          this.disabled = false;
          return;
        }

        this.$store.commit(LOGGED);
        const path = this.$store.state.toURL;
        this.$router.push((path));
      }
    }
  }
</script>

<style scoped lang="scss" src="./login.scss"></style>