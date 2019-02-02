function formdisplay(i) {
    if($("#editform"+i).css("display") == "none") {
        $("#editform"+i).css("display","block");
    } else {
        $("#editform"+i).css("display","none");   
    }
    
};

function updatedetails(i) {
    console.log(i);
     $('#editform'+i).on('submit', function(){
        var item = $('editform input');
        var products = {item : item.val()};
        $.ajax({
          type: 'POST',
          url: '/products',
          data: products,
          success: function(products){
            //do something with the data via front-end framework
            location.reload();
          }
        });
        return false;
        });
};

    // var formdisplay = function(i){
    //     console.log(i);
    // }
   
  
//     $('li').on('click', function(){
//         console.log($(this).text() + "text");
//         var item = $(this).text().trim().replace(/ /g, "-");
//         $.ajax({
//           type: 'DELETE',
//           url: '/todo/' + item,
//           success: function(data){
//             //do something with the data via front-end framework
//             location.reload();
//           }
//         });
//     });
  
//   }