import { reactive } from "vue";

export const store = reactive({
    cards:[],
    isLoading: true,
    selectedValue: ''
})