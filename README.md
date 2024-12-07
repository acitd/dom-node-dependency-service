# Dom Node Dependency Service
Makes some DOM nodes dependent on others.  
If the dependency is removed from the DOM, the dependents are also removed after a while.

## Import
```js
import DomNodeDependencyService from 'https://cdn.jsdelivr.net/gh/acitd/dom-node-dependency-service/1.0/dist/DomNodeDependencyService.js';
```

## Initialization
You can create the service by defining the root element of the dependencies.
```js
const dnds=new DomNodeDependencyService(document.body);
```
Then just start the service.
```js
dnds.start();
```

## Define a depencency
To define a node as a dependecy you can use the add(...) method with this syntax:
```js
𝘴𝘦𝘳𝘷𝘪𝘤𝘦.dependency(𝘥𝘦𝘱𝘦𝘯𝘥𝘦𝘯𝘤𝘺).of(...𝘥𝘦𝘱𝘦𝘯𝘥𝘦𝘯𝘵𝘴);
```
## Example
```js
const head=document.querySelector('head');
const main=document.querySelector('main');
const footer=document.querySelector('footer');
dnds.dependency(head).of(main,footer);    // we make the main and the footer element dependants of the head

const aside=document.querySelector('aside');
dnds.dependency(head).of(aside);    // we make the aside element too

// TEST
head.remove();    // now the head and all its dependents are removed afte a while
```

## Use case
Let's say you render or add a `button` to the `body`, but for structural reasons you prefer to inject the css and js into the `head`.  
In this case, you can make the `style` and `script` tag dependent on the `button`, so if for any reason the `button` is removed, its css and js are also removed.
