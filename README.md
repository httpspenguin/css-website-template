# CSS Workshop Series - Building your portfolio with React
by Ally Garton

## Frameworks, Libraries, & Tools
- [React](https://react.dev/) built with [Vite](https://vite.dev/).
- [JSX](https://www.w3schools.com/react/react_jsx.asp) (for the sake of maximum simplicity - please feel free to build your own project using TSX).
- [Tailwind](https://tailwindcss.com/) is available for use, however the base project uses vanilla CSS. For the sake of this workshop, working in vanilla CSS is recommended. To switch off vanilla CSS and switch on Tailwind, go to `src/index.css`, comment out the imports at the top of the file, and uncomment the imports at the bottom of the file. This will break the styling initially, but you can build it back up using Tailwind.
- [Google Fonts](https://fonts.google.com/) for...fonts.
- [FontAwesome](https://fontawesome.com/search?ic=free) for flexible pre-made icons. Free version only!
- [Animate On Scroll](https://michalsnik.github.io/aos/) (AOS) for animating components.
- [Lite Youtube](https://www.npmjs.com/package/lite-youtube-embed) for privately and efficiently rendering YouTube videos in your site.

## Getting Started
- Start by signing in to GitHub Desktop - it should be installed on all lab PCs.
- Clone this repo in GitHub Desktop:
  - Click the green `<> Code` button above and copy the URL under HTTPS.
  - In GitHub Desktop, navigate to `File > Clone a repository > URL` and paste the URL you just copied from GitHub.
  - Choose a location (`Documents` is fine) and press `Clone`.
- Set up a repo in your own GitHub account by navigating to your repositories and clicking `New`. This will be where your portfolio site will sit. Leave it set to public for now. You do not need a readme, gitignore, or license.
- In the Command Prompt (type `cmd` into Windows search), navigate to this cloned repo's files. You can do this using `cd <FILEPATH>` - in this case `cd documents` should do the trick.
- Still in the Command Prompt, type `git remote set-url origin http://github.com/YOUR_USERNAME/YOUR_NEW_REPO`, replacing the necessary parts. You don't need the @ in your username.
- Open up the cloned repo in VSCode. Try adding a `.txt` file to the file structure and committing it via GitHub Desktop. If it commits without any issues, you're good to go! :star2:

## Start from scratch (for the confident!)
- Ensure you have the latest versions of Node and NPM installed.
- Navigate to your dev space using the Command Prompt and run `npm create vite@latest`.
- Name your project.
- Choose React from the list of frameworks.
- Choose between JavaScript and TypeScript (I recommend TypeScript, but it's your call).