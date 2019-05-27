<template>
  <div>
    <v-btn @click="test">test</v-btn>
    <v-btn @click="rm">RM</v-btn>
    <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3 v-for="card in cards">
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="2.75"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{card.name}}</h3>
              <div> {{ card.age }} </div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
      <!--<h1>{{title}}</h1>-->
      <!--<button @click="test">test</button><!--'v-on' == '@' 약어 -->
      <!--<v-btn :color="btnColor" @click="test">test</v-btn><!--':' 바인드 -->
      <!--<v-chip close  @click="close">{{chipsText}}</v-chip>-->
      <!--<v-chip v-for="chip in chips" :color="chip.cl">{{chip.name}}</v-chip>-->
    </v-container>
  </div>
</template>
<script>
// template 는 "", script는 ''
  export default {
    name: 'help',
    data() { // template 에서 사용될 변수들 반환
      return{
        cards : [
          /*{
            name : '철수',
            age : 33,
            text : 'text1'
          },
          {
            name : '영희',
            age : 44,
            text : 'text2'
          }*/
        ]
        /*
        title:'Vuetify.jswefwef',
        btnColor:'success',
        chipsText:'Example chip',
        chips:[
          {
            cl:'primary',
            name:'aaaa'
          },
          {
            cl:'secondary',
            name:'bbbb'
          },
          {
            cl:'green',
            name:'cccc'
          },
          {
            cl:'warning',
            name:'dddd'
          }
        ]
        /*  chips:[
          'a','b','c','d'
        ]
        ars: {
          ''
        }*/
      }
    },
    methods:{
      test(){
        const card = {
          name: 'memi '+ Math.random()
        }
        card.age = Math.random()
        this.cards.push(card)
        //this.title='nnnnnnnn',
        //this.btnColor='warning'
        //btnColor = success, error, warning, info
        //console.log('test done')
      },
      rm(){
        this.cards.shift()
      }
      /*,
      close(){
        this.chipsText="closed!",
        this.chip=true
      }*/

    }
  }
</script>
