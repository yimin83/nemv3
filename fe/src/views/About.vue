<template>
  <v-container grid-list-md text-xs-center>

    <v-textarea
      outline
      v-model="ta"
    ></v-textarea>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg2 xl1 v-for="room in rooms">
        <v-card>
          <div v-if="room.type == 18">
            <v-img
              :src="image1_src"
              height="130px"
            >
            </v-img>
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
                <v-text-field
                  label="예약일 시작"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                  v-model="roomInfo.beginDate"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="예약일 마지막"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                  v-model="roomInfo.endDate"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="체크인"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                  v-model="roomInfo.inTime"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="체크아웃"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                  v-model="roomInfo.outTime"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="예약자 이름"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                  v-model="roomInfo.subscriber"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="예약자 연락처"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                  v-model="roomInfo.subsTel"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="투숙객 수"
                  hint="example of persistent helper text"
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
                  hint="example of persistent helper text"
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
        { roomNo: 101, type: 18, pos: 'sea', setTemp: 25.0, beReserved: true, subscriber: '김철수', subsTel: '01012341234',resDate: '2019/06/03', peopleCnt:2,  beginDate: '2019/06/06', endDate: '2019/06/06', inTime: '14:00:00', outTime: '12:00:00', togle : false},
        { roomNo: 102, type: 25, pos: 'sea', setTemp: 25.0, beReserved: false, subscriber: '', subsTel: '', resDate: '2019/06/03', peopleCnt:2,  beginDate: '2019/06/06', endDate: '2019/06/06', inTime: '14:00:00', outTime: '12:00:00', togle : false},
        { roomNo: 103, type: 30, pos: 'sea', setTemp: 25.0, beReserved: false, subscriber: '', subsTel: '', resDate: '2019/06/03', peopleCnt:2,  beginDate: '2019/06/06', endDate: '2019/06/06', inTime: '14:00:00', outTime: '12:00:00', togle : false},
        { roomNo: 104, type: 30, pos: 'mountain', setTemp: 25.0, beReserved: false, subscriber: '', subsTel: '', resDate: '2019/06/03', peopleCnt:2,  beginDate: '2019/06/06', endDate: '2019/06/06', inTime: '14:00:00', outTime: '12:00:00', togle : false},
        { roomNo: 105, type: 25, pos: 'mountain', setTemp: 25.0, beReserved: true, subscriber: '이영희', subsTel: '01056785678', resDate: '2019/06/01', peopleCnt:5,  beginDate: '2019/06/08', endDate: '2019/06/10', inTime: '14:00:00', outTime: '12:00:00', togle : false},
        { roomNo: 106, type: 18, pos: 'mountain', setTemp: 25.0, beReserved: true, subscriber: '홍길동', subsTel: '01012345678', resDate: '2019/06/02', peopleCnt:4,  beginDate: '2019/06/10', endDate: '2019/06/15', inTime: '12:00:00', outTime: '10:00:00', togle : false}
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
      userName: 'asd'
    }
  },
  mounted () {
    //const a = { a: 1, b: 2}
    this.ta = JSON.stringify(this.$vuetify.breakpoint)
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
      for(var i=0;i<this.rooms.length;i++)
      {
        if(this.rooms[i].roomNo === roomNo)
        {
          this.roomInfo.type = this.rooms[i].type
          this.roomInfo.pos = this.rooms[i].pos
          if(this.rooms[i].beReserved == false)
            break;
          this.roomInfo.beReserved = this.rooms[i].beReserved
          this.roomInfo.peopleCnt = this.rooms[i].peopleCnt
          this.roomInfo.beginDate = this.rooms[i].beginDate
          this.roomInfo.endDate = this.rooms[i].endDate
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
