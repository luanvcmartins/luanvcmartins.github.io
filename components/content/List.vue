<template>
  <ContentList v-slot="{ list }" path="/posts" :query="{ where: [{title: {'$ne': 'Posts'}}], sort: {date: -1} }">

    <card
      v-for="article in list" :key="article._path"
      :to="article._path"
      :title="article.title"
      :description="article.pretty_date"
    >
      {{article.description}}
    </card>
  </ContentList>
</template>

<script setup lang="ts">

defineComponent({
  name: 'List',
})
</script>

<style scoped>

</style>