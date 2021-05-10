Vue.config.devtools = true;

var app = new Vue({
  el: '#root',
  data: {
    rooms: [],
    room_info: null,
  },
  created() {
      axios.get('http://localhost/db-hotel/api/stanze.php').then((response) => {
        this.rooms = response.data.response;
        console.log(this.rooms);
        });
    },
  methods: {
    infoRoom: function (id) {
      axios.get(`http://localhost/db-hotel/api/stanze.php?id=${id}`).then((response) => {
        this.room_info = response.data.response[0];
        console.log(this.room_info);
        });
    }
  }
});
