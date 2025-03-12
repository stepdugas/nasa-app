<template>
    <h1>Collection Items: </h1>
    <h2 v-for="item in collectionItems" :key="item.data[0].nasa_id">{{ item.data[0].title }}</h2>

</template>

<script>
import service from '../services/NasaService.js'

export default {
    data() {
        return {
            collectionItems: []
        }
    },
    props: {
        collectionQuery: String

    },
    created() {
        service.getCollectionItems(this.collectionQuery)
        .then(response => {
    this.collectionItems = response.data.collection.items;
})

    }
}

</script>

<style>

</style>