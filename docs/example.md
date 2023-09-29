---
title: Example page
editLink: true
---
# {{ $frontmatter.title }}

Welcome to the example page.

This markdown supports html elements like the `p` tag coupled with inline styles

<p style="color: #ff7340; border: 1px solid rgba(255, 135, 23, 0.25); border-radius:5px; padding: 1rem;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

Even satire code snippets with syntax highlighting are also supported. 😅

```js
const lang = prompt("What is your favorite programming language?");

(lang === "JavaScript") | (lang === "javascript") | (lang === "js")
  ? alert("JavaScript to the world! 🚀🟡")
  : alert(`We don't permit such languages here 💩`);
```

Of course, images are not left out.

<img src="/logo.svg" alt="adocs logo">

***

## GH Tables

```
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```


| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

## Emoji :tada:

input

```
:tada: :100: 
```

:tada: :100: :1234: :wink:

A list of [emojis is here](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

## TOC

[[toc]]


***

## Custom Containers

Custom containers can be defined by their types, titles, and contents.

### Default Title

```
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

### Custom Title

You may set custom title by appending the text right after the "type" of the container.

Input

```
::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code

some code in here 
:::
```

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::

***