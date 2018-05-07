$(document).on('ready', function() {
  console.log('test');

  $('select').change(function() {
    $('#delivery:selected').each(function() {
      $('#deliveryOptions').show();
    });
    $('#pickup:selected').each(function() {
      $('#deliveryOptions').hide();
    });
  });

  // $('form').on('submit', function(event) {

  //   event.preventDefault();

  //   // var breadSticks = $('#breadSticks').is(':checked');

  //   var size = $('input[name=size]:checked').val();
  //   size = parseFloat(size); // in the controller: let size = parseFloat(req.body.size);

  //   var sauce = $('input[name=sauce]:checked').val();
  //   sauce = parseFloat(sauce);

  //   var subtotal = size + sauce;

  //   var total = size + sauce;

  //   toppingsOptions = $('input:not(#tip):checkbox:checked').map(function() {
  //     return this.value;
  //   }).get();

  //   var toppingsOptionsTotal = toppingsOptions.reduce(function(a, b) {
  //     return parseFloat(a) + parseFloat(b);
  //   }, 0);

  //   toppingsOptionsTotal = parseFloat(toppingsOptionsTotal);

  //   subtotal += toppingsOptionsTotal;

  //   total += toppingsOptionsTotal;

    
    // Leave this part about showing the information when choosed delivery
 

   // $('#subtotal').text('subtotal: $' + subtotal);
    //$('#tax').text('tax: $' + tax.toFixed(2));
    //$('#total').text('total: $' + total.toFixed(2));
    //$('#streetResult').text($('#street').val());
    //$('#cityResult').text($('#city').val());
    //$('#zipResult').text($('#zip').val());
    //$('#messageResult').text($('#message').val());
    //$('#telResult').text($('#tel').val());
    //$('#emailResult').text($('#email').val());

//     console.log('tip: ' + tip.toFixed(2));

//     console.log('tax: ' + tax.toFixed(2));

//     console.log('total: ' + total.toFixed(2));

//     $('#results').css('display', 'block');

//     console.log($('input:checked').parent('label').text());

//     $('#order').append($('input:checked').parent('label').text());

//   });

});