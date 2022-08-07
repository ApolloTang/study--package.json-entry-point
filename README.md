# Using typescript project with Rush 







## Protential problem when using typescript project reference



## About the `.tsbuildinfo` file. 

When setting the  `conposite` flag in the reference package a cache file is created. According to [the 3.4 release note](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#faster-subsequent-builds-with-the---incremental-flag) the name of this file is `.tsbuildinfo`. However there is a discrapency. The filename is  `tsconfig.tsbuildinfo` instead. 

Also, the release note said this file should be is placed in the output directory (configure via `outDir`), however, it is co-located in the same folder with `tsconfig.json`.  But I am able to change this this location by setting the `compilerOptions.tsBuildInfoFile` option in `tsconfig.json`.

The `.tsbuildinfo` file can be safely deleted and don’t have any impact on output code at runtime - they’re purely used to make compilations faster.  As discuss in this [thread](https://github.com/vercel/next.js/discussions/30815#discussioncomment-1614404).  that **`tsconfig.tsbuildinfo` file should not be checked into version control.**

## Problem with the presence of  `.tsbuildinfo` file. 

When we set a projects `composite`, the typescript transpiler's incremental build feature is enabled. This feature interferes  with the  `rush rebuild` command when we want to "force" rebuild the package. This happen  because typescript transpiler will look at the cache to calculate the next output and may not emit new output (`dist`) folder.  The work around for this is by removing the `.tsbuildinfo` file.

 *file: `package.json` for `consumee1` and `consumee2`*

```json
"scripts": {
  "clean": "rm -fr ./dist && rm -f tsconfig.tsbuildinfo",
  "transpile": "rushx clean && tsc",
  "build": "rushx transpile",
},
```

In the script "clean", in addition to removing `./dist`, we are also remove `tsconfig.tsbuildinfo`.

An alternative solution is to tell typescript to place `tsconfig.tsbuildinfo` inside the `./dist` folder by setting the `tsconfig`'s `compilerOptions.tsBuildInfoFile`:

*file: `tsconfig` for `consumee1` and `consumee1`*

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./dist/tsconfig.tsbuildinfo",
  },
}
```

That way, the removal of `./dist` will include removing `tsconfig.tsbuildinfo`.

---






