<template>
    <transition>
        <Todos v-if="type === TodosType.DEFAULT && showTodosSection" :settings="settings" key="default"/>
        <WunderlistTodos v-else-if="type === TodosType.WUNDERLIST && showTodosSection" :settings="settings"
                         key="wunderlist"/>
        <TodoistTodos v-else-if="type === TodosType.TODOIST && showTodosSection" :settings="settings" key="todoist"/>
    </transition>
</template>
<script>
    import Todos from './Todos.vue'
    import WunderlistTodos from './WunderlistTodos.vue'
    import TodoistTodos from './TodoistTodos.vue'

    import {TodosType} from '../constants/Todos'
    import {EventBus} from '../utils/EventBus'
    import {MessageTypeEnum, TodoWrapperMessage} from '../constants/Message';

    export default {
        props: ['type', 'settings'],
        data() {
            return {
                TodosType,
                showTodosSection: true
            }
        },
        mounted() {
            const self = this;
            EventBus.$on(MessageTypeEnum.TODO_WRAPPER, e => {
                if (e.message === TodoWrapperMessage.REFRESH) {
                    this.showTodosSection = false;
                    setTimeout(() => {
                        self.showTodosSection = true;
                    }, 100)
                }
            })
        },
        components: {
            Todos,
            WunderlistTodos,
            TodoistTodos
        }
    }
</script>
<style>
    #todo {
        background-color: rgba(255, 255, 255, 0.9);
    }

    #todo {
        height: 100%;
        border: 0;
        resize: none;
        font-size: 0.9rem;
        overflow-y: auto;
        flex: 1;
        border-radius: 0 0 3px 3px;
    }

    #todos ::-webkit-input-placeholder {
        color: #666;
    }

    .todo-list-heading {
        font-weight: 500;
        font-size: 1rem;
        padding: 1rem 0.2rem 0 1.4rem;
    }

    #todos [type="checkbox"] + label {
        height: auto !important;
    }

    #todos [type="checkbox"] + label:after {
        border-radius: 50%;
        pointer-events: all !important;
        top: 3px;
    }

    #todos [type="checkbox"].filled-in:checked + label:before {
        top: 3px;
    }

    #todos [type="checkbox"].filled-in:not(:checked) + label:after {
        border: 1px solid #999 !important;
    }

    #todos [type="checkbox"].filled-in:checked + label {
        text-decoration: line-through;
        color: #666;
    }

    #todos [type="checkbox"].filled-in:not(:checked) + label:after {
        height: 16px;
        width: 16px;
    }

    #todos [type="checkbox"] + label {
        line-height: 20px;
    }

    div.todos {
        padding-top: 0.7rem;
        margin: 0;
        overflow-y: auto;
    }

    div.todos ul li {
        padding: 0.4rem 0;
        border-bottom: 1px solid #f1f0f09e;
    }
    
</style>