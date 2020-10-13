var weather = new Vue({
    el: "#weather",
    data: {
        messages: [],
        city: "南昌",
        hots: [
            "武汉",
            "北京",
            "上海",
            "广州",
            "深圳",
        ]
    },
    methods: {
        showWeather: function() {
            var that = this
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city="+this.city)
            .then(function (response) {
                console.log(response)
                console.log(response.data.data.yesterday)

                for(var i = 0; i < that.messages.length; i++) {
                    if(that.messages[i].city == response.data.data.city) return 
                }
                var array = []
                array.push(response.data.data.yesterday)
                for(var i = 0; i < response.data.data.forecast.length; i++) {
                    array.push(response.data.data.forecast[i])
                }
                that.messages.push({
                    array: array,
                    city: response.data.data.city,
                })
            }, function (error) {
                console.log(error)
            })
            // console.log(this.city)
        },
        hotcity: function(hot) {
            this.city = hot
            console.log("dea")
            this.showWeather()
        }
    }
})

document.querySelector("body").onload = function() {
    weather.showWeather()
}