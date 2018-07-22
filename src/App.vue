<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  created () {
    const postData = {
      grant_type: 'password',
      client_id: 2,
      client_secret: 'V0APV5faKjsKOqIJInwqd8LTeZQe4ulrJdIjMx2k',
      username: 'taronsuvaryan18@gmail.com',
      password: '123456',
      scope: ''
    }
    this.$http.post('http://localhost:8000/oauth/token', postData).then(response => {
      console.log(response)
      const header = {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + response.body.access_token
      }
      this.$http.get('http://localhost:8000/api/user', {headers: header}).then(response => {
        console.log(response)
      })
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<!--this.$http.get('http://localhost:8000/api/test').then(response => {-->
<!--console.log(response)-->
<!--})-->
