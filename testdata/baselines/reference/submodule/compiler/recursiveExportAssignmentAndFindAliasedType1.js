//// [tests/cases/compiler/recursiveExportAssignmentAndFindAliasedType1.ts] ////

//// [recursiveExportAssignmentAndFindAliasedType1_moduleDef.d.ts]
declare module "moduleC" {
    import self = require("moduleC");
    export = self;
}

//// [recursiveExportAssignmentAndFindAliasedType1_moduleB.ts]
class ClassB { }
export = ClassB;

//// [recursiveExportAssignmentAndFindAliasedType1_moduleA.ts]
/// <reference path="recursiveExportAssignmentAndFindAliasedType1_moduleDef.d.ts"/>
import moduleC = require("moduleC");
import ClassB = require("recursiveExportAssignmentAndFindAliasedType1_moduleB");
export var b: ClassB; // This should result in type ClassB

//// [recursiveExportAssignmentAndFindAliasedType1_moduleA.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b = void 0;
