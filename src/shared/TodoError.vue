<template>
    <div class="full-height bg-white error-todo">
        <div class="flex flex-flow-column flex-center full-height flex-justify-center">
            <template v-if="errorState === 'reIntegrate'">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 294.951 294.951"
                     enable-background="new 0 0 294.951 294.951" width="4em">
                    <g>
                        <path
                            d="m147.475,103.102c-5.22,0-8.701,3.48-8.701,8.701v62.644c0,5.22 3.48,8.701 8.701,8.701 5.22,0 8.701-3.48 8.701-8.701v-62.644c0-5.221-3.481-8.701-8.701-8.701z"/>
                        <path
                            d="m152.695,212.73c-3.48-3.48-8.701-3.48-12.181,0-1.74,1.74-1.74,5.22-1.74,6.96 0,3.48 0,5.22 1.74,6.96 1.74,1.74 5.22,1.74 6.96,1.74 1.74,0 5.22,0 3.48-1.74 1.74-1.74 3.48-5.22 3.48-6.96 0.002-3.48 0.002-5.22-1.739-6.96z"/>
                        <path
                            d="m288.425,214.47l-102.667-179.232c-6.96-13.921-22.621-22.621-38.283-22.621-15.661,0-29.582,8.701-38.283,22.621l-102.667,179.232c-8.701,13.921-8.701,31.322-5.32907e-15,45.243 6.96,13.921 22.621,22.621 38.283,22.621h205.334c17.401,0 31.322-8.701 38.283-22.621 8.701-13.921 8.701-31.322 0-45.243zm-13.921,38.283c-3.48,8.701-12.181,13.921-22.621,13.921h-207.075c-8.701,0-17.401-5.22-22.621-13.921-5.22-8.701-5.22-19.141 0-27.842l102.667-179.233c3.48-8.701 12.181-13.921 22.621-13.921 10.441,0 19.141,5.22 24.362,13.921l102.667,179.232c5.221,8.701 5.221,19.142 0,27.843z"/>
                    </g>
                </svg>
                <p class="font-center">
                    <span class="block semi-bold">Something went wrong</span>
                    <small>Please re-integrate to fix the issue.</small>
                </p>
                <button class="flex flex-center flex-justify-center font-black font-center bg-white sync-btn">
                    <svg width="18px" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 85.168 85.168" style="enable-background:new 0 0 85.168 85.168;" xml:space="preserve">
                    <g>
                        <path d="M61.696,14.999l-4.126,4.457c8.806,5.774,13.923,16.353,12.184,27.41c-1.146,7.288-5.063,13.694-11.027,18.037
                            c-5.206,3.791-11.43,5.615-17.777,5.252l1.09-1.144c-0.021-0.001-0.044,0.002-0.065,0.001l4.129-4.332l-3.813-3.639l-8.188,8.596
                            l-0.002-0.003l-3.533,3.71l3.811,3.636l0.002-0.001l8.593,8.189l3.536-3.71l-5.565-5.302c7.616,0.36,15.066-1.853,21.315-6.403
                            c7.261-5.286,12.028-13.084,13.424-21.956C77.741,34.694,71.897,22.14,61.696,14.999z"/>
                        <path d="M15.415,38.302c1.146-7.288,5.063-13.694,11.027-18.037c5.206-3.791,11.43-5.615,17.777-5.252l-1.09,1.144
                            c0.021,0.001,0.044-0.002,0.065-0.001l-4.129,4.332l3.813,3.639l8.188-8.596l0.002,0.003l3.533-3.71L50.79,8.188l-0.002,0.001
                            L42.195,0l-3.536,3.71l5.565,5.302c-7.616-0.36-15.066,1.853-21.315,6.403c-7.261,5.286-12.028,13.084-13.424,21.956
                            C7.425,50.475,13.27,63.029,23.47,70.17l4.126-4.457C18.793,59.937,13.676,49.359,15.415,38.302z"/>
                    </g>
                </svg>
                    <span class="ml-5 semi-bold text-blue" @click="reIntegrate">Re-Integrate</span>
                </button>
            </template>
            <template v-if="errorState === 'offline'">
                <p class="bg-red semi-bold white-text full-width flex-start no-internet font-small mar-0 ph-10">
                    No internet connection
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="5em">
                    <path d="M 4.2148438 2.359375 L 2.8007812 3.7734375 L 13.785156 14.757812 C 13.764706 14.756586 13.74509 14.75106 13.724609 14.75 L 18.076172 19.101562 L 18.089844 19.0625 L 37.027344 38 L 36.972656 38 L 38.972656 40 L 39.027344 40 L 46.013672 46.986328 L 47.427734 45.572266 L 41.818359 39.962891 C 46.391069 39.594387 50 35.764711 50 31.099609 C 50 26.539609 46.554906 22.768859 42.128906 22.255859 C 42.138906 22.064859 42.142578 21.878313 42.142578 21.695312 C 42.142578 14.444312 36.243188 8.546875 28.992188 8.546875 C 24.113273 8.546875 19.654533 11.299022 17.396484 15.541016 L 4.2148438 2.359375 z M 28.992188 10.546875 C 35.140188 10.546875 40.142578 15.547313 40.142578 21.695312 C 40.142578 22.111313 40.112875 22.550125 40.046875 23.078125 L 39.908203 24.199219 L 41.039062 24.199219 L 41.130859 24.197266 C 44.921859 24.215266 48 27.304609 48 31.099609 C 48 34.904609 44.903656 38 41.097656 38 L 39.855469 38 L 18.880859 17.025391 C 20.68992 13.11637 24.648888 10.546875 28.992188 10.546875 z M 11.208984 15.066406 C 8.5369844 15.928406 6.5583281 18.347906 6.3613281 21.253906 C 2.5803281 22.629906 5.9211895e-16 26.258078 0 30.330078 C 0 35.662078 4.3379219 40 9.6699219 40 L 36.146484 40 L 34.146484 38 L 9.6699219 38 C 5.4409219 38 2 34.559078 2 30.330078 C 2 26.897078 4.3139531 23.860312 7.6269531 22.945312 L 8.3867188 22.736328 L 8.3457031 21.732422 C 8.3457031 19.122422 10.360109 16.997531 12.912109 16.769531 L 11.208984 15.066406 z"/>
                </svg>
                <p class="font-center">
                    <span class="block semi-bold">You seem offline!</span>
                    <small>Try again once come online.</small>
                </p>
            </template>
            <template v-if="errorState === 'serverIssue'">
                <p class="bg-red semi-bold white-text full-width flex-start no-internet font-small mar-0 ph-10">
                    Server Issue
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="5em">
                    <path d="M 4.2148438 2.359375 L 2.8007812 3.7734375 L 13.785156 14.757812 C 13.764706 14.756586 13.74509 14.75106 13.724609 14.75 L 18.076172 19.101562 L 18.089844 19.0625 L 37.027344 38 L 36.972656 38 L 38.972656 40 L 39.027344 40 L 46.013672 46.986328 L 47.427734 45.572266 L 41.818359 39.962891 C 46.391069 39.594387 50 35.764711 50 31.099609 C 50 26.539609 46.554906 22.768859 42.128906 22.255859 C 42.138906 22.064859 42.142578 21.878313 42.142578 21.695312 C 42.142578 14.444312 36.243188 8.546875 28.992188 8.546875 C 24.113273 8.546875 19.654533 11.299022 17.396484 15.541016 L 4.2148438 2.359375 z M 28.992188 10.546875 C 35.140188 10.546875 40.142578 15.547313 40.142578 21.695312 C 40.142578 22.111313 40.112875 22.550125 40.046875 23.078125 L 39.908203 24.199219 L 41.039062 24.199219 L 41.130859 24.197266 C 44.921859 24.215266 48 27.304609 48 31.099609 C 48 34.904609 44.903656 38 41.097656 38 L 39.855469 38 L 18.880859 17.025391 C 20.68992 13.11637 24.648888 10.546875 28.992188 10.546875 z M 11.208984 15.066406 C 8.5369844 15.928406 6.5583281 18.347906 6.3613281 21.253906 C 2.5803281 22.629906 5.9211895e-16 26.258078 0 30.330078 C 0 35.662078 4.3379219 40 9.6699219 40 L 36.146484 40 L 34.146484 38 L 9.6699219 38 C 5.4409219 38 2 34.559078 2 30.330078 C 2 26.897078 4.3139531 23.860312 7.6269531 22.945312 L 8.3867188 22.736328 L 8.3457031 21.732422 C 8.3457031 19.122422 10.360109 16.997531 12.912109 16.769531 L 11.208984 15.066406 z"/>
                </svg>
                <p class="font-center">
                    <span class="block semi-bold">Some issue with integration service!</span>
                    <small>
                        Contact <a href="mailto:support@subtletab.com" title="click here to e-mail">support</a> with
                        authentication code
                    </small>
                </p>
            </template>
        </div>
    </div>
</template>
<script>
    import {EventBus} from "../utils/EventBus";
    import {Set} from '../utils/storage';
    import {STORAGE} from '../utils/Constants';

    export default {
        props: {
            errorState: {
                type: String,
                default: 'offline'
            }
        },
        methods: {
            reIntegrate() {
                Set(STORAGE.CURRENT_CUSTOMIZATION_TAB, 'todo');
                EventBus.$emit('app', {message: 'OpenCustomize'});
            }
        }
    }
</script>
<style>
    .error-todo {
        background-color: rgba(255, 255, 255, 0.8);
    }

    .sync-btn {
        width: 11rem;
        height: 3rem;
        border-radius: 21px;
        box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2)
    }

    .sync-btn:focus {
        background-color: #fff;
    }

    .no-internet {
        position: absolute;
        top: 0;
    }
</style>