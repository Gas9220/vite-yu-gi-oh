<script>
import { store } from '../../store';
import axios from 'axios';

export default {
    name: 'Selector',
    data() {
        return {
            store,
            archetypes: []
        }
    },
    created() {
        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
            .then((response) => {
                this.archetypes = response.data;
            })
    }
}
</script>

<template>
    <div>
        <select class="form-select" v-model="store.selectedValue" @change="$emit('searchValue')">
            <option selected>Select Archetype</option>
            <option v-for="archetype in archetypes" :value="archetype.archetype_name">{{ archetype.archetype_name }}
            </option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
div {
    width: 200px;
    margin: 10px auto 0;
}
</style>