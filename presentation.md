# Switching to an Open Source Web Stack

0. Let's learn about npm
0. ..And gulp
0. ..And bower
0. ..And TSD
0. ..And yeoman
0. Who knows what all of these are?
0. I'm Jason Young
0. I'm presenting all of these open source technologies on a Mac
0. ..in a cross-platform editor
0. ..using a cross-platform language
0. I'm Jason Young
0. I work at Microsoft
0. I help companies built cool stuff on Azure
0. I'm not an expert in these technologies
0. This is [VS Code](https://code.visualstudio.com/)
	00. Lightweight, cross-platform, *editor*
	00. ASP.NET v5, Node.js
	00. Tip: Make this your default editor
	00. Working files
	00. Markdown editor
	00. Git integration
	00. Debugging capabilities
0. Node.js Background
	00. JavaScript
	00. Stack of wood vs finished house that you make your own
	00. It's not fast. Async is fast.
0. NPM - Package manager for node
	00. `npm install -g azure`
0. Gulp - Build system
    00. `npm install gulp`
	00. `gulp`
    00. `cp ../newdug/gulpfile.js .`
	00. `gulp`
0. Gulp basics
	00. src
	00. pipe
	00. dest
	00. watch
	00. dependencies
0. TSD - It's not just for TypeScript
	00. `npm install -g tsd`
	00. `tsd query gulp`
	00. `tsd install gulp`
0. Bower
	00. Why not NPM? NPM is for Node. Bower is for front-end resources.
	00. `npm install -g bower`
	00. `bower search jquery`
	00. `bower install jquery`
0. Other package manager basics
	00. Save packages with `--save`
	00. Install packages with `install`
0. Can we make this easier yo?
0. ..I mean Yeoman
0. This is your File->New Project
	00. `npm install -g yo`
	00. `npm install generator-gulp-angular`
	00. `yo gulp-angular`
	00. Walkthrough
	00. Plugins fill in all the gaps
0. TypeScript
	00. Rename .js to .ts
	00. JavaScript is TypeScript
	00. Apply typings as desired
0. TravisCI
	00. Saves Azure CPU cycles
	00. Free
	00. Watch the build real-time
0. Visual Studio Online
	00. Source control (Git/TFS)
	00. Project management
	00. Great new build system
	00. Use the pieces you want
0. Azure
	00. Websites start at $0
	00. Publish with Git
0. Azure x-plat CLI
	00. `npm install -g azure`
	00. `azure account download`
	00. `azure account import xxx`
	00. `azure site create newdugx`
0. Git to Azure
	00. `git remote add azure https://ytechie@newdugx.scm.azurewebsites.net:443/newdugx.git`
	00. `git push azure master`
0. Questions?
0. Check out the [MS Dev Show](http://msdevshow.com)
0. Follow me on Twitter @ytechie
0. This presentation is available in my [GitHub account](https://github.com/ytechie)
## Thank you!