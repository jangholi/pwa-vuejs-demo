<template>
  <div class="hello">
   
   <div id="app">
  <ul>
    <div>{{status}}</div>
    <li v-for="message in messages">
      <p>{{message.content}}</p>
  </li>
  </ul>
</div> 
    
  </div>
</template>

<script>
import chabokpush from 'chabokpush'
export default {
  name: 'hello',
  data () {
    return {
      messages: [],
      status: 'disconnected'
    }
  },
  created () {
    const authConfig = {
      appId: 'chabok-starter',
      apiKey: 'ae98537a4fb4957277374083a356d2ceb63372c4',
      username: 'chabok-starter',
      password: 'chabok-starter',
      devMode: true
    }
    const options = {
      webpush: {
        enabled: true
      },
      silent: false
    }

    const chabok = new chabokpush.Chabok(authConfig, options)

    chabok.on('message', msg => {
      console.log(msg)
      this.messages = [ ...this.messages, msg ]
    })

    chabok.on('registered', deviceId => {
      console.log('DeviceId ', deviceId)
    })

    chabok.on('disconnected', _ => {
      this.status = 'disconnected'
      console.log('offline')
    })

    chabok.on('connected', _ => {
      this.status = 'Connected'
      console.log('Connected')
    })

    chabok.register(`09120032217`)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display:inline-block;
  margin: 0 10px;
  width: 50%;
  border: 1px solid #ddd;
}

a {
  color: #35495E;
}
</style>
