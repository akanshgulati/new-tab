<template>
  <div>
    <div class="widget relative pb-5">
      <section v-if="!auth" id="g-integrate">
        <div
          class="full-height flex flex-justify-center flex-flow-column flex-center ph-10">
          <img src="images/integrate_google_calendar.png" width="200px"
               alt="integrate google calendar">
          <p class="font-medium semi-bold font-light-black">Integrate with
            Google Calendar</p>
          <h5 class="btn btn-flat" @click="integration">Integrate</h5>
          <small class="error center" v-if="integrate.error">{{integrate.error}}</small>
          <a class="font-xsmall mar-0 pointer" @click="skip" v-if="!integrate.error"> Skip for
            now </a>
        </div>
      </section>
      <template v-else>
        <header class="flex widget-header flex-center relative">
          <h4 class="widget-heading mar-0">Google Calendar (G)</h4>
          <div class="button-section flex">
            <div class="tooltip tooltip-left" :rel="settings.isPinned ?'Stay Closed':'Stay Open'">
              <svg viewBox="0 0 19 19" width="1.2em" height="1.2em"
                   class="pointer" @click.stop="togglePin">
                <g transform="translate(1.000000, 0.000000)" stroke="#7d7d7d"
                   fill-rule="nonzero" stroke-width="1" fill="none">
                  <transition>
                    <rect v-if="settings.isPinned" stroke-opacity="0.801007699"
                          stroke-linecap="round"
                          transform="translate(10.960155, 10.960155) rotate(45.000000) translate(-10.960155, -10.960155)"
                          x="-3" y="9.96015511" width="23" height="1" rx="1"
                          fill="#7d7d7d"></rect>
                  </transition>
                  <path
                    d="M7.00281655,13.1229233 L5.02119635,14.6064885 C2.80029168,16.6351126 1.71102055,17.5657233 1.3663145,17.6821377 C0.717957794,17.9011014 0.313245364,17.422429 0.463782908,16.7897514 L0.554073071,16.6003974 L4.87282785,10.9929336 L1.94236285,8.0624593 C1.80229043,7.92389304 1.69177273,7.7573543 1.61501465,7.57223164 C1.46332845,7.2057818 1.46332845,6.7922182 1.61568559,6.42415545 C1.76866074,6.05821492 2.05960746,5.76687235 2.42515545,5.61468559 C2.60729352,5.53854591 2.80269457,5.5 3,5.5 C5.09770613,5.5 6.54093376,5.16919277 7.9623932,4.4677864 C9.04738884,3.92528859 9.87551287,2.99917711 10.6230457,1.44324406 C10.6996323,1.24318117 10.8110815,1.06381172 10.9632597,0.911642801 C11.5519462,0.328947954 12.4998328,0.33172768 13.0834588,0.918354316 L13.0835662,0.918462371 L17.0786457,4.93654123 C17.6652723,5.52016722 17.668052,6.46805376 17.0852572,7.0568413 C16.9348715,7.20868708 16.755096,7.32085792 16.5919941,7.38093962 C14.9978136,8.14453096 14.0717905,8.97257596 13.5301435,10.0577468 C12.8318981,11.453145 12.5,12.8996296 12.5,15 C12.5,15.1964255 12.4603765,15.3933891 12.3855335,15.570902 C12.2343297,15.9391806 11.9424432,16.2302739 11.5748445,16.3833144 C11.3916194,16.4599085 11.1961257,16.5 11,16.5 C10.8038743,16.5 10.6083806,16.4599085 10.4264925,16.3838711 C10.2399036,16.3065049 10.0731494,16.1962259 9.93844661,16.0585534 L7.00281655,13.1229233 Z"></path>
                </g>
              </svg>
            </div>
          </div>
        </header>
        <template v-if="integrate.errorTitle.length">
          <section
            id="g-cal-error"
            class="semi-bold flex flex-center flex-justify-space-between ph-20 pv-5">
            <span class="white-text semi-bold">{{integrate.errorTitle}}</span>
            <button v-if="integrate.reIntegration"
              class="re-integrate-btn btn-no-border btn btn-flat bg-white font-xsmall ph-10 flex flex-center">
              <svg viewBox="0 0 489.935 489.935" height="1em"
                   width="1em" style="enable-background:new 0 0 489.935 489.935;" class="mr-5">
                <g>
                  <path d="M278.235,33.267c-116.7,0-211.6,95-211.6,211.7v0.7l-41.9-63.1c-4.1-6.2-12.5-7.9-18.7-3.8c-6.2,4.1-7.9,12.5-3.8,18.7
                        l60.8,91.5c2.2,3.3,5.7,5.4,9.6,5.9c0.6,0.1,1.1,0.1,1.7,0.1c3.3,0,6.5-1.2,9-3.5l84.5-76.1c5.5-5,6-13.5,1-19.1
                        c-5-5.5-13.5-6-19.1-1l-56.1,50.7v-1c0-101.9,82.8-184.7,184.6-184.7s184.7,82.8,184.7,184.7s-82.8,184.7-184.6,184.7
                        c-49.3,0-95.7-19.2-130.5-54.1c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1c40,40,93.1,62,149.6,62
                        c116.6,0,211.6-94.9,211.6-211.7S394.935,33.267,278.235,33.267z"/>
                </g>
              </svg>
              Integrate
            </button>
          </section>
          <section
            class="flex flex-center ph-20 pv-5">
            <img src="/images/error_integration.png" alt="error in integration" width="45px" height="45px">
            <div class="ml-20 error semi-bold font-xsmall" v-html="integrate.errorDesc"/>
          </section>
        </template>
        <template v-else>
            <section id="g-cal-date-selection"
                     class="semi-bold flex flex-justify-space-between ph-20 pv-10">
                <div
                    class="flex flex-center flex-justify-center date-change-icon mr-10 pointer relative"
                    @click="prevDate()">
                    <svg width="5" height="11" viewBox="0 0 11 20" id="prev-arrow">
                        <use xlink:href="#icon-next-arrow"></use>
                    </svg>
                </div>
                <span>
                    {{displayDate}}
                </span>
                <div class="flex flex-center flex-justify-center date-change-icon pointer relative"
                     @click="nextDate()">
                    <svg width="5" height="11" viewBox="0 0 11 20" id="next-arrow">
                        <use xlink:href="#icon-next-arrow"></use>
                    </svg>
                </div>
          </section>
          <section
            id="g-cal-events"
            class="font-small"
            :style="{ 'max-height': maxHeightValue}">
            <transition mode="out-in">
              <div v-if="isLoading" class="font-center" style="height: 3.6rem">
                <img src="/images/loading.svg" alt="loading" width="25px">
                <p class="mar-0 font-xsmall">Loading...</p>
              </div>
              <ul v-else-if="events && events.length > 0" class="calendar-events mar-0">
                <li class="calendar-event pv-5" v-for="event in events"
                    :link="event.link" 
                    :class="{'pointer': event.link, 'current-event': event.isCurrentEvent}"
                    @click.stop="openEvent">
                    <div class="flex flex-justify-space-between flex-center">
                        <div :style="{'max-width': event.isCurrentEvent && event.hangoutLink ? '70%' : '100%'}">
                            <template>
                                <div v-if="event.from && event.from !== -1"
                                     class="event-duration font-xsmall semi-bold">
                                    {{ formatTime(event.from) }} - {{ formatTime(event.to) }}
                                </div>
                                <!-- HANDLING FULL DAY EVENTS-->
                                <div v-else class="event-duration font-xsmall semi-bold">
                                    Full Day
                                </div>
                            </template>
                            <!-- HANDLING PRIVATE EVENTS NOT ACCESSIBLE -->
                            <div class="event-title" :title="event.summary">
                                {{event.summary || 'Busy'}}
                            </div>
                        </div>
                        <div v-if="event.isCurrentEvent && event.hangoutLink" class="meet flex-no-shrink">
                            <Button
                                text="Join Meet"
                                type="primary"
                                theme="blue"
                                size="small"
                                v-on:clicked="openHangout(event.hangoutLink)"
                            />
                        </div>
                    </div>
                </li>
              </ul>
              <div
                v-else
                class="flex flex-center ph-20" style="height: 3.6rem;">
                <img src="/images/no_calendar_events.jpg" alt="no events" width="45px" height="45px">
                <p class="ml-20 font-xsmall mar-0">
                  <strong>All Caught Up!</strong><br>
                  No events scheduled for today.
                </p>
              </div>
            </transition>
          </section>
        </template>
      </template>
    </div>
  </div>
</template>
<script>
  import {getDate, getTime, convertISOToTime} from '../utils/ClockUtil'
  import {STORAGE, G_CAL} from '../utils/Constants'
  import {Get, Set, Remove} from '../utils/storage'
  import {Http, DecryptAuth} from '../utils/common'
  import {EventBus} from '../utils/EventBus'
  import Button from "../shared/Button.vue";
  const EVENT_HEIGHT = 3.6;
  const MAX_EVENTS = 4;

  export default {
    data() {
      return {
        events: [],
        auth: DecryptAuth(Get(STORAGE.G_CAL_AUTH)),
        lists: [],
        now: new Date(),
        isLoading: true,
        maxHeight: EVENT_HEIGHT,
        integrate: {
          errorTitle: '',
          errorDesc: '',
          reIntegration: false
        }
      }
    },
    props: ['settings'],
    mounted() {
      if (!this.auth) {
        return
      }

      this.refreshAuth().then(() => {
        this.getList().then(() => {
          this.isLoading = false
          this.scrollToCurrentEvent()
        }, (e) => {
          this.manageReject(e)
        })
      }, (e) => {
        this.manageReject(e)
      })
    },
    methods: {
      openEvent(e) {
        if (e && e.currentTarget) {
          const url = e.currentTarget.getAttribute('link')
          if (!url) {
            return
          }
          this.$ga.event('calendar', 'clicked', 'event');
          window.chrome.tabs.create({url: url, active: true})
        }
      },
      manageReject(e){
        if (e.status > 400 && e.status < 500) {
          // call reset state when issue comes due to api
          this.resetState()
        } else {
          // call error state when issue comes due to unknown reason
          this.errorState()
        }
        this.$ga.event('calendar', 'error', e.status + navigator.onLine)
      },
      errorState() {
        if (!navigator.onLine) {
          this.integrate.errorTitle = "You seem offline!"
          this.integrate.errorDesc = 'Please try once you come online.'
          this.integrate.reIntegration = false
        } else {
          this.integrate.errorTitle = "Some error occurred!"
          this.integrate.errorDesc = "Please try in new tab or contact support with your authentication code."
          this.integrate.reIntegration = false
        }
      },
      resetState(){
        this.integrate.errorTitle = "Some error occurred!"
        this.integrate.errorDesc = "Integrate again or contact support with your authentication code."
        this.integrate.reIntegration = true
        Remove(STORAGE.G_CAL_AUTH)
      },
      skip(){
        this.settings.isPinned = false;
        EventBus.$emit('calendar', {message: 'close'})
        this.$ga.event('calendar', 'isSkipped')
      },
      togglePin() {
        if (this.settings) {
          this.settings.isPinned = !this.settings.isPinned
          this.$ga.event('calendar', 'isPinned', this.settings.isPinned)
        }
      },
      refreshAuth() {
        const self = this
        return new Promise((res, rej) => {
          let now = +new Date()
          if (!self.auth || !self.auth.expiry_date) {
            rej()
          }
          // when code is not expired
          if(now < self.auth.expiry_date){
            res();
            return;
          }
          // condition when auth code is expired and needs to be refreshed
          if (now >= self.auth.expiry_date) {
            let url

            url = G_CAL.URL.REFRESH
            Http(url, {
              method: 'POST',
              data: {
                code: Get(STORAGE.G_CAL_AUTH)
              }
            }).then((_res) => {
              Set(STORAGE.G_CAL_AUTH, _res.code)
              self.auth = DecryptAuth(_res.code)
              res()
            }, (error) => {
              // condition when auth token is not refreshed and some issue came up
              // we can make a error screen here.
              rej(error)
            })
          }
        })
      },
      get(url) {
        let headers = [
          {
            name: 'Authorization',
            value: this.tokenType + ' ' + this.authCode
          }]
        return Http(url, {headers})
      },
      getList() {
        return this.get(G_CAL.URL.LIST).then(data => {
          // only filtering those lists which are selected in google calendar
          this.lists = data.items.filter(list => list.selected)
          return this.getEvents()
        }).catch(e => this.manageReject(e))
      },
      sortEvents(events) {
        events = events.sort((a, b) => {
          return convertISOToTime(a.from) - convertISOToTime(b.from)
        })
        return events
      },
      scrollToCurrentEvent() {
        setTimeout(()=>{
          let currentTime = convertISOToTime()
          let index
          try {
            index = this.events.findIndex(event => {
              if (event.to !== -1) {
                let eventTo = convertISOToTime(event.to)
                return currentTime < eventTo
              }
            })
          } catch (e) {}

          if (!index || index <= 1) {
            return
          }
          document.querySelector('#g-cal-events').scroll({
            top: (index - 1) * document.querySelector('.calendar-event').offsetHeight,
            left: 0,
            behavior: 'smooth'
          })
        }, 500)

      },
      getEvents() {
        let promises = this.eventsUrls.map(eventsUrl => this.get(eventsUrl))

        return Promise.all(promises).then((values) => {
          let events = this.extractEventsFromResponse(values)
          events = this.processEventsResponse(events)
          events = this.sortEvents(events)
          // in case no event is present, then we take inner math.max for it to add minimum height
          // then we take math.min in case events are more than 4
          this.maxHeight = events.length > 0 ? Math.min(events.length * EVENT_HEIGHT, EVENT_HEIGHT * MAX_EVENTS) :
            EVENT_HEIGHT * 2
          this.events = events
          return true
        }).catch(e => this.manageReject(e))
      },
      extractEventsFromResponse(events) {
        let _events = []
        for (let i = 0; i < events.length; i++) {
          _events = _events.concat(events[i].items)
        }
        return _events
      },
      processEventsResponse(events) {
        let processedEvents = []
        let processedEventIds = []
        for (let i = 0; i < events.length; i++) {
          let event = events[i]
          // currently we hide repetitive events
          // we show only confirmed events
          if (event &&
            processedEventIds.indexOf(event.iCalUID) === -1 &&
            event.status === 'confirmed') {
            processedEventIds.push(event.iCalUID)
            const start = new Date(event.start.dateTime);
            const end = new Date(event.end.dateTime);
            const now = new Date();
            const isCurrentEvent = start <= now && now <= end;
              
            processedEvents.push({
              id: event.id,
              from: event.start && (event.start.dateTime) || -1,
              to: event.end && (event.end.dateTime) || -1,
              summary: event.summary,
              link: event.htmlLink,
              hangoutLink: event.hangoutLink,
              isCurrentEvent
            })
          }
        }
        return processedEvents
      },
      formatTime(date) {
        if (!date) {
          return
        }
        const time = getTime(date)
        return time.hrs + ':' + time.min + (time.unit ? time.unit : '')
      },
      getEventsUrl(listId) {
        if (!listId) {
          return
        }
        return G_CAL.URL.BASE + 'calendars/' + encodeURIComponent(listId) +
          '/events?timeMax=' + getDate(this.nextDateTimeStamp)['iso'] +
          '&timeMin=' + this.currentDate.iso +
          '&orderBy=startTime&singleEvents=true&fields=items(id,status,start,end,summary,iCalUID,htmlLink,hangoutLink)'
      },
      nextDate() {
        this.isLoading = true
        this.now = new Date(this.now.getTime() + 86400000)
        this.getEvents().then(() => {
          this.scrollToCurrentEvent()
          this.isLoading = false
        })
        this.$ga.event('calendar', 'clicked', 'nextDate')
      },
      prevDate() {
        this.isLoading = true
        this.now = new Date(this.now.getTime() - 86400000)
        this.getEvents().then(() => {
          this.scrollToCurrentEvent()
          this.isLoading = false
        })
        this.$ga.event('calendar', 'clicked', 'prevDate')
      },
      integration() {
        Set(STORAGE.CURRENT_CUSTOMIZATION_TAB, 'clock')
        EventBus.$emit('app', {message: 'OpenCustomize'});
        this.$ga.event('calendar', 'clicked', 'integrate')
        chrome.tabs.create({
          url: G_CAL.URL.INTEGRATION_SUBTLE,
          active: true
        })
      },
        openHangout(url) {
            this.$ga.event('calendar', 'clicked', 'meetlink');
            window.chrome.tabs.create({url: url, active: true})
        },
    },
    computed: {
      authCode() {
        return this.auth.access_token
      },
      tokenType() {
        return this.auth.token_type
      },
      eventsUrls() {
        if (this.lists && this.lists.length > 0) {
          const self = this
          return this.lists.map(list => {
            return self.getEventsUrl(list.id)
          })
        }
      },
      currentDateTimeStamp() {
        this.now.setHours(0, 0, 0, 0)
        return this.now.getTime()
      },
      currentDate() {
        return getDate(this.currentDateTimeStamp)
      },
      nextDateTimeStamp() {
        return this.currentDateTimeStamp + 86400000
      },
      maxHeightValue() {
        return this.maxHeight + 'rem'
      },
        displayDate() {
            const now = new Date();
            if (this.now.getMonth() === now.getMonth() && this.now.getDate() === now.getDate()) {
                return "Today";
            }
            return `${this.currentDate.day}, ${this.currentDate.month} ${this.currentDate.date}`

        }
    },
    components: {
      Button
    }
  }
</script>
<style>
  #next-arrow, #prev-arrow {
    fill: #333;
    stroke: #333;
    width: 10px; 
    height: 10px;
    position: absolute;
  }
  #next-arrow {
      left: 6px;
  }
  #prev-arrow {
    left: 4px;
    transform: rotate(180deg);
  }

  .date-change-icon {
    border-radius: 50%;
    width: 20px;
    height: 20px;
    transition: background 0.3s ease-in;
    background: #EEEEEE;
  }

  .date-change-icon:hover {
    background: #e3e3e3;
  }

  .calendar-events {
    overflow-y: auto;
    transition: max-height 0.2s ease-out;
  }

  .current-event {
      border-left: 5px solid var(--blue);
      background-color: var(--blueBg);
  }

  .calendar-event {
    padding-left: 20px;
    padding-right: 20px;
    transition: background-color 0.3s ease;
  }

  .calendar-event:hover {
    background-color: rgba(204, 204, 204, 0.5);
  }

  .calendar-event:not(:last-of-type) {
    border-bottom: 1px solid rgba(204, 204, 204, 0.5);
  }

  #g-integrate {
    height: 20rem;
    max-height: 40vh;
  }

  #g-cal-error {
    background: #d63333;
  }
  .re-integrate-btn {
    border: none;
    line-height: 1.5rem;
    height: 1.5rem;
  }
  #g-cal-events {
    overflow-y: auto;
  }
  .event-title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .meet button {
      height: 1.75rem !important;
      padding: 0 10px !important;
      border-radius: 4px;
  }
</style>
