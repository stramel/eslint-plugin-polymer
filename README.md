# eslint-plugin-polymer

Recommended Eslint configs for Polymer

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-polymer`:

```
$ npm install eslint-plugin-polymer --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-polymer` globally.

## Usage

Add `polymer` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

### Polymer 2

```json
{
  "extends": ["plugin:polymer/polymer-2"],
  "plugins": [
    "polymer"
  ]
}
```

### Polymer 1

```json
{
  "extends": ["plugin:polymer/polymer-1"],
  "plugins": [
    "polymer"
  ]
}
```
