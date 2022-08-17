
$("#c1-8cnAzRK8WU").click(function() {
    $("#c2-GVkb9q4saZ").prop("disabled", true);
    $("#c2-GVkb9q4saZ").css('visibility', 'hidden');
    $("#c3-Hpg5vKNT7w").prop("disabled", true);
    $("#c3-Hpg5vKNT7w").css('visibility', 'hidden');
    sendMessage("c1");
});

$("#c2-GVkb9q4saZ").click(function() {
    $("#c1-8cnAzRK8WU").prop("disabled", true);
    $("#c1-8cnAzRK8WU").css('visibility', 'hidden');
    $("#c3-Hpg5vKNT7w").prop("disabled", true);
    $("#c3-Hpg5vKNT7w").css('visibility', 'hidden');
    sendMessage("c2");
});

$("#c3-Hpg5vKNT7w").click(function() {
    $("#c1-8cnAzRK8WU").prop("disabled", true);
    $("#c1-8cnAzRK8WU").css('visibility', 'hidden');
    $("#c2-GVkb9q4saZ").prop("disabled", true);
    $("#c2-GVkb9q4saZ").css('visibility', 'hidden');
    sendMessage("c3");
});

function sendMessage(choice) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        const payload = {"choice": choice}
        chrome.tabs.sendMessage(tabs[0].id, payload, function(response) {
            console.log(response);
        });
    });
}
