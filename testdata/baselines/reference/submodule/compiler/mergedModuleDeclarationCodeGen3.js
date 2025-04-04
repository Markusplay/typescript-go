//// [tests/cases/compiler/mergedModuleDeclarationCodeGen3.ts] ////

//// [mergedModuleDeclarationCodeGen3.ts]
module my.data {
    export function buz() { }
}
module my.data.foo {
    function data(my, foo) {
        buz();
    }
}

//// [mergedModuleDeclarationCodeGen3.js]
var my;
(function (my) {
    let data;
    (function (data) {
        function buz() { }
        data.buz = buz;
    })(data = my.data || (my.data = {}));
})(my || (my = {}));
(function (my_1) {
    let data;
    (function (data_1) {
        let foo;
        (function (foo_1) {
            function data(my, foo) {
                buz();
            }
        })(foo = data_1.foo || (data_1.foo = {}));
    })(data = my_1.data || (my_1.data = {}));
})(my || (my = {}));
