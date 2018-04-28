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
      appId: 'bijivekon',
      apiKey: '76ddb7bf87215583ee30ba2232ccaa30abe7cdb6',
      username: 'bosesacuw',
      password: 'ifmalboti',
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

    chabok.register(`09194491940`)
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
