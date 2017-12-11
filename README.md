# node-console-app


This is simple node console app, supporting 

- ES6 ( babel-preset-env ) & Source Map
- jest ( unit testing )
- hot reloading ( babel-watch, yarn run watch )
- debugging with VSCode ( press F5 to launch )



# How to use

( replace yarn with npm if you are not using yarn )
- yarn watch : script will build\run and will restart when there are changes made to the source code under 'src'
- yarn start : script will transpile code under src to bin
- yarn test : script will run jest unit tests ( files named *.test.js )
- If you are using vscode, F5 will execute the launch command so that debugger can be attached.
