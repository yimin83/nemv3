<template>
  <v-container grid-list-md text-xs-center>
    <v-divider class="my-3"></v-divider>
    <v-subheader>베스트룸</v-subheader>
    <v-layout row wrap justify-center>
      <v-flex
          v-for="room in rooms" v-if="room.beBestRoom == true"
          :key="room"
          xs10 sm6 md4 lg2 xl2
          text-xs-center
        >
        <v-item>
          <v-card>
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
            <v-card-title primary-title>
              <div style="margin:auto">
                <center><b>{{room.roomNo}}호</b> ({{room.type}}평형) </center>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn fab dark small left color="primary"  @click="reserveRoom(room.roomNo);">
                <v-icon dark>event_available</v-icon>
              </v-btn>
              <v-btn fab dark small left color="primary" @click="settingRoom(room.roomNo);">
                <v-icon dark>wb_sunny</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="upDownBestIcon(room.roomNo);">
                <v-icon>{{ room.bestTogle ? 'keyboard_arrow_up' : 'keyboard_arrow_down'  }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-slide-y-transition>
              <v-card-text v-show="room.bestTogle">
                <div v-if="room.beReserved == false">
                  <span>
                    예약일 : - <br>
                    설정온도 : {{room.beSmart ? room.smartTemp:room.setTemp}} <sup>o</sup>C
                </span>
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
    <v-divider class="my-3"></v-divider>
    <v-subheader>3층</v-subheader>
    <v-divider class="my-1"></v-divider>
    <v-layout row wrap>
      <v-flex
          v-for="room in rooms" v-if="room.roomNo < 1501"
          :key="room"
          xs10 sm6 md4 lg2 xl2
        >
        <v-item>
          <v-card>
            <v-scroll-y-transition>
            <div v-if="room.roomN0 == 1501">
              <v-divider class="my-3"></v-divider>
            </div>
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
            <v-card-title primary-title>
              <div style="margin:auto">
                <center><b>{{room.roomNo}}호</b> ({{room.type}}평형) </center>
              </div>
            </v-card-title>
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
    <v-divider class="my-3"></v-divider>
    <v-subheader>5층</v-subheader>
    <v-divider class="my-1"></v-divider>
    <v-layout row wrap>
      <v-flex
          v-for="room in rooms" v-if="room.roomNo < 1601"
          :key="room"
          xs10 sm6 md4 lg2 xl2
        >
        <v-item>
          <v-card>
            <v-scroll-y-transition>
            <div v-if="room.roomN0 == 1501">
              <v-divider class="my-3"></v-divider>
            </div>
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
            <v-card-title primary-title>
              <div style="margin:auto">
                <center><b>{{room.roomNo}}호</b> ({{room.type}}평형) </center>
              </div>
            </v-card-title>
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
    <v-divider class="my-3"></v-divider>
    <v-subheader>6층</v-subheader>
    <v-divider class="my-1"></v-divider>
    <v-layout row wrap>
      <v-flex
          v-for="room in rooms" v-if="room.roomNo >= 1601"
          :key="room"
          xs10 sm6 md4 lg2 xl2
        >
        <v-item>
          <v-card>
            <v-scroll-y-transition>
            <div v-if="room.roomN0 == 1501">
              <v-divider class="my-3"></v-divider>
            </div>
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
            <v-card-title primary-title>
              <div style="margin:auto">
                <center><b>{{room.roomNo}}호</b> ({{room.type}}평형) </center>
              </div>
            </v-card-title>
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
    <v-dialog v-model="rsvRoomModal" persistent max-width="500px">
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
                  hint=''
                  persistent-hint
                  required
                  v-model="roomInfo.subsName"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="예약자 연락처"
                  hint=''
                  persistent-hint
                  required
                  v-model="roomInfo.subsTel"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="투숙객 수"
                  hint=''
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
          <div v-if="roomInfo.beReserved == false">
            <v-btn color="blue darken-1" flat @click="saveReserveRoom(roomInfo.roomNo)">예약</v-btn>
          </div>
          <div v-else>
            <v-btn color="blue darken-1" flat @click="cancelReserveRoom(roomInfo.roomNo)">예약취소</v-btn>
          </div>
          <v-btn color="blue darken-1" flat @click.native="rsvRoomModal = false">닫기</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="settingRoomModal" persistent  max-width="500px">
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
                    hint=''
                    persistent-hint
                    required
                    v-model="roomInfo.setTemp"
                  ></v-text-field>
                </div>
                <div v-else>
                  <v-text-field
                    label="스마트온도"
                    hint=''
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
// import SweetCalendar from 'vue-sweet-calendar'
// import 'vue-sweet-calendar/dist/SweetCalendar.css'
// import moment from 'moment'
// import format from 'date-fns/format'
import axios from 'axios'
export default {
  el: '#key-example',
  name: 'about',
  mounted () {
    axios.get('http://localhost:3000/api/rooms')
      .then((r) => {
        this.rooms = r.data.rooms
        console.log(r)
      })
      .catch((e) => {
        console.error(e.message)
      })
  },
  data () {
    return {
      show: false,
      rsvRoomModal: false,
      settingRoomModal: false,
      bestChkbox: false,
      smartChkbox: false,
      image1_src: require('../../images/18pyeong.jpg'),
      image2_src: require('../../images/25pyeong.jpg'),
      image3_src: require('../../images/30pyeong.jpg'),
      curTemp: 'username',
      roomTitle: '예약 정보',
      settingTitle: '설정',
      rooms: [],
      // rooms: [
      //   { roomNo: 1301, type: 18, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1302, type: 18, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1303, type: 18, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1304, type: 18, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1305, type: 18, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1306, type: 18, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1307, type: 18, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1308, type: 18, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1309, type: 25, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1310, type: 25, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1311, type: 25, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1312, type: 25, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1313, type: 25, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1314, type: 25, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1315, type: 25, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1316, type: 30, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1317, type: 30, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1318, type: 30, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1319, type: 30, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1320, type: 30, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1321, type: 30, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1322, type: 30, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1323, type: 30, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1324, type: 30, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1325, type: 30, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1501, type: 18, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1502, type: 18, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1503, type: 18, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1504, type: 18, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1505, type: 18, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1506, type: 18, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1507, type: 18, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1508, type: 18, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1509, type: 25, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1510, type: 25, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1511, type: 25, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1512, type: 25, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1513, type: 25, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1514, type: 25, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1515, type: 25, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1516, type: 30, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1517, type: 30, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1518, type: 30, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1519, type: 30, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1520, type: 30, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1521, type: 30, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1522, type: 30, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1523, type: 30, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1524, type: 30, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1525, type: 30, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1526, type: 30, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1601, type: 18, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1602, type: 18, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1603, type: 18, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1604, type: 18, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1605, type: 18, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1606, type: 18, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1607, type: 18, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1608, type: 18, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1609, type: 25, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1610, type: 25, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1611, type: 25, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1612, type: 25, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1613, type: 25, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1614, type: 25, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1615, type: 25, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1616, type: 30, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1617, type: 30, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1618, type: 30, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1619, type: 30, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1620, type: 30, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1621, type: 30, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1622, type: 30, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1623, type: 30, pos: 'mnt', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1624, type: 30, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1625, type: 30, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1626, type: 30, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false },
      //   { roomNo: 1627, type: 30, pos: 'sea', smartTemp: 23.0, setTemp: 25.0, beReserved: false, subsName: '', subsTel: '', resDate: '', peopleCnt: 0, startDate: '', endDate: '', inTime: '', outTime: '', bestTogle: false, togle: false, beSmart: true, beBestRoom: false }
      // ],
      roomInfo: {
        roomNo: 101,
        type: 18,
        pos: 'sea',
        setTemp: 0,
        beReserved: false,
        peopleCnt: 0,
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
  methods: {
    upDownIcon: function (roomNo) {
      for (var i = 0; i < this.rooms.length; i++) {
        if (this.rooms[i].roomNo === roomNo) {
          this.rooms[i].togle = !this.rooms[i].togle
          break
        }
      }
    },
    upDownBestIcon: function (roomNo) {
      for (var i = 0; i < this.rooms.length; i++) {
        if (this.rooms[i].roomNo === roomNo) {
          this.rooms[i].bestTogle = !this.rooms[i].bestTogle
          break
        }
      }
    },
    reserveRoom: function (roomNo) {
      this.roomInfo.roomNo = 0
      this.roomInfo.type = 0
      this.roomInfo.pos = ''
      this.roomInfo.smartTemp = 0
      this.roomInfo.setTemp = 0
      this.roomInfo.beReserved = false
      this.roomInfo.peopleCnt = 0
      this.roomInfo.startDate = ''
      this.roomInfo.endDate = ''
      this.roomInfo.inTime = ''
      this.roomInfo.outTime = ''
      this.roomInfo.subsName = ''
      this.roomInfo.subsTel = ''
      this.startDate = new Date().toISOString().substr(0, 10)
      this.endDate = new Date().toISOString().substr(0, 10)
      this.inTime = null
      this.outTime = null
      this.roomInfo.beSmart = false
      this.roomInfo.beBestRoom = false
      for (var i = 0; i < this.rooms.length; i++) {
        if (this.rooms[i].roomNo === roomNo) {
          this.roomInfo.roomNo = this.rooms[i].roomNo
          this.roomInfo.type = this.rooms[i].type
          this.roomInfo.pos = this.rooms[i].pos
          this.roomInfo.beSmart = this.rooms[i].beSmart
          this.roomInfo.beBestRoom = this.rooms[i].beBestRoom
          this.roomInfo.setTemp = this.rooms[i].setTemp
          this.roomInfo.smartTemp = this.rooms[i].smartTemp
          if (this.rooms[i].beReserved === false) { break }
          this.roomInfo.beReserved = this.rooms[i].beReserved
          this.roomInfo.peopleCnt = this.rooms[i].peopleCnt
          this.startDate = new Date(this.rooms[i].startDate).toISOString().substr(0, 10)
          this.endDate = new Date(this.rooms[i].endDate).toISOString().substr(0, 10)
          this.roomInfo.startDate = this.rooms[i].startDate
          this.roomInfo.endDate = this.rooms[i].endDate
          this.inTime = this.rooms[i].inTime
          this.outTime = this.rooms[i].outTime
          this.roomInfo.inTime = this.rooms[i].inTime
          this.roomInfo.outTime = this.rooms[i].outTime
          this.roomInfo.subsName = this.rooms[i].subsName
          this.roomInfo.subsTel = this.rooms[i].subsTel
          break
        }
      }
      this.$data.rsvRoomModal = true
    },
    settingRoom: function (roomNo) {
      this.roomInfo.beSmart = false
      this.roomInfo.beBestRoom = false
      this.roomInfo.smartTemp = 0
      this.roomInfo.setTemp = 0
      this.bestChkbox = false
      this.smartChkbox = false
      for (var i = 0; i < this.rooms.length; i++) {
        if (this.rooms[i].roomNo === roomNo) {
          this.roomInfo.roomNo = this.rooms[i].roomNo
          this.roomInfo.type = this.rooms[i].type
          this.roomInfo.pos = this.rooms[i].pos
          this.bestChkbox = this.rooms[i].beBestRoom
          this.smartChkbox = this.rooms[i].beSmart
          this.roomInfo.smartTemp = this.rooms[i].smartTemp
          this.roomInfo.setTemp = this.rooms[i].setTemp
          break
        }
      }
      this.$data.settingRoomModal = true
    },
    saveReserveRoom: function (roomNo) {
      for (var i = 0; i < this.rooms.length; i++) {
        if (this.rooms[i].roomNo === roomNo) {
          this.rooms[i].beReserved = true
          this.rooms[i].peopleCnt = this.roomInfo.peopleCnt
          this.rooms[i].startDate = this.startDate
          this.rooms[i].endDate = this.endDate
          this.rooms[i].inTime = this.inTime
          this.rooms[i].outTime = this.outTime
          this.rooms[i].subsName = this.roomInfo.subsName
          this.rooms[i].subsTel = this.roomInfo.subsTel
          break
        }
      }
      this.$data.rsvRoomModal = false
    },
    cancelReserveRoom: function (roomNo) {
      for (var i = 0; i < this.rooms.length; i++) {
        if (this.rooms[i].roomNo === roomNo) {
          this.rooms[i].beReserved = false
          this.rooms[i].peopleCnt = 0
          this.rooms[i].startDate = ''
          this.rooms[i].endDate = ''
          this.rooms[i].inTime = ''
          this.rooms[i].outTime = ''
          this.rooms[i].subsName = ''
          this.rooms[i].subsTel = ''
          break
        }
      }
      this.$data.rsvRoomModal = false
    },
    saveSettingRoom: function (roomNo) {
      for (var i = 0; i < this.rooms.length; i++) {
        if (this.rooms[i].roomNo === roomNo) {
          this.rooms[i].beSmart = this.smartChkbox
          this.rooms[i].beBestRoom = this.bestChkbox
          this.rooms[i].setTemp = this.roomInfo.setTemp
          break
        }
      }
      this.$data.settingRoomModal = false
    },
    setTemp: function (roomNo) {
      alert('setTemp ' + roomNo)
    }
  }
}
</script>
