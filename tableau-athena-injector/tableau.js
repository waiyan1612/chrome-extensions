const c1f1 = "foo1";
const c1f2 = "bar1";
const c1f3 = "foobar1";

const c2f1 = "foo2";
const c2f2 = "bar2";
const c2f3 = "foobar2";

const c3f1 = "foo3";
const c3f2 = "bar3";
const c3f3 = "foobar3";

function fill(env) {

    $("input[data-tb-test-id='server-textfield-TextInput']").val("athena.ap-southeast-1.amazonaws.com:443;Workgroup=tableau;");
    $("input[data-tb-test-id='port-textfield-TextInput']").val("443");

    switch (env) {
        case "c1":
            $("input[data-tb-test-id='warehouse-textfield-TextInput']").val(c1f1);
            $("input[data-tb-test-id='username-textfield-TextInput']").val(c1f2);
            $("input[data-tb-test-id='password-textfield-TextInput']").val(c1f3);
            break;

        case "c2":
            $("input[data-tb-test-id='warehouse-textfield-TextInput']").val(c2f1);
            $("input[data-tb-test-id='username-textfield-TextInput']").val(c2f2);
            $("input[data-tb-test-id='password-textfield-TextInput']").val(c2f3);
            break;

        case "c3":
            $("input[data-tb-test-id='warehouse-textfield-TextInput']").val(c3f1);
            $("input[data-tb-test-id='username-textfield-TextInput']").val(c3f2);
            $("input[data-tb-test-id='password-textfield-TextInput']").val(c3f3);
            break;

        default:
            alert('Unrecognized ' + env);
            break;
    }
}
