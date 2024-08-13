function qs(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)')
    .exec(window.location.search);

return (results !== null) ? results[1] || 0 : false;
}



$(function() {
    console.log("welcome");
    
        let myId = qs('course');
        console.log("course:" , myId)
        $('.'+myId+'-card').show();
    
});
