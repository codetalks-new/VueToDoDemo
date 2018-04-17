declare global{
    export interface Date{
        isToday():Boolean
        isYesterDay():Boolean
        isSameDate(date:Date):Boolean
    }
}

Date.prototype.isSameDate = function(date:Date):Boolean{
    return date && date.getFullYear() == this.getFullYear()
    && date.getMonth() == this.getMonth() && date.getDate() == date.getDate()
}

Date.prototype.isToday = function():Boolean{
    return this.isSameDate(new Date())
}

Date.prototype.isYesterDay = function():Boolean{
    const endDate = new Date(this.getTime())
    endDate.setHours(23,59,59,999)

    const todayStartDate = new Date()
    todayStartDate.setHours(0, 0, 0, 0)
 
    const millis = todayStartDate.getTime() - endDate.getTime()
    return (millis > 0 && millis < (24 * 60 * 60 * 1000))

}

export {}