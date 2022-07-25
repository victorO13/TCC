const dateFormat = {
    formatDateToStringBr(date) {
        let parts = date.split("-");
        return parts[2] +'-'+parts[1]+'-'+parts[0]
    },
    formatDate(date) {
        let parts = date.split("T");
        parts = parts[0].split('-')
        return parts[2]+'/'+parts[1]+'/'+parts[0]
    },
    formatDateToStringNoBr(date) {
        let parts = date.split("/");
        return parts[2] +'-'+parts[1]+'-'+parts[0]
    },
    getDateBrToString(date) {
        let parts = date.split("-")
        return parts[0]
    },
    getDateNoBrToString(date) {
        let parts = date.split("-")
        return parts[2]
    },
    toDate(dateNoBr){
        var parts = dateNoBr.split("-");
        return new Date(parts[2], parts[1] - 1, parts[0])
    },
    getDayDateNoBrString(date){
        let parts = date.split("-")
        parts = parts[2].split('T')
        return parts[0]
    },
    getDayDateBrString(date){
        let parts = date.split("-");
        return parts[0]
    },
    getMont(dateNoBr){
        
        var parts = dateNoBr.split("-")
        let day = parts[2]
        let month = parts[1]
        let year = parts[0]
        let meses = [
            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez"
          ]
          
        return meses[month-1]
    },
    getHoraMin(dateNoBr){
        
        let date = new Date(dateNoBr)
       
        let hora = '' + date.getHours()
        let min = '' + date.getMinutes()
        hora = parseInt(hora)+3
        hora= hora+''
        if(hora.length < 2){
            hora = '0'+ hora 
        }
        if(min.length < 2){
            min = '0'+ min
        }
        return hora+':'+min
    }



}


export default dateFormat


