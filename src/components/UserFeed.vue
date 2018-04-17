<template>
<body>
  <div>
      <div v-for="item in feed" class="item">
      <p class="tweet">{{item.snippet}}</p>
    </div>
    <div>
      <form v-on:submit.prevent="tweet" class="tweetForm">
      <p> Instruction: Put in the name of the code, and the code that you want to add to the database 

      <br>(Ex. Name: Change background color<br>
      Code: background-color: #c2c2c2;)</p>
	<p>Name:</p><textarea v-model="codeName" placeholder=""/>
  <p>Code:</p><textarea v-model="text" placeholder=""/><br/>
	<div class="buttonWrap">
	  <button class="primary" type="submit">Add Snippet</button>
	</div>
      </form>
    </div>
  </div>
  <a href
  </body>
</template>

<script>
 import moment from 'moment';
 export default {
   name: 'UserFeed',
   data () {
     return {
       text: '',
       codeName: '',
     }
   },
   created: function() {
     this.$store.dispatch('getFeed');
   },
   filters: {
     since: function(datetime) {
       moment.locale('en', {
   relativeTime: {
     future: 'in %s',
     past: '%s',
     s:  'seconds',
     ss: '%ss',
     m:  '1m',
     mm: '%dm',
     h:  'h',
     hh: '%dh',
     d:  'd',
     dd: '%dd',
     M:  ' month',
     MM: '%dM',
     y:  'a year',
     yy: '%dY'
   }
       });
       return moment(datetime).fromNow();
     },
   },
   computed: {
     feed: function() {
       return this.$store.getters.feed;
     },
   },
   methods: {
     tweet: function() {
       this.$store.dispatch('addTweet',{
         tweet: 'To ' + this.codeName+', use this code "' + this.text + '"',
       }).then(tweet => {
   this.text = "";
   this.codeName = "";
       });
     },
   }
 }
</script>

<style scoped>
 .feed {
     width: 80%;
 }
 .tweetForm {
     background: #eee;
     padding: 10px;
     margin-bottom: 10px;
 }
 .buttonWrap {
     width: 100%;
     display: flex;
 }
 button {
     margin-left: auto;
     height: 2em;
     font-size: 0.9em;
 }
 textarea {
     width: 100%;
     height: 5em;
     padding: 2px;
     margin-bottom: 5px;
     resize: none;
     box-sizing: border-box;
 }
 .item {
     border-bottom: 1px solid #ddd;
     padding: 10px;
 }
 .tweet {
     margin-top: 0px;
 }
 .idline {
     margin-bottom: 0px;
 }
 .user {
     font-weight: bold;
     margin-right: 10px;
 }
 .handle {
     margin-right: 10px;
     color: #666;
 }
 .time {
     float: right;
     color: #666;
 }
 body {
    vertical-align: middle;
    display: table;
    width: 86%;
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