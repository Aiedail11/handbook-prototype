# handbook-prototype

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Notes on Current State

### Stable Version
I am currently in the middle of implementing several changes, and the head of the master branch points to a commit which will not function correctly.
Instead, checkout out commit SHA eb1b4a2
This version most closely follows the .Net MVC protoype of this project

### Authentication
I had begun moving authentication away from the Vuex store and to an official nuxt authentication plugin (@nuxtjs/auth). However, the JWT/SSO endpoint will need to be set up before work can continue. The head of the master branch (commit cdc3a5f) points to these changes.

### Wysiwyg Editor
While there are many editors available for Vue, I had difficulty integrating them into the Nuxt framework. I attempted to use [vue-wysiwyg](https://github.com/chmln/vue-wysiwyg) but could not get it to work. [Tiptap](https://medium.com/js-dojo/how-to-add-rich-text-editor-in-nuxtjs-cfc3d1ee3ecf) seems to be a better [alternative](https://morioh.com/p/8a86611d9e4a). When I left off, I was working on setting up Vuetify, which was having some issues. However, this seems to be the right direction.
Check out the wysiwyg branch
