function formdisplay(i) {
    var form = document.getElementById("editform"+i);
    if(form.style.display == "none") {
        form.style.display = "block"
    } else {
        form.style.display = "none";
    }
}
$(document).ready(function(){
    $('button').on('click', function(){
        var butid = this.id+"";
        console.log(butid);
        if(butid == "add") {
            go_to_url = "/products/add";
            document.location.href = go_to_url;
        }
        if(butid.slice(0,-1) == "delete") {
            var id = this.id + "";
            id = id.slice(-1);
            $.ajax({
                type: 'DELETE',
                url: '/products/'+ id,
                success: function(data){
                //do something with the data via front-end framework
                location.reload();
            }
          });
        }     
    });
})