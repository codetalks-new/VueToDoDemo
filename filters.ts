import Vue from "vue"

import "./dates"

Vue.filter("friendlyDateTime", function(value:Date): string{
    if(!value){
        return ""
    }
    const elapsedSeconds = (Date.now() - value.getTime()) / 1000
    if(elapsedSeconds < 60){ return "刚刚" }
    if(elapsedSeconds < 300) {
         const minutes = elapsedSeconds / 60;
          return `${minutes} 分钟前`
    }
    if(value.isToday()){
        return value.toLocaleTimeString()
    }
    if(value.isYesterDay()){
        return "昨天 " +  value.toLocaleTimeString()
    }

    return value.toLocaleString()
})