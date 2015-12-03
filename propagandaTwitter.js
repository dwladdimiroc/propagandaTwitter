var Tweet = require('twit')

var T = new Tweet({
		consumer_key:     '...'
	,	consumer_secret:   '...'
	,	access_token:      '...' 
	,   access_token_secret:    '...'
})

var speech = [
		'¡Arriba lxs que luchan!'
	,	'Vayan todos los Sábados a las 11hrs a la @escuelavioletap'
	,	'¡Todas y todos con el Congreso Usach 2015!'
]

Date.prototype.today=function(){
	return ((this.getDate()<10)?"0":"")
		+	this.getDate() + "/"+(((this.getMonth()+1)<10)?"0":"")
		+	(this.getMonth()+1) + "/"+ this.getFullYear();
}

Date.prototype.timeNow=function(){
	return ((this.getHours()<10)?"0":"")
		+	this.getHours()+":"+((this.getMinutes()<10)?"0":"")
		+	this.getMinutes()+":"+((this.getSeconds()<10)?"0":"")+this.getSeconds();
}

var mseg = 1000;
var seg = 60;
var min = 8;

setInterval(function(){
	var chosen = Math.floor(Math.random()*10)%3
	var time = new Date()
	var msg = speech[chosen]+ ' ' + time.today() + ' ' + time.timeNow()

	T.post('statuses/update',{status:msg},function(err,data,response){
		console.log('dwladdimiroc: ('+chosen+') '+msg)
	})
},mseg*seg*min);