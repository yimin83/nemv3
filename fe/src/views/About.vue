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
                  @click="reserveRoom(room.roomNo);"
                >
                </v-img>
              </div>
              <div v-else>
                <v-img
                  :src="image1_src"
                  height="130px"
                  @click="reserveRoom(room.roomNo);"
                >
                  <v-container fill-height fluid style="background-color: rgba(255, 255, 255, 0.7);">
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
              <div v-if="room.beReserved == false">
                <v-img
                  :src="image3_src"
                  height="130px"
                  @click="reserveRoom(room.roomNo);"
                >
                </v-img>
              </div>
              <div v-else>
                <v-img
                  :src="image3_src"
                  height="130px"
                  @click="reserveRoom(room.roomNo);"
                >
                  <v-container fill-height fluid style="background-color: rgba(255, 255, 255, 0.7);">
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline">예약완료</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
              </div>
            </div>
            <div v-else>
              <div v-if="room.beReserved == false">
                <v-img
                  :src="image2_src"
                  height="130px"
                  @click="reserveRoom(room.roomNo);"
                >
                </v-img>
              </div>
              <div v-else>
                <v-img
                  :src="image2_src"
                  height="130px"
                  @click="reserveRoom(room.roomNo);"
                >
                  <v-container fill-height fluid style="background-color: rgba(255, 255, 255, 0.7);">
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline">예약완료</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
              </div>
            </div>
            </v-scroll-y-transition>
            <v-card-actions>
              <v-btn fab dark small left color="primary"  @click="reserveRoom(room.roomNo);">
                <v-icon dark>event_available</v-icon>
              </v-btn>
              <v-btn fab dark small left color="primary" @click="settingRoom(room.roomNo);">
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
                  설정온도 : {{room.beSmart ? room.smartTemp:room.setTemp}} <sup>o</sup>C
                </div>
                <div v-else style="margin:auto">
                  <span>
                    예약일 : {{room.startDate}} ~ {{room.endDate}} <br>
                    예약인원 : {{room.peopleCnt}} 명 <br>
                    입실시간 : {{room.inTime}} <br>
                    퇴실시간 : {{room.outTime}} <br>
                    접수일 : {{room.resDate}} <br>
                    설정온도 : {{room.beSmart ? room.smartTemp:room.setTemp}} <sup>o</sup>C <br>
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
                  <v-date-picker v-model="endDate" @input="endMenu2 = false"></v-date-picker>
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
                  v-model="roomInfo.subsName"
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
          <v-btn color="blue darken-1" flat @click="saveReserveRoom(roomInfo.roomNo)">저장</v-btn>
          <v-btn color="blue darken-1" flat @click.native="rsvRoomModal = false">닫기</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="settingRoomModal" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">{{settingTitle}}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-checkbox
                  v-model="bestChkbox"
                  :label="`베스트룸`"
                ></v-checkbox>
                <!-- <v-checkbox
                  v-model="bestChkbox"
                  :label="`Checkbox 1: ${checkbox.toString()}`"
                ></v-checkbox> -->
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-checkbox
                  v-model="smartChkbox"
                  :label="`스마트온도`"
                ></v-checkbox>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <div v-if="smartChkbox == false">
                  <v-text-field
                    label="설정온도"
                    hint=""
                    persistent-hint
                    required
                    v-model="roomInfo.setTemp"
                  ></v-text-field>
                </div>
                <div v-else>
                  <v-text-field
                    label="스마트온도"
                    hint=""
                    persistent-hint
                    required
                    readonly
                    v-model="roomInfo.smartTemp"
                  ></v-text-field>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="saveSettingRoom(roomInfo.roomNo)">저장</v-btn>
          <v-btn color="blue darken-1" flat @click.native="settingRoomModal = false">닫기</v-btn>
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
      settingRoomModal: false,
      bestChkbox:false,
      smartChkbox:false,
      image1_src: require("../../images/18pyeong.jpg"),
      image2_src: require("../../images/25pyeong.jpg"),
      image3_src: require("../../images/30pyeong.jpg"),
      curTemp: 'username',
      roomTitle: '예약 정보',
      settingTitle : '설정',
      rooms: [
        { roomNo: 101, type: 18, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: true, subsName: '김철수', subsTel: '01012341234',resDate: '2019/06/03', peopleCnt:2,  startDate: '2019/06/06', endDate: '2019/06/09', inTime: '14:00:00', outTime: '12:00:00', togle : false, beSmart:true, beBestRoom:false},
        { roomNo: 102, type: 25, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '2019/06/03', peopleCnt:2,  startDate: '2019/06/06', endDate: '2019/06/06', inTime: '14:00:00', outTime: '12:00:00', togle : false, beSmart:true, beBestRoom:false},
        { roomNo: 103, type: 30, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '2019/06/03', peopleCnt:2,  startDate: '2019/06/06', endDate: '2019/06/06', inTime: '14:00:00', outTime: '12:00:00', togle : false, beSmart:true, beBestRoom:false},
        { roomNo: 104, type: 30, pos: 'mountain', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '2019/06/03', peopleCnt:2,  startDate: '2019/06/06', endDate: '2019/06/06', inTime: '14:00:00', outTime: '12:00:00', togle : false, beSmart:true, beBestRoom:false},
        { roomNo: 105, type: 25, pos: 'mountain', smartTemp: 23.0, setTemp: 25.0, beReserved: true, subsName: '이영희', subsTel: '01056785678', resDate: '2019/06/01', peopleCnt:5,  startDate: '2019/06/08', endDate: '2019/06/10', inTime: '14:00:00', outTime: '12:00:00', togle : false, beSmart:true, beBestRoom:false},
        { roomNo: 106, type: 18, pos: 'mountain', smartTemp: 23.0, setTemp: 25.0, beReserved: true, subsName: '홍길동', subsTel: '01012345678', resDate: '2019/06/02', peopleCnt:4,  startDate: '2019/06/10', endDate: '2019/06/15', inTime: '12:00:00', outTime: '10:00:00', togle : false, beSmart:true, beBestRoom:false},
        { roomNo: 201, type: 18, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: true, subsName: '김철수', subsTel: '01012341234',resDate: '2019/06/03', peopleCnt:2,  startDate: '2019/06/06', endDate: '2019/06/09', inTime: '14:00:00', outTime: '12:00:00', togle : false, beSmart:true, beBestRoom:false},
        { roomNo: 202, type: 25, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '2019/06/03', peopleCnt:2,  startDate: '2019/06/06', endDate: '2019/06/06', inTime: '14:00:00', outTime: '12:00:00', togle : false, beSmart:true, beBestRoom:false},
        { roomNo: 203, type: 30, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '2019/06/03', peopleCnt:2,  startDate: '2019/06/06', endDate: '2019/06/06', inTime: '14:00:00', outTime: '12:00:00', togle : false, beSmart:true, beBestRoom:false},
        { roomNo: 204, type: 30, pos: 'mountain', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '2019/06/03', peopleCnt:2,  startDate: '2019/06/06', endDate: '2019/06/06', inTime: '14:00:00', outTime: '12:00:00', togle : false, beSmart:true, beBestRoom:false},
        { roomNo: 205, type: 25, pos: 'mountain', smartTemp: 23.0, setTemp: 25.0, beReserved: true, subsName: '이영희', subsTel: '01056785678', resDate: '2019/06/01', peopleCnt:5,  startDate: '2019/06/08', endDate: '2019/06/10', inTime: '14:00:00', outTime: '12:00:00', togle : false, beSmart:true, beBestRoom:false},
        { roomNo: 206, type: 18, pos: 'mountain', smartTemp: 23.0, setTemp: 25.0, beReserved: true, subsName: '홍길동', subsTel: '01012345678', resDate: '2019/06/02', peopleCnt:4,  startDate: '2019/06/10', endDate: '2019/06/15', inTime: '12:00:00', outTime: '10:00:00', togle : false, beSmart:true, beBestRoom:false},
        { roomNo: 301, type: 18, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: true, subsName: '김철수', subsTel: '01012341234',resDate: '2019/06/03', peopleCnt:2,  startDate: '2019/06/06', endDate: '2019/06/09', inTime: '14:00:00', outTime: '12:00:00', togle : false, beSmart:true, beBestRoom:false},
        { roomNo: 302, type: 25, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '2019/06/03', peopleCnt:2,  startDate: '2019/06/06', endDate: '2019/06/06', inTime: '14:00:00', outTime: '12:00:00', togle : false, beSmart:true, beBestRoom:false},
        { roomNo: 303, type: 30, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '2019/06/03', peopleCnt:2,  startDate: '2019/06/06', endDate: '2019/06/06', inTime: '14:00:00', outTime: '12:00:00', togle : false, beSmart:true, beBestRoom:false},
        { roomNo: 304, type: 30, pos: 'mountain', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '2019/06/03', peopleCnt:2,  startDate: '2019/06/06', endDate: '2019/06/06', inTime: '14:00:00', outTime: '12:00:00', togle : false, beSmart:true, beBestRoom:false},
        { roomNo: 305, type: 25, pos: 'mountain', smartTemp: 23.0, setTemp: 25.0, beReserved: true, subsName: '이영희', subsTel: '01056785678', resDate: '2019/06/01', peopleCnt:5,  startDate: '2019/06/08', endDate: '2019/06/10', inTime: '14:00:00', outTime: '12:00:00', togle : false, beSmart:true, beBestRoom:false},
        { roomNo: 306, type: 18, pos: 'mountain', smartTemp: 23.0, setTemp: 25.0, beReserved: true, subsName: '홍길동', subsTel: '01012345678', resDate: '2019/06/02', peopleCnt:4,  startDate: '2019/06/10', endDate: '2019/06/15', inTime: '12:00:00', outTime: '10:00:00', togle : false, beSmart:true, beBestRoom:false}
      ],
      roomInfo: {
        roomNo: 101,
        type: 18,
        pos: 'sea',
        setTemp:0,
        beReserved: false,
        peopleCnt:0,
        startDate: ' ',
        endDate: ' ',
        inTime: ' ',
        outTime: ' ',
        subsName: ' ',
        subsTel: ' '
      },
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
      this.roomInfo.smartTemp=0
      this.roomInfo.setTemp=0
      this.roomInfo.beReserved=false
      this.roomInfo.peopleCnt=0
      this.roomInfo.startDate=""
      this.roomInfo.endDate=""
      this.roomInfo.inTime=""
      this.roomInfo.outTime=""
      this.roomInfo.subsName=""
      this.roomInfo.subsTel=""
      this.startDate=new Date().toISOString().substr(0, 10)
      this.endDate=new Date().toISOString().substr(0, 10)
      this.inTime=null
      this.outTime=null
      this.roomInfo.beSmart=false
      this.roomInfo.beBestRoom=false
      for(var i=0;i<this.rooms.length;i++)
      {
        if(this.rooms[i].roomNo === roomNo)
        {
          this.roomInfo.roomNo=this.rooms[i].roomNo
          this.roomInfo.type = this.rooms[i].type
          this.roomInfo.pos = this.rooms[i].pos
          this.roomInfo.beSmart=this.rooms[i].beSmart
          this.roomInfo.beBestRoom=this.rooms[i].beBestRoom
          this.roomInfo.setTemp=this.rooms[i].setTemp
          this.roomInfo.smartTemp=this.rooms[i].smartTemp
          if(this.rooms[i].beReserved == false)
            break;
          this.roomInfo.beReserved = this.rooms[i].beReserved
          this.roomInfo.peopleCnt=this.rooms[i].peopleCnt
          this.startDate = new Date(this.rooms[i].startDate).toISOString().substr(0, 10)
          this.endDate = new Date(this.rooms[i].endDate).toISOString().substr(0, 10)
          this.roomInfo.startDate = this.rooms[i].startDate
          this.roomInfo.endDate = this.rooms[i].endDate
          this.inTime=this.rooms[i].inTime
          this.outTime=this.rooms[i].outTime
          this.roomInfo.inTime = this.rooms[i].inTime
          this.roomInfo.outTime = this.rooms[i].outTime
          this.roomInfo.subsName = this.rooms[i].subsName
          this.roomInfo.subsTel = this.rooms[i].subsTel
          break;
        }
      }
      this.$data.rsvRoomModal = true;

    },
    settingRoom: function (roomNo){
      this.roomInfo.beSmart=false
      this.roomInfo.beBestRoom=false
      this.roomInfo.smartTemp=0
      this.roomInfo.setTemp=0
      this.bestChkbox = false
      this.smartChkbox = false
      for(var i=0;i<this.rooms.length;i++)
      {
        if(this.rooms[i].roomNo === roomNo)
        {
          this.roomInfo.roomNo=this.rooms[i].roomNo
          this.roomInfo.type = this.rooms[i].type
          this.roomInfo.pos = this.rooms[i].pos
          this.bestChkbox = this.rooms[i].beBestRoom
          this.smartChkbox = this.rooms[i].beSmart
          this.roomInfo.smartTemp=this.rooms[i].smartTemp
          this.roomInfo.setTemp = this.rooms[i].setTemp
          break;
        }
      }
      this.$data.settingRoomModal = true;
    },
    saveReserveRoom(roomNo) {
      for(var i=0;i<this.rooms.length;i++)
      {
        if(this.rooms[i].roomNo === roomNo)
        {
          this.rooms[i].beReserved = true
          this.rooms[i].peopleCnt = this.roomInfo.peopleCnt
          this.rooms[i].startDate = this.startDate
          this.rooms[i].endDate = this.endDate
          this.rooms[i].inTime = this.inTime
          this.rooms[i].outTime = this.outTime
          this.rooms[i].subsName = this.roomInfo.subsName
          this.rooms[i].subsTel = this.roomInfo.subsTel
          break;
        }
      }
      this.$data.rsvRoomModal = false;
    },
    saveSettingRoom(roomNo) {
      for(var i=0;i<this.rooms.length;i++)
      {
        if(this.rooms[i].roomNo === roomNo)
        {
          this.rooms[i].beSmart = this.smartChkbox
          this.rooms[i].beBestRoom = this.bestChkbox
          this.rooms[i].setTemp = this.roomInfo.setTemp
          break;
        }
      }
      this.$data.settingRoomModal = false;
    },
    setTemp: function (roomNo){
      alert("setTemp " + roomNo)
    }
  }
}
</script>
