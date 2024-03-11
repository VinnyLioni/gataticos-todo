import { defineStore } from "pinia"

export const appStore = defineStore("appStore", {
    state: () => ({
        isOpen: false    
    }),
    actions: { 
        setOpen() {
            this.isOpen=!this.isOpen
        }
    }
})