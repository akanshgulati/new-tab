<template>
    <button
        @click.stop="clicked"
        class="btn semi-bold basic"
        :class="computedClass"
        :title="title"
        :disabled="isDisabled">
        {{text}}
    </button>

</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {
            clicked() {
                this.$emit('clicked');
            }
        },
        props: {
            type: {
                type: String,
                default: 'basic'
            },
            text: {
                required: true
            },
            isDisabled: {
                default: false
            },
            theme: {
                default: "green"
            },
            size: String,
            title: {
                type: String
            }
        },
        computed: {
            computedClass() {
                return `${this.sizeClass} ${this.typeClass} ${this.theme}`;
            },
            sizeClass() {
                return this.size ? this.size : 'small'
            },
            typeClass() {
                switch (this.type) {
                    case 'primary' :
                        return 'primary';
                    case 'save':
                        return 'save';
                    case 'green':
                        return 'green';
                    case 'secondary':
                        return 'secondary';
                    default:
                        return ''
                }
            }
        }
    }
</script>
<style scoped>
    .btn {
        padding: 0 10px;
        color: white;
        margin-left: 0.3rem;
    }

    .small {
        height: 20px;
        line-height: 20px;
        padding: 0 5px;
        font-size: 0.9rem;
    }

    .medium {
        padding: 5px 10px;
        line-height: 20px;
        height: 29px;
    }

    .basic {
        background: none;
        color: #666;
        border: none;
        box-shadow: none;
    }

    .primary {
        background-color: rgba(33, 150, 243, 0.21);
        color: #2196F3;
    }

    .primary.blue {
        background-color: var(--blue);
        color: white;
    }

    .primary.green {
        background-color: var(--green);
        color: white;
    }

    .secondary.blue {
        color: var(--blue);
    }

    .secondary.green {
        color: var(--secondaryText);
        background-color: white;
    }

    .green {
        background-color: rgb(122, 184, 0);
        color: white;
    }

    .save {
        background-color: #2196f3;
        color: #fff;
    }
</style>