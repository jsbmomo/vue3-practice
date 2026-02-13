<template>
  <div>
    <h3>Tui Grid</h3>
    <hr/>

    <pre class="test">{{ str }}</pre>

    <div id="grid"></div>
  </div>
</template>

<script setup>
import Grid from 'tui-grid'
import { ref, onMounted } from 'vue';

onMounted(() => {
  console.log('mounted')
  // console.log(document.getElementById('grid'))
  initGrid()
  bindData()
})

let instance

const initGrid = () => {
  instance = new Grid({
    el: document.getElementById('grid'),
    columns: [
      {
        header: 'Name',
        name: 'name'
      },
      {
        header: 'Artist',
        name: 'artist'
      },
      {
        header: 'Release',
        name: 'release'
      },
      {
        header: 'Genre',
        name: 'genre'
      }
    ],
    data: []
  })
}

const bindData = () => {
  const list = []
  const today = new Date()

  const year = today.getFullYear()
  const month = today.getMonth() + 1

  for (let i = 0; i < 10; i++) {
    const tomarrow = today.getDate() + 1

    list.push({
        name: 'Beautiful Lies',
        artist: 'Birdy',
        release: `${year}.${month}.${tomarrow}`,
        genre: 'Pop'
      })
  }
}

const str = ref('&lt;div&gt;hello&lt;/div&gt;')
</script>

<style scoped>
.test {
  white-space: pre-line;
  word-break: break-word;
}
</style>