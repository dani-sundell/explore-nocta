<template>
    <form class="global-input" @submit.prevent="$emit('someEvent', puzzleGuess)">
      <input class="answerInput type-secondary type--normal--mid" v-model="puzzleGuess" id="puzzleGuess" type="text" placeholder="Type Guess">
      <input class="answerButton type-secondary type--uppercase--small" type="submit" value="Check">
    </form>
</template>

<script>
export default {
  data() {
    return {
      puzzleGuess: ''
    }
  },
  props: {
    puzzleGuessInputed: String
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.puzzleGuess)
      console.log(this.puzzleGuess)
    },
    answerPuzzle() {
      if (this.puzzleGuess == 'nina') {
        console.log('nice')
      } else {
        console.log('sad')
      }
  }
}
}
</script>