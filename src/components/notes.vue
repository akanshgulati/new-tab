<template>
    <div id="notes" class="notes-arrow_box">
        <div v-if="!notesMeta.count" class="col s12 note full-height relative no-padding flex flex-justify-center flex-flow-column flex-center">
            <div>
                <img src="images/note_landing_page_icon.png">
            </div>
            <h5 class="btn btn-flat mt-15" v-on:click="createFirstNote">Create first note</h5>
        </div>
        <div v-if="notesMeta.count" class="full-height">
            <div class="note full-height no-padding relative flex-flow-column flex">
                <header class="flex widget-header flex-center">
                    <svg
                        class="pointer one-rem-height one-rem-width"
                         v-on:click="toggleNoteList"
                         viewBox="0 0 23 21"
                         version="1.1">
                        <g  stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="hamburger" transform="translate(0.000000, 2.000000)" stroke="#7d7d7d" stroke-width="4">
                                <path d="M0.132183908,0 L22.8678161,0" id="XMLID_6_"></path>
                                <polyline id="XMLID_9_" points="0.132183908 16.8 20.0697663 16.8 22.8678161 16.8"></polyline>
                                <path d="M0.132183908,8.4 L22.8678161,8.4" id="XMLID_8_"></path>
                            </g>
                        </g>
                    </svg>
                    <h4 class="widget-heading ml-10 mv-0">Notes (N)</h4>
                    <div class="button-section flex">
                        <div class="tooltip" rel="Create">
                            <svg v-if="sortedNoted.length < 10" class="pointer" v-on:click="createNote" width="1.3em" height="1.3em" viewBox="0 0 49 51" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="create_note" transform="translate(0.000000, -4.000000)" fill-rule="nonzero" fill="#7d7d7d">
                                        <polyline id="XMLID_5_" points="12.0936873 10.8107459 12.0936873 21.4530518 1.13730207 21.4530518"></polyline>
                                        <g id="Group" transform="translate(32.503764, 21.426374) rotate(15.000000) translate(-32.503764, -21.426374) translate(19.385379, 2.846686)">
                                            <path d="M24.5589684,3.61816066 L19.7169893,0.636528265 C18.0617081,-0.379683526 15.8884477,0.122838788 14.8637498,1.76441168 L14.5034165,2.33393697 L25.3359371,8.98956585 L25.6962705,8.42004056 C26.7209684,6.77846766 26.2029892,4.63437245 24.5589684,3.61816066 Z" id="XMLID_4_"></path>
                                            <path d="M1.80166664,22.66934 L1.82418747,22.6805071 C1.77914581,22.7475101 1.75662498,22.8256802 1.74536456,22.9038504 L0.045041666,36.5054543 C0.022520833,36.7176304 0.123864582,36.9298065 0.304031246,37.0526453 C0.495458326,37.1643169 0.731927073,37.1643169 0.912093737,37.0414781 L12.4427602,29.4813091 C12.5103227,29.4366405 12.5666248,29.3808046 12.6116665,29.3026345 L12.6341873,29.3138017 L24.547708,10.2514552 L13.7264477,3.59582634 L1.80166664,22.66934 Z M4.96584368,33.043634 L1.83544789,31.122882 L2.73628121,23.908895 L11.0802498,29.0457898 L4.96584368,33.043634 Z" id="Shape"></path>
                                        </g>
                                        <polygon id="XMLID_1_" points="36.4387078 30.4872863 35.7743432 30.0852684 34.3330099 31.0344772 34.3330099 51.8165667 2.26334372 51.8165667 2.26334372 21.4418846 11.868479 11.916295 27.7681871 11.916295 29.1644788 9.69402963 10.9338644 9.69402963 0.0112604165 20.5261773 0.0112604165 54.0499992 36.5738328 54.0499992 36.5738328 30.2527759"></polygon>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div class="tooltip" rel="Delete">
                            <svg v-on:click="deleteNote" class="pointer widget-header-icon" viewBox="0 0 30 36">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="delete_note" fill-rule="nonzero" fill="#7d7d7d">
                                        <polygon points="9.875 11.175 12.125 11.175 12.125 29.175 9.875 29.175" ></polygon>
                                        <polygon points="17.375 11.175 19.625 11.175 19.625 29.175 17.375 29.175" ></polygon>
                                        <polygon points="0.375 4.425 29.625 4.425 29.625 6.675 0.375 6.675" ></polygon>
                                        <path d="M20.55,5.55 L18.45,5.55 L18.45,3.3 C18.45,2.625 17.925,2.1 17.25,2.1 L12.75,2.1 C12.075,2.1 11.55,2.625 11.55,3.3 L11.55,5.55 L9.45,5.55 L9.45,3.3 C9.45,1.5 10.95,0 12.75,0 L17.25,0 C19.05,0 20.55,1.5 20.55,3.3 L20.55,5.55"></path>
                                        <path d="M21.75,35.925 L8.25,35.925 C6.45,35.925 4.875,34.425 4.725,32.625 L2.625,5.625 L4.875,5.475 L6.975,32.475 C7.05,33.15 7.65,33.675 8.25,33.675 L21.75,33.675 C22.425,33.675 23.025,33.075 23.025,32.475 L25.125,5.475 L27.375,5.625 L25.275,32.625 C25.125,34.5 23.55,35.925 21.75,35.925"></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div class="tooltip tooltip-left" :rel="isPinned?'Stay Closed':'Stay Open'">
                            <svg viewBox="0 0 19 19" class="pointer widget-header-icon" @click.stop="togglePin">
                                <g transform="translate(1.000000, 0.000000)" stroke="#7d7d7d" fill-rule="nonzero"
                                   stroke-width="1" fill="none">
                                    <transition>
                                        <rect stroke-opacity="0.801007699" stroke-linecap="round"
                                              transform="translate(10.960155, 10.960155) rotate(45.000000) translate(-10.960155, -10.960155)"
                                              x="-3" y="9.96015511" width="23" height="1" rx="1" fill="#7d7d7d"
                                              v-if="isPinned"></rect>
                                    </transition>
                                    <path d="M7.00281655,13.1229233 L5.02119635,14.6064885 C2.80029168,16.6351126 1.71102055,17.5657233 1.3663145,17.6821377 C0.717957794,17.9011014 0.313245364,17.422429 0.463782908,16.7897514 L0.554073071,16.6003974 L4.87282785,10.9929336 L1.94236285,8.0624593 C1.80229043,7.92389304 1.69177273,7.7573543 1.61501465,7.57223164 C1.46332845,7.2057818 1.46332845,6.7922182 1.61568559,6.42415545 C1.76866074,6.05821492 2.05960746,5.76687235 2.42515545,5.61468559 C2.60729352,5.53854591 2.80269457,5.5 3,5.5 C5.09770613,5.5 6.54093376,5.16919277 7.9623932,4.4677864 C9.04738884,3.92528859 9.87551287,2.99917711 10.6230457,1.44324406 C10.6996323,1.24318117 10.8110815,1.06381172 10.9632597,0.911642801 C11.5519462,0.328947954 12.4998328,0.33172768 13.0834588,0.918354316 L13.0835662,0.918462371 L17.0786457,4.93654123 C17.6652723,5.52016722 17.668052,6.46805376 17.0852572,7.0568413 C16.9348715,7.20868708 16.755096,7.32085792 16.5919941,7.38093962 C14.9978136,8.14453096 14.0717905,8.97257596 13.5301435,10.0577468 C12.8318981,11.453145 12.5,12.8996296 12.5,15 C12.5,15.1964255 12.4603765,15.3933891 12.3855335,15.570902 C12.2343297,15.9391806 11.9424432,16.2302739 11.5748445,16.3833144 C11.3916194,16.4599085 11.1961257,16.5 11,16.5 C10.8038743,16.5 10.6083806,16.4599085 10.4264925,16.3838711 C10.2399036,16.3065049 10.0731494,16.1962259 9.93844661,16.0585534 L7.00281655,13.1229233 Z"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </header>
                <div class="note-error" v-if="errorMessage">{{errorMessage}}</div>
                <section class="flex relative note-section flex-flow-column">
                    <div class="sidebar flex-flow-column flex" :class="{'show-sidebar': showSidebar && notesMeta.count}">
                        <transition-group name="flip-list" tag="ul" id="note-list" class="note-list flex flex-flow-column flex-center">
                                <li v-for="(note,index) in sortedNoted" class="flex flex-flow-column pointer" :class="{'active': isActiveNote(note.id)}"
                                    v-on:click="setCurrentNote(note.id); showSidebar = false;" v-bind:key="note.id">
                                    <p class="note-title" v-html="trimContent(note.content)"></p>
                                    <div class="note-data">{{note.createdOn | formatDate}}</div>
                                </li>
                            </transition-group>
                        </div>
                    <div id="note" contenteditable="true" v-html="currentNoteContent" @input="handler" v-on:click.stop="showSidebar = false"></div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    import _debounce from '../utils/throttle'
    import storage from '../utils/storage'
    import constants from '../utils/Constants'
    import {EventBus} from '../utils/EventBus';
    import {AppMessage, MessageTypeEnum} from '../constants/Message';

    export default {
        beforeCreate(){
            this.notesMeta = storage.get(constants.STORAGE.NOTES_META) || {count: 0, deletedNotes: [], createdNotes: []};
        },
        data () {
            return {
                input: '',
                notes: [],
                currentNote:'',
                currentNoteContent:'',
                notesMeta: this.notesMeta,
                errorMessage: null,
                showSidebar: false
            }
        },
        mounted(){
            this.isolateScroll('note');
            this.isolateScroll('note-list');
            document.execCommand("DefaultParagraphSeparator", false, "p");
            this.populateNotes();
            this.addNoteLimit('note');
            this.$ga.event('notes', 'open')
        },
        computed:{
            sortedNoted: function(){
                let notes = this.notes;
                notes.sort(function (a, b) {
                    return b.updatedOn - a.updatedOn;
                });
                return notes;
            },
            isPinned() {
                return this.settings && this.settings.isPinned;
            }
        },
        methods:{
            handler(e){
                this.debouncedInput(e, this);
                this.debouncedInputSync(this);
            },
            debouncedInput: _debounce((el, self) => {
                let content = el.target.innerHTML;
                if (content.length > 7000) {
                    content = content.slice(0, 7000);
                }
                self.currentNote.content = content;
                self.currentNote.updatedOn = +new Date();
                storage.setLocal('note-' + self.currentNote.id, self.currentNote);
            }, 1000),
            debouncedInputSync: _debounce(function(self){
                storage.chromeSync.set('note-' + self.currentNote.id, self.currentNote);
            }, 5000),
            addNoteLimit(element){
                let el = document.getElementById(element);
                let self = this;
                if(!el){
                    return;
                }
                let maxValue = 7000;
                el.onkeyup = function(e){
                    if (el.innerHTML.length > maxValue) {
                        self.errorMessage = 'Content limit reached for this note.';
                        e.preventDefault();
                    }else if(e.which === 27){
                        el.blur();
                    }else{
                        self.errorMessage = null;
                    }
                };

                el.onkeydown = function(e) {
                    if (e.which !== 8 && el.innerHTML.length > maxValue) {
                        self.errorMessage = 'Content limit reached for this note.';
                        e.preventDefault();
                    }
                };
            },
            getNoteTemplate(){
            //    let id = this.notesMeta.count + 1;
                let id;
                // Removing the id
                if (this.notesMeta.deletedNotes.length) {
                    id = Math.min(...this.notesMeta.deletedNotes);
                    this.notesMeta.deletedNotes.splice(this.notesMeta.deletedNotes.indexOf(id), 1);
                } else {
                    id = this.notesMeta.createdNotes.length + 1;
                }
                return {
                    id: id,
                    createdOn: +new Date(),
                    updatedOn: +new Date(),
                    content: 'New Note'
                }
            },
            sortNotes(){
                return this.notes.sort(function(a,b){
                    return  b.updatedOn - a.updatedOn;
                });
            },
            isActiveNote: function(id){
                return this.currentNote.id === id;
            },
            setCurrentNote(id){
                for (let i = 0; i < this.notes.length; i++) {
                    if (this.notes[i].id === id) {
                        this.currentNote = this.notes[i];
                        //this.currentNote.updatedOn = +new Date();
                        break;
                    }
                }
                this.errorMessage = null;
                const note = document.getElementById('note')
                const parser = new DOMParser()
                const parsed = parser.parseFromString(`<div>${this.currentNote.content}</div>`, `text/html`)
                const tag = parsed.getElementsByTagName(`body`)[0]
                note.innerHTML = ``
                note.appendChild(tag.firstChild)

                //document.getElementById("note").innerHTML = this.currentNote.content;
                this.$ga.event('notes', 'change', 'click')
            },
            trimContent(value){
                let ellipsis = '';
                value = value.replace(/<(?:.|\n)*?>/gm, ' ');
                if (!value.length || !value) {
                    return 'New Note';
                }
                if (value.length > 25) {
                    ellipsis = '...';
                }
                return value.slice(0, 25) + ellipsis;
            },
            populateNotes(){
                let note;
                for (let i = 0; i < this.notesMeta.createdNotes.length; i++) {
                    note = storage.get('note-' + this.notesMeta.createdNotes[i]);
                    if (note) {
                        this.notes.push(note)
                    }
                }
                if (this.notesMeta.createdNotes.length > 0 && this.notes.length > 0) {
                    this.sortNotes();
                    this.currentNote = this.notes[0];
                    this.currentNoteContent = this.currentNote.content;
                }
            },
            isolateScroll(elementId){
                let el = document.getElementById(elementId);
                if(!el){
                    return;
                }
                el.onmousewheel = function (e) {
                    el.scrollTop -= e.wheelDeltaY;
                    e = e || window.event;
                    if (e.preventDefault)
                        e.preventDefault();
                    e.returnValue = false;
                }
            },
            toggleNoteList(){
                this.showSidebar = !this.showSidebar
            },
            deleteNote(e){
                e.preventDefault();
                e.stopPropagation();
                if (!confirm('Are you sure you want to delete this note?')) {
                    return;
                }
                this.showSidebar = true;
                for (let j = 0; j < this.notes.length; j++) {
                    if (this.notes[j].id === this.currentNote.id) {
                        this.notes.splice(j, 1);
                        break;
                    }
                }
                storage.remove('note-' + this.currentNote.id);
                this.notesMeta.deletedNotes.push(this.currentNote.id);
                this.notesMeta.createdNotes.splice(this.notesMeta.createdNotes.indexOf(this.currentNote.id), 1);
                this.notesMeta.count--;

                if (this.notes.length > 0) {
                    this.currentNote = this.notes[0];
                    this.setCurrentNote(this.currentNote.id);
                }
                this.$ga.event('notes', 'delete')
            },
            createNote(e){
                e.stopPropagation();
                this.showSidebar = true;
                if(this.notes && this.notes.length > 9){
                    return;
                }
                let newNote = this.getNoteTemplate();
                this.notes.unshift(newNote);
                this.notesMeta.createdNotes.push(newNote.id);
                this.notesMeta.count++;
                storage.set('note-' + newNote.id, newNote);
                setTimeout(() => this.setCurrentNote(newNote.id), 100);
                this.$ga.event('notes', 'create')
            },
            createFirstNote(e){
                let self = this;
                this.createNote(e);
                this.showSidebar = true;
                this.$ga.event('notes', 'first');
                setTimeout(()=>{
                    self.isolateScroll('note');
                },100);
            },
            togglePin() {
                EventBus.$emit(MessageTypeEnum.APP, {
                    message: AppMessage.PIN,
                    widget: 'notes',
                    value: !this.isPinned
                });
            }
        },
        props:['settings'],
        watch:{
          notesMeta: {
              handler: function (newValue){
                  storage.set(constants.STORAGE.NOTES_META, newValue);
              },
              deep: true
          }
        },
        filters:{
            formatDate(value){
                if (!value) {
                    return;
                }
                let date = new Date(value);
                let now = +new Date();
                return now - date >= 86400000 ? date.toLocaleDateString() : date.toLocaleTimeString();
            }
        },
        beforeDestroy(){
            this.$ga.event('notes', 'close')
        }
    };
</script>
