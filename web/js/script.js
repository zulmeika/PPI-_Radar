$("#file").change(function(){
	var fileName = ""
	for (var i=0; i<this.files.length; i++){
		console.log(this.files[i].name)
		fileName = fileName + this.files[0].name;
	}

	document.getElementById("berkas").defaultValue = fileName;
});