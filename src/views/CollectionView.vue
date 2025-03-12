<template>
    <input type="text" v-model="searchTerm" placeholder="Enter search term..">
    <button @click="performSearch">Search</button>
    <CollectionsComponent v-if="searchPerformed"
    :collectionQuery="searchTerm"/>
</template>

<script>
import CollectionsComponent from '../components/CollectionsComponent.vue'

export default {
    components: {
        CollectionsComponent
    },
    data() {
        return {
            searchTerm: '',
            searchPerformed: false
        }
    },
    methods: {
        performSearch() {
            if (this.searchTerm.trim() !== '') {
                this.searchPerformed = true;
            }
        }
    }
}

</script>

<style>

</style>