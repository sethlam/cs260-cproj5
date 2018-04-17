<template>
  <body>
  <div class="column">
    <h1>Welcome to CodeSnippet.com!</h1>
    <h2>Here you can create your own code snippets database, so you don't have to go to stackoverflow again!</h2>
    <form v-on:submit.prevent="register">
      <p>Register Now!!! Enter the information below to register.</p><br/>
      <input class="wide" v-model="username" placeholder="User Name"><br/><br/>
      <input class="wide" v-model="name" placeholder="First and Last Name"><br/><br/>
      <input class="wide" v-model="email" placeholder="Email Address"><br/><br/>
      <input class="wide" type="password" v-model="password" placeholder="Password"><br/>
      <br/>
      <button class="alternate" type="submit">Register</button>
    </form>
    <p class="error">{{registerError}}</p>
  </div>
  </body>
</template>

<script>
 export default {
   name: 'WelcomePage',
   data () {
     return {
       username: '',
       email: '',
       password: '',
       name: '',
     }
   },
   computed: {
     registerError: function() {
       return this.$store.getters.registerError;
     },
   },
   methods: {
     register: function() {
       this.$store.dispatch('register',{
   username: this.username,
         email: this.email,
         password: this.password,
   name: this.name,
       });
     }
   }
 }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 img {
     width: 100px;
 }

 h1 {
     margin-bottom: 0px;
 }
 h2 {
     margin-top: 0px;
     font-size: 1.2em;
     font-weight: normal;
     margin-bottom: 50px;
 }
 .narrow {
     width: 170px;
 }
 .wide {
     width: 370px;
 }
 .column {
    margin-left: 25%;
    margin-right: 40%;
 }
 div {
 }

 body {
    vertical-align: middle;
    display: table;
    background-color: #ccf1ff;
}

body:after {
    content : "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background-image: url(https://dannyvanderkraan.files.wordpress.com/2015/08/2015-08-11-12_25_00-code-snippet-template.png); 
    width: 100%;
    height: 100%;
    opacity : 0.2;
    z-index: -1;
    margin-bottom: 0%;
    padding-bottom: 0%;
}
</style>