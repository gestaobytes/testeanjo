<template>
  <div>
    <h1>{{ this.$auth.loggedIn }}</h1>

    <v-form @submit.prevent="userLogin">
      <div>
        <label>email</label>
        <v-text-field type="email" v-model.trim="login.email" />
        <!-- <small class="form-text text-danger" v-if="errors.email">{{errors.email[0]}}</small> -->
      </div>
      <div>
        <label>Password</label>
        <v-text-field type="password" v-model.trim="login.password" />
        <!-- <small class="form-text text-danger" v-if="errors.password">{{errors.password[0]}}</small> -->
      </div>
      <div>
        <v-btn type="submit">Submit</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  middleware: ["guest","clearValidationErrors"],

  data() {
    return {
      // loggedIn:this.$store.state.auth.loggedIn,
      loggedIn: "",
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', { data: this.login })
        console.log(this.$auth)
        this.$router.push("/admin");
      } catch (err) {
        console.log(err);
      }
    },

    // async userLogin() {
    //   await this.$auth.loginWith("local", {
    //     data: this.login,
    //   });

    //   this.$router.push({
    //     path: this.$route.query.redirect || "/admin",
    //   });
    // },
  },
};
</script>