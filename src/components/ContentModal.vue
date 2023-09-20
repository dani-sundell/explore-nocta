<script setup>

</script>

<template>
            <div class="module--image" v-if="renderBigImg===true">
                <div class="module--img">
                    <img :src="bigImg" />
                </div>
                <div class="module--type">
                    <p><slot name="body--content--1"></slot></p>
                </div>
            </div>

            <!-- paragraph modal -->

            <div class="module--alignment" v-if="renderBigImg!=true">
                <div class="module--content--container">
                    <div class="module--headline--container" v-if="renderHeadline===true">
                        <h2 class="module--headline type-primary">{{ title }}</h2>
                        <div class="module--line"></div>
                    </div>
                    <div class="module--body type-body">
                        <slot name="body--content--1"></slot>
                        <div class="module--inlineimg" v-if="renderInlineImg===true"><img :src="inlineImg" /></div>
                        <slot name="body--content--2"></slot>
                    </div>
                    <slot name="puzzleChecker" v-if="renderChecker===true" class="module--decision--type"></slot>
                        <div class="module--decision--container">
                            <slot name="decision--1" v-if="renderDecision1===true"></slot>
                            <slot name="decision--2" v-if="renderDecision2===true"></slot>
                            <slot name="decision--3" v-if="renderDecision3===true"></slot>
                        </div>
                </div>
            </div>
</template>

<script>
export default {
    data: () => ({
    dialog: false,
    puzzleAnswerInput: ''
    }),
    props: {
    title: String,
    renderBigImg: Boolean,
    renderInlineImg: Boolean,
    renderHeadline: Boolean,
    renderChecker: Boolean,
    bigImg: String,
    inlineImg: String,
    renderDecision1: Boolean,
    renderDecision2: Boolean,
    renderDecision3: Boolean
    },
    methods: {
        showModule() {
        this.dialog = true;
        },
        puzzleWasAnswered() {
            this.puzzleAnswerInput = true;
        }
    }
}
</script>
