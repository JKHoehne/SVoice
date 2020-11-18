
URL = window.URL || window.webkitURL;
var gumStream;
//stream from getUserMedia() 
var rec;
//Recorder.js object 
var input;
//MediaStreamAudioSourceNode we'll be recording 
// shim for AudioContext when it's not avb. 


      var button = $('.images .pic')
	
	
	window.oncontextmenu = function(event) {
     event.preventDefault();
     event.stopPropagation();
     return false;
}

var currentTime = 0;
var RecordingTimer;
var hasRecorded = new Boolean(false);
var isRecording = new Boolean(false);
var isMicOn = new Boolean(false);

var PermissionDenied = new Boolean(false);

	var userID;
	
	  			userID = window.location.href.split("tic="); //Please replace tic with the respondent identifier used in your survey.
	userID = userID[1];

const handleSuccess = function(stream)
{
}

  navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      .then(handleSuccess);
	  


setInterval(function () {
	
	if (isRecording == true) 
	{ 
	
	currentTime = currentTime + 1; 
	
	document.getElementById("Timer").innerHTML = new Date(currentTime * 1000).toISOString().substr(11, 8).substr(3);
	
	}
	}, 1000);

button.on('touchstart', function () {

if (hasRecorded == false)
{

startRecording();
isRecording = true;	
document.getElementById("ButtonColor").style.backgroundColor = "#53da90";
currentTime = 0;

document.getElementById("NotificationText").innerHTML = "<center>Recording in progress.</center>";	
}
else
{
	document.getElementById("ButtonColor").style.backgroundColor = "#c70808";
	
	document.getElementById("NotificationText").innerHTML = "<center>You have already recorded an answer. If you want to record a new answer, press 'Delete Recording'. Otherwise, please press 'Next'.</center>";	
}
})

button.on('touchend', function () {


if (hasRecorded == false)
	{
	isRecording = false;
	hasRecorded = true;
	document.getElementById("reset").innerHTML = "Delete recording";
	document.getElementById("ButtonColor").style.backgroundColor = "#49C581";
	document.getElementById("Timer").innerHTML = new Date(currentTime * 1000).toISOString().substr(11, 8).substr(3);
	
	document.getElementById("NotificationText").innerHTML = "<center>Recording successful. Please press next.</center>";
	document.getElementById("ButtonImage").src = "../img/Icon_Check.png";
	document.getElementById("Timer").innerHTML = "";
	stopRecording();	
	}
else
	{
	document.getElementById("ButtonColor").style.backgroundColor = "#49C581";	
	}

})

	  var deleteButton = $('.DeleteButton');



deleteButton.on('click', function () {

hasRecorded = false; 
	document.getElementById("ButtonImage").src = "../img/Icon_Microphone.png";
	document.getElementById("NotificationText").innerHTML = "<center>Please press the microphone icon while recording your answer.</center>";	
	document.getElementById("reset").innerHTML = "";

});



var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext;

var gumStream; 						//stream from getUserMedia()
var rec; 							//Recorder.js object
var input; 

function startRecording() {

document.getElementById("Timer").innerHTML = "00:00"

    var constraints = { audio: true, video:false }

	navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {

		audioContext = new AudioContext();


		/*  assign to gumStream for later use  */
		gumStream = stream;
		
		/* use the stream */
		input = audioContext.createMediaStreamSource(stream);

		/* 
			Create the Recorder object and configure to record mono sound (1 channel)
			Recording 2 channels  will double the file size
		*/
		rec = new Recorder(input,{numChannels:1})

		//start the recording process
		rec.record()


	}).catch(function(err) {
	  	if (err.code == 35) PermissionDenied = true;
	});
}

function pauseRecording(){
	console.log("pauseButton clicked rec.recording=",rec.recording );
	if (rec.recording){
		//pause
		rec.stop();
		pauseButton.innerHTML="Resume";
	}else{
		//resume
		rec.record()
		pauseButton.innerHTML="Pause";

	}
}

function stopRecording() {

	//disable the stop button, enable the record too allow for new recordings

	//reset button just in case the recording is stopped while paused
	
	//tell the recorder to stop the recording
	
	//var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

//if (!isSafari)
//{
			///Permission
//navigator.permissions.query({name:'microphone'}).then(function(result) {
 //if (result.state == 'granted') {
	rec.stop();

	//stop microphone access
	gumStream.getAudioTracks()[0].stop();
// } else if (result.state == 'denied') {
   //alert("");
 //}
 // Don't do anything if the permission was denied.
//});
		///Permission End	
//}
//else
//{
	//rec.stop();
	//gumStream.getAudioTracks()[0].stop();
//}

	

}

function createDownloadLink(blob) {
	
	var url = URL.createObjectURL(blob);
	var au = document.createElement('audio');
	var li = document.createElement('li');
	var link = document.createElement('a');


	var currentUrl = window.location.href.split("?tic=");

	var urlChunks = currentUrl.toString().split('/');

	var currentQuestion = urlChunks[urlChunks.length - 1].split('.');
	
	currentQuestion = currentQuestion[0];
	
	var filename = currentQuestion + "_" + currentUrl[1];

	//add controls to the <audio> element
	au.controls = true;
	au.src = url;

	//save to disk link
	link.href = url;
	link.download = filename+".wav"; //download forces the browser to download the file using the  filename
	link.innerHTML = "Save to disk";

	//add the new audio element to li
	li.appendChild(au);
	
	//add the filename to the li
	li.appendChild(document.createTextNode(filename+".wav "))

	//add the save to disk link to li
	li.appendChild(link);
	
	//upload link
		  var xhr=new XMLHttpRequest();
		  xhr.onload=function(e) {
		      if(this.readyState === 4) {
		          console.log("Server returned: ",e.target.responseText);
				  Redirect();
		      }
		  };
		  var fd=new FormData();
		  fd.append("audio_data",blob, filename);
		  xhr.open("POST","upload_audio.php",false);
		  xhr.send(fd);
		  
		  
		  //Redirect
//Redirect();

}

var button = $('#send')
      
button.on('click', function () {

	document.getElementById("NotificationText").innerHTML = "<center>Please wait. Your recording is being processed.</center>";	
	document.getElementById("reset").innerHTML = "";

	//create the wav blob and pass it on to createDownloadLink
	if (hasRecorded == true) 
	{
		
		
var isSafari = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);


if (!isSafari)
{
		///Permission
navigator.permissions.query({name:'microphone'}).then(function(result) {
 if (result.state == 'granted') {
		rec.exportWAV(createDownloadLink);
		hasRecorded = false;
 } else {
   
   //FAKE AUDIO
   
   	var currentUrl = window.location.href.split("?tic=");

	var urlChunks = currentUrl.toString().split('/');

	var currentQuestion = urlChunks[urlChunks.length - 1].split('.');
	
	currentQuestion = currentQuestion[0];
	
	var filename = currentQuestion + "_" + currentUrl[1];
   
   var blob = new Blob();
   
   var xhr=new XMLHttpRequest();
		  xhr.onload=function(e) {
		      if(this.readyState === 4) {
		          console.log("Server returned: ",e.target.responseText);
				  Redirect();
		      }
		  };
		  var fd=new FormData();
		  fd.append("audio_data",blob, filename + "_DENIED");
		  xhr.open("POST","upload_audio.php",false);
		  xhr.send(fd);
   
   
 }
});
		///Permission End
	}
	else
	{		
		if (PermissionDenied == true)
		{
			//alert("iOS Failure");
			//FAKE AUDIO
   
   	var currentUrl = window.location.href.split("?tic=");

	var urlChunks = currentUrl.toString().split('/');

	var currentQuestion = urlChunks[urlChunks.length - 1].split('.');
	
	currentQuestion = currentQuestion[0];
	
	var filename = currentQuestion + "_" + currentUrl[1];
   
   var blob = new Blob();
   
   var xhr=new XMLHttpRequest();
		  xhr.onload=function(e) {
		      if(this.readyState === 4) {
		          console.log("Server returned: ",e.target.responseText);
				  Redirect();
		      }
		  };
		  var fd=new FormData();
		  fd.append("audio_data",blob, filename + "_DENIED");
		  xhr.open("POST","upload_audio.php",false);
		  xhr.send(fd); 
		}
		else
		{
			//alert("iOS Success");
			rec.exportWAV(createDownloadLink);
			hasRecorded = false;
		}
		
	}
	
	}
	else
	{
 Redirect();
	}
	///IOS? END
	
})

function SafariRecordingSuccess()
{
	rec.exportWAV(createDownloadLink);
	hasRecorded = false;
}

function SafariRecordingFailure()
{
	//FAKE AUDIO
   
   	var currentUrl = window.location.href.split("?tic=");

	var urlChunks = currentUrl.toString().split('/');

	var currentQuestion = urlChunks[urlChunks.length - 1].split('.');
	
	currentQuestion = currentQuestion[0];
	
	var filename = currentQuestion + "_" + currentUrl[1];
   
   var blob = new Blob();
   
   var xhr=new XMLHttpRequest();
		  xhr.onload=function(e) {
		      if(this.readyState === 4) {
		          console.log("Server returned: ",e.target.responseText);
				  Redirect();
		      }
		  };
		  var fd=new FormData();
		  fd.append("audio_data",blob, filename + "_DENIED");
		  xhr.open("POST","upload_audio.php",false);
		  xhr.send(fd); 
 
}


function Redirect()
{
		var currentUrl = window.location.href.split("?tic=");

	var urlChunks = currentUrl.toString().split('/');

	var currentQuestion = urlChunks[urlChunks.length - 1].split('.');
	
// Please do not forget to add an respondent identifier to the URLs of the respondents voice recordings for identifying respondents. 
// Please replace localhost with your server address for storing the voice recordings.
// Please be aware that tic might be named differently in your survey (see above)
		  if (currentUrl[0] == "http://localhost/SVoiceFinal/Upload_Audio.html") window.location.href = "Upload_Audio.html" + "?tic=" + userID;

}
