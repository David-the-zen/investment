I've installed Lerna, a package manager (https://lerna.js.org/), and moved the investing-watchlist folder into /packages. This is because I'm assuming at some stage we'll need more than just an angular package. 
E.g we might need a node server for a backend, and a database package.

The advantage of using Lerna is that it allows you to manage and run commands in your packages simultaneously.
E.g the command 'npm run lerna run bootstrap' will bootstrap all of the packages in the repo, installing all their dependencies and linking any cross-dependencies.

This is assuming we go for the mono repo approach, which we might not.