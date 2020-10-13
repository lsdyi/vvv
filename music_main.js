var app = new Vue({
    el: "#app",
    data: {
        search: "",
        songs: [],
        musicUrl: ""
    },
    methods: {
        searchMusic: function() {
            // console.log(this.search)
            var that = this
            axios.get("https://autumnfish.cn/search?keywords="+this.search)
            .then(function(response) {
                console.log(response)
                that.songs = response.data.result.songs
            }, function(error) {
                console.log(error)
            })
        },
        playMusic: function(musicId) {
            
            // axios.get("https://link.hhtjim.com/163/"+musicId+".mp3")
            // .then(function(response) {
            //     console.log(response)
            // }, function(error) {
            //     console.log(error)
            // })
            this.musicUrl = "https://link.hhtjim.com/163/"+musicId+".mp3"
            console.log(this.musicUrl)
        }
    }
})