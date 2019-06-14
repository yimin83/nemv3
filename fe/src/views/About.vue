<template>
  <v-container grid-list-md text-xs-center>
    <v-textarea
      outline
      v-model="ta"
    ></v-textarea>
    <v-layout row wrap>
      <v-flex
          v-for="room in rooms"
          :key="room"
          xs12 sm6 md4 lg2 xl1
        >
        <v-item>
          <v-card>
            <v-scroll-y-transition>
            <div v-if="room.type == 18">
              <div v-if="room.beReserved == false">
                <v-img
                  :src="image1_src"
                  height="130px"
                >
                </v-img>
              </div>
              <div v-else  class="d-flex align-center">
                <v-img
                  :src="image1_src"
                  height="130px"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline">예약완료</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
              </div>
            </div>
            <div v-else-if="room.type == 30">
              <v-img
                :src="image3_src"
                height="130px"
              >
              </v-img>
            </div>
            <div v-else>
              <v-img
                :src="image2_src"
                height="130px"
              >
              </v-img>
            </div>
            </v-scroll-y-transition>
            <v-card-title primary-title>
              <div style="margin:auto">
                <center><b>{{room.roomNo}}호</b> ({{room.type}}평형) </center>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn fab dark small left color="primary"  @click="reserveRoom(room.roomNo);">
                <v-icon dark>event_available</v-icon>
              </v-btn>
              <v-btn fab dark small left color="primary" @click="setTemp(room.roomNo);">
                <v-icon dark>wb_sunny</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="upDownIcon(room.roomNo);">
                <v-icon>{{ room.togle ? 'keyboard_arrow_up' : 'keyboard_arrow_down'  }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-slide-y-transition>
              <v-card-text v-show="room.togle">
                <div v-if="room.beReserved == false" >
                  예약일 : - <br>
                  설정온도 : {{room.setTemp}} <sup>o</sup>C
                </div>
                <div v-else style="margin:auto">
                  <span>
                    예약일 : {{room.beginDate}} ~ {{room.endDate}} <br>
                    예약인원 : {{room.peopleCnt}} 명 <br>
                    입실시간 : {{room.inTime}} <br>
                    퇴실시간 : {{room.outTime}} <br>
                    접수일 : {{room.resDate}} <br>
                    설정온도 : {{room.setTemp}} <sup>o</sup>C <br>
                  </span>
                </div>
              </v-card-text>
            </v-slide-y-transition>
          </v-card>
        </v-item>
      </v-flex>
    </v-layout>
    <v-dialog v-model="rsvRoomModal" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">{{roomTitle}}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-menu
                  v-model="startMenu1"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="startDate"
                      label="예약 시작일"
                      prepend-icon="event"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="startDate" @input="startMenu1 = false"></v-date-picker>
                </v-menu>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex xs12 sm6 md4>
                <v-menu
                  v-model="endMenu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="endDate"
                      label="예약 종료일"
                      prepend-icon="event"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="endDate" @input="endMmenu2 = false"></v-date-picker>
                </v-menu>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex xs11 sm5>
                <v-menu
                  ref="menu1"
                  v-model="inMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="inTime"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="inTime"
                      label="체크인"
                      prepend-icon="access_time"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="inMenu"
                    v-model="inTime"
                    format="24hr"
                    full-width
                    @click:minute="$refs.menu1.save(inTime)"
                  ></v-time-picker>
                </v-menu>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex xs11 sm5>
                <v-menu
                  ref="menu2"
                  v-model="outMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="outTime"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="outTime"
                      label="체크아웃"
                      prepend-icon="access_time"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="outMenu"
                    v-model="outTime"
                    format="24hr"
                    full-width
                    @click:minute="$refs.menu2.save(outTime)"
                  ></v-time-picker>
                </v-menu>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="예약자 이름"
                  hint=""
                  persistent-hint
                  required
                  v-model="roomInfo.subscriber"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="예약자 연락처"
                  hint=""
                  persistent-hint
                  required
                  v-model="roomInfo.subsTel"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="투숙객 수"
                  hint=""
                  persistent-hint
                  required
                  v-model="roomInfo.peopleCnt"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="saveReserveRoom">저장</v-btn>
          <v-btn color="blue darken-1" flat @click.native="rsvRoomModal = false">닫기</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog" id="setTemp" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Legal last name*"
                  hint=""
                  persistent-hint
                  required
                  v-model="userName"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="userAges"
                  label="Age"
                  required
                  v-model="userAge"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="putUser">수정</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">삭제</v-btn>
          <v-btn color="blue darken-1" flat @click.native="postUser">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
//import SweetCalendar from 'vue-sweet-calendar'
//import 'vue-sweet-calendar/dist/SweetCalendar.css'
import moment from 'moment'
import format from 'date-fns/format'
export default {
  el: '#key-example',
  name: 'about',
  data () {
    return {
      ta:'debug',
      show: false,
      rsvRoomModal: false,
      image1_src: require("../../images/18pyeong.jpg"),
      image2_src: require("../../images/25pyeong.jpg"),
      image3_src: require("../../images/30pyeong.jpg"),
      curTemp: 'username',
      roomTitle: '예약 정보',
      rooms: [
        { roomNo: 101, type: 18, pos: 'sea', setTemp: 25.0, beReserved: true, subscriber: '김철수', subsTel: '01012341234',resDate: '2019/06/03', peopleCnt:2,  beginDate: '2019/06/06', endDate: '2019/06/09', inTime: '14:00:00', outTime: '12:00:00', togle : false},
        { roomNo: 102, type: 25, pos: 'sea', setTemp: 25.0, beReserved: false, subscriber: '', subsTel: '', resDate: '2019/06/03', peopleCnt:2,  beginDate: '2019/06/06', endDate: '2019/06/06', inTime: '14:00:00', outTime: '12:00:00', togle : false},
        { roomNo: 103, type: 30, pos: 'sea', setTemp: 25.0, beReserved: false, subscriber: '', subsTel: '', resDate: '2019/06/03', peopleCnt:2,  beginDate: '2019/06/06', endDate: '2019/06/06', inTime: '14:00:00', outTime: '12:00:00', togle : false},
        { roomNo: 104, type: 30, pos: 'mountain', setTemp: 25.0, beReserved: false, subscriber: '', subsTel: '', resDate: '2019/06/03', peopleCnt:2,  beginDate: '2019/06/06', endDate: '2019/06/06', inTime: '14:00:00', outTime: '12:00:00', togle : false},
        { roomNo: 105, type: 25, pos: 'mountain', setTemp: 25.0, beReserved: true, subscriber: '이영희', subsTel: '01056785678', resDate: '2019/06/01', peopleCnt:5,  beginDate: '2019/06/08', endDate: '2019/06/10', inTime: '14:00:00', outTime: '12:00:00', togle : false},
        { roomNo: 106, type: 18, pos: 'mountain', setTemp: 25.0, beReserved: true, subscriber: '홍길동', subsTel: '01012345678', resDate: '2019/06/02', peopleCnt:4,  beginDate: '2019/06/10', endDate: '2019/06/15', inTime: '12:00:00', outTime: '10:00:00', togle : false},
        { roomNo: 201, type: 18, pos: 'sea', setTemp: 25.0, beReserved: true, subscriber: '김철수', subsTel: '01012341234',resDate: '2019/06/03', peopleCnt:2,  beginDate: '2019/06/06', endDate: '2019/06/09', inTime: '14:00:00', outTime: '12:00:00', togle : false},
        { roomNo: 202, type: 25, pos: 'sea', setTemp: 25.0, beReserved: false, subscriber: '', subsTel: '', resDate: '2019/06/03', peopleCnt:2,  beginDate: '2019/06/06', endDate: '2019/06/06', inTime: '14:00:00', outTime: '12:00:00', togle : false},
        { roomNo: 203, type: 30, pos: 'sea', setTemp: 25.0, beReserved: false, subscriber: '', subsTel: '', resDate: '2019/06/03', peopleCnt:2,  beginDate: '2019/06/06', endDate: '2019/06/06', inTime: '14:00:00', outTime: '12:00:00', togle : false},
        { roomNo: 204, type: 30, pos: 'mountain', setTemp: 25.0, beReserved: false, subscriber: '', subsTel: '', resDate: '2019/06/03', peopleCnt:2,  beginDate: '2019/06/06', endDate: '2019/06/06', inTime: '14:00:00', outTime: '12:00:00', togle : false},
        { roomNo: 205, type: 25, pos: 'mountain', setTemp: 25.0, beReserved: true, subscriber: '이영희', subsTel: '01056785678', resDate: '2019/06/01', peopleCnt:5,  beginDate: '2019/06/08', endDate: '2019/06/10', inTime: '14:00:00', outTime: '12:00:00', togle : false},
        { roomNo: 206, type: 18, pos: 'mountain', setTemp: 25.0, beReserved: true, subscriber: '홍길동', subsTel: '01012345678', resDate: '2019/06/02', peopleCnt:4,  beginDate: '2019/06/10', endDate: '2019/06/15', inTime: '12:00:00', outTime: '10:00:00', togle : false},
        { roomNo: 301, type: 18, pos: 'sea', setTemp: 25.0, beReserved: true, subscriber: '김철수', subsTel: '01012341234',resDate: '2019/06/03', peopleCnt:2,  beginDate: '2019/06/06', endDate: '2019/06/09', inTime: '14:00:00', outTime: '12:00:00', togle : false},
        { roomNo: 302, type: 25, pos: 'sea', setTemp: 25.0, beReserved: false, subscriber: '', subsTel: '', resDate: '2019/06/03', peopleCnt:2,  beginDate: '2019/06/06', endDate: '2019/06/06', inTime: '14:00:00', outTime: '12:00:00', togle : false},
        { roomNo: 303, type: 30, pos: 'sea', setTemp: 25.0, beReserved: false, subscriber: '', subsTel: '', resDate: '2019/06/03', peopleCnt:2,  beginDate: '2019/06/06', endDate: '2019/06/06', inTime: '14:00:00', outTime: '12:00:00', togle : false},
        { roomNo: 304, type: 30, pos: 'mountain', setTemp: 25.0, beReserved: false, subscriber: '', subsTel: '', resDate: '2019/06/03', peopleCnt:2,  beginDate: '2019/06/06', endDate: '2019/06/06', inTime: '14:00:00', outTime: '12:00:00', togle : false},
        { roomNo: 305, type: 25, pos: 'mountain', setTemp: 25.0, beReserved: true, subscriber: '이영희', subsTel: '01056785678', resDate: '2019/06/01', peopleCnt:5,  beginDate: '2019/06/08', endDate: '2019/06/10', inTime: '14:00:00', outTime: '12:00:00', togle : false},
        { roomNo: 306, type: 18, pos: 'mountain', setTemp: 25.0, beReserved: true, subscriber: '홍길동', subsTel: '01012345678', resDate: '2019/06/02', peopleCnt:4,  beginDate: '2019/06/10', endDate: '2019/06/15', inTime: '12:00:00', outTime: '10:00:00', togle : false}
      ],
      roomInfo: {
        roomNo: 101,
        type: 18,
        pos: 'sea',
        beReserved: false,
        peopleCnt:0,
        beginDate: ' ',
        endDate: ' ',
        inTime: ' ',
        outTime: ' ',
        subscriber: ' ',
        subsTel: ' '
      },
      userAges: [
      ],
      userName: 'asd',
      startDate: new Date().toISOString().substr(0, 10),
      endDate: new Date().toISOString().substr(0, 10),
      startMenu1: false,
      endMenu2: false,
      inTime: null,
      inMenu: false,
      outTime: null,
      outMenu: false
    }
  },
  mounted () {
    //const a = { a: 1, b: 2}
    this.ta = "즐겨찾기 목록"
    startDate = new Date().toISOString().substr(0, 10)
    endDate = new Date().toISOString().substr(0, 10)
    //console.log(this.$vuetify.breakpoint)
  },
  methods: {
    toggleLoginType: function () {
      return this.loginType = this.loginType === 'username' ? 'email' : 'username'
    },
    upDownIcon: function (roomNo){
      for(var i=0;i<this.rooms.length;i++)
      {
        if(this.rooms[i].roomNo === roomNo)
        {
          this.rooms[i].togle = !this.rooms[i].togle
          break;
        }
      }
    },
    reserveRoom: function (roomNo){
      this.roomInfo.roomNo=0
      this.roomInfo.type=0
      this.roomInfo.pos=""
      this.roomInfo.beReserved=false
      this.roomInfo.peopleCnt=0
      this.roomInfo.beginDate=""
      this.roomInfo.endDate=""
      this.roomInfo.inTime=""
      this.roomInfo.outTime=""
      this.roomInfo.subscriber=""
      this.roomInfo.subsTel=""
      this.startDate=new Date().toISOString().substr(0, 10)
      this.endDate=new Date().toISOString().substr(0, 10)
      this.inTime=null
      this.outTime=null
      for(var i=0;i<this.rooms.length;i++)
      {
        if(this.rooms[i].roomNo === roomNo)
        {
          this.roomInfo.type = this.rooms[i].type
          this.roomInfo.pos = this.rooms[i].pos
          if(this.rooms[i].beReserved == false)
            break;
          this.roomInfo.beReserved = this.rooms[i].beReserved
          this.roomInfo.peopleCnt=this.rooms[i].peopleCnt
          this.startDate = new Date(this.rooms[i].beginDate).toISOString().substr(0, 10)
          this.endDate = new Date(this.rooms[i].endDate).toISOString().substr(0, 10)
          this.roomInfo.beginDate = this.rooms[i].beginDate
          this.roomInfo.endDate = this.rooms[i].endDate
          this.inTime=this.rooms[i].inTime
          this.outTime=this.rooms[i].outTime
          this.roomInfo.inTime = this.rooms[i].inTime
          this.roomInfo.outTime = this.rooms[i].outTime
          this.roomInfo.subscriber = this.rooms[i].subscriber
          this.roomInfo.subsTel = this.rooms[i].subsTel
          break;
        }
      }
      this.$data.rsvRoomModal = true;

    },
    saveReserveRoom() {
      this.$data.rsvRoomModal = false;
    },
    setTemp: function (roomNo){
      alert("setTemp " + roomNo)
    }
  }
}
</script>
