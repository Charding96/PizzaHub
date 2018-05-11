var myIndex;
function deleteOrder(i){
    this.myIndex = i.rowIndex;
}
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
        table.deleteRow(myIndex);
    });
	
    checkbox.click(function(){
		if(!this.checked){
			$("#selectAll").prop("checked", false);
		}
	});
});