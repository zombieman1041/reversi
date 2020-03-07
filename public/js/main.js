// functions for general use

// this function returns the value associated with 'whichParam' on the URL
function GetURLParameters(whichParam){

    var pageURL = window.location.search.substring(1);
    var pageURLVariables = pageURL.split('&');

    for(var i = 0; i < pageURLVariables.length; i++){
        var parameterName = pageURLVariables[i].split('=');
        if(parameterName[0] == whichParam){
            return parameterName[1];
        }
    }
}

var username = GetURLParameters('username');
if('undefined' == typeof username || !username){
    username = 'Anonymous_' + Math.random();
}

$('#messages').append('<h4 class="title">'+username+'</h4>');
