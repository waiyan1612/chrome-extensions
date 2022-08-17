function fill(env) {
    
    switch (env) {
        case "c1":
            return [c1f1, c1f2, c1f3];

        case "c2":
            return [c2f1, c2f2, c2f3];

        case "c3":
            return [c3f1, c3f2, c3f3];

        default:
            alert('Unrecognized ' + env);
            return;
    }
}

function replaceLabelWithButton(f, targetComponent) {
    let componentToFind = targetComponent.parent();
    let labelComponent = componentToFind.prev().remove()
    let text = labelComponent.text();
    labelComponent.remove();
    componentToFind.prepend(`<button style="background-color: white; border: 0;" onclick="navigator.clipboard.writeText('${f}')">${text}</button>`);
}


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(`Received ${request} from ${sender.tab ? "a content script:" + sender.tab.url : "the extension"}: ${sender}`);
        const f0 = "athena.ap-southeast-1.amazonaws.com:443;Workgroup=tableau;"
        const [f1, f2, f3] = fill(request.choice);

        // Fallback buttons in case the html layout changes
        // $("div[data-tb-test-id='modular-connection-dialog-tabpanel-container']").prepend(`
        //     <div style="display: inline-block; width: 100%">
        //         <button onclick="navigator.clipboard.writeText('${f0}')"> Copy f0 </button>
        //         <button onclick="navigator.clipboard.writeText('${f1}')"> Copy f1 </button>
        //         <button onclick="navigator.clipboard.writeText('${f2}')"> Copy f2 </button>
        //         <button onclick="navigator.clipboard.writeText('${f3}')"> Copy f3 </button>
        //     </div>
        // `);

        replaceLabelWithButton(f0, $("input[data-tb-test-id='server-textfield-TextInput']"));
        replaceLabelWithButton(f1, $("input[data-tb-test-id='warehouse-textfield-TextInput']"));
        replaceLabelWithButton(f2, $("input[data-tb-test-id='username-textfield-TextInput']"));
        replaceLabelWithButton(f3, $("input[data-tb-test-id='password-textfield-TextInput']"));

        sendResponse({message: "Filled " + request.choice});
    }
);

