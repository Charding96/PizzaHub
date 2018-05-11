  $("#type").on("change", function () {        
      $modal = $('#myModal');
      if($(this).val() === 'donations'){
        $modal.modal('show');
    }
 });