$(document).ready(function(){
	// Activate tooltip
	$('[data-toggle="tooltip"]').tooltip();
	
	// Select/Deselect checkboxes
	var checkbox = $('table tbody input[type="checkbox"]');
    var list = $('table tbody tr');
    var table = document.getElementById('myTable');
	$("#selectAll").click(function(){
		if(this.checked){
			checkbox.each(function(){
				this.checked = true;                        
			});
		} else{
			checkbox.each(function(){
				this.checked = false;                        
			});
		} 
	});
    document.querySelector("#deleteSelected").addEventListener("click",function(e){
        for(var i=0;i<table.rows.length;i++){
            var myCheckbox = document.getElementById(`checkbox${i}`);
            //console.log(table.rows.length);
            if(myCheckbox !== null){
                console.log('got mycheckbox');
            }
            if(myCheckbox !== null && myCheckbox.checked === true){
                console.log(i);
                table.deleteRow(i);
                //e.preventDefault();                
            }
        }
    });
	
    checkbox.click(function(){
		if(!this.checked){
			$("#selectAll").prop("checked", false);
		}
	});
});