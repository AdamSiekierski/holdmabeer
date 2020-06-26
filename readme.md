<p align="center">
  <img src="./beer.png" />
</p>
<h1 align="center">Hold ma BEER!</h1>
<p align="center"><i>Let your app do something important</i></p>

`holdmabeer` is a simple package, that lets you create a `Promise`, that resolves after a specific time.

![](https://img.shields.io/github/workflow/status/AdamSiekierski/holdmabeer/Release?style=flat-square)
![](https://img.shields.io/bundlephobia/min/holdmabeer?style=flat-square)
![](https://img.shields.io/david/adamsiekierski/holdmabeer?style=flat-square)
![](https://img.shields.io/github/license/AdamSiekierski/holdmabeer?style=flat-square)

## Installation

```
npm install holdmabeer
```

## Usage

`holdmabeer` exports a `hold` function, which accepts either a number or a string. When given a number, returns a `Promise` that resolves after given number of milliseconds. String can be although in two formats - seconds or milliseconds. For example `420ms` or `69s`

## Examples

**Just a simple promise, which resolves after 100 milliseconds**

```js
import { hold } from 'holdmabeer';

hold(100).then(() => console.log('yummy'));
```

or

```js
import { hold } from 'holdmabeer';

hold('100ms').then(() => console.log('yummy'));
```

**Promise, that resolves after 1 second**

```js
import { hold } from 'holdmabeer';

hold('1s').then(() => console.log('yummy'));
```

**You can also use it inside an asynchronous function**

```js
import { hold } from 'holdmabeer';

(async () => {
  await hold('3s');
  console.log('noice');
})();
```

Top-level `await` is coming to JavaScript, so in some time it could be used like this:

```js
import { hold } from 'holdmabeer';

await hold('3s');
console.log('noice');
```

## Contributing

- Do a fork of the repo
- `npm install`
- Apply your changes, be sure to use Prettier for code formatting
- Create a pull request
- Well, it merge time, baby

## License

This project is licensed under the MIT License.

## Credits

- [ejer](https://github.com/datejer) - Name of the package
- [me](https://github.com/AdamSiekierski) - Code

## Shameless plug

I'm an author of [Require Podcast](https://require.podcast.gq) - Polish podcast about webdevelopment! If you're Polish, be sure to check it out!
