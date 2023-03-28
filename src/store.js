import { reactive } from "vue";

export const store = reactive({
    cards:[],
    cardsFounded: 0,
    isLoading: true,
    selectedValue: ''
})