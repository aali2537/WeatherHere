


module.exports = {
  convertFull: function(UNIX_timestamp){
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var a = new Date(UNIX_timestamp * 1000);
    var hours = a.getHours();
    var minutes = a.getMinutes();
    var dayOfWeek = days[a.getDay()];
    var time = '';
    var ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    time = dayOfWeek + " " + hours + ':' + minutes + ' ' + ampm;

    return time;
  },
  getDay: function(UNIX_timestamp){
    var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var a = new Date(UNIX_timestamp * 1000);
    return days[a.getDay()];
  }
};
