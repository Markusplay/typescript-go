//// [tests/cases/conformance/externalModules/topLevelAwait.2.ts] ////

//// [topLevelAwait.2.ts]
declare namespace foo { const await: any; }

// await allowed in import=namespace when not a module
import await = foo.await;


//// [topLevelAwait.2.js]
