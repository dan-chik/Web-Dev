'use strict';

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    function () {
        return alert("Agree.");
    },
    function () {
        return alert("Disagree.");
    }
)