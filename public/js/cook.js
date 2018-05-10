$(document).ready(function(){
	// Activate tooltip
	$('[data-toggle="tooltip"]').tooltip();
	
	// Select/Deselect checkboxes
	var checkbox = $('table tbody input[type="checkbox"]');
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
	checkbox.click(function(){
		if(!this.checked){
			$("#selectAll").prop("checked", false);
		}
	});
    document.querySelector("#submitOrder").addEventListener("click",function(e){
        console.log('hi');
        table.deleteRow(1);
    });
    
});

    function processOrder(i){
        var table = document.getElementById('myTable');
        //remove from table and update in manager order processing
        table.deleteRow(i.rowIndex);
    }
    function deleteOrder(i){
        var table = document.getElementById('myTable');
        table.deleteRow(i.rowIndex);
    }