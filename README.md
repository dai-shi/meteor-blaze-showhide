blaze-showhide (Meteor)
=======================

This is a Meteor package to provide
handy block helpers for show/hide functionality in Blaze.

Example
-------

```HTML
<div>
  {{#showIf name="hello"}}
    <p>Hello World!</p>
  {{/showIf}}
  {{#toggleShowHide name="hello"}}
    <button>Toggle</button>
  {{/toggleShowHide}}
</div>
```````

With [Jade](https://atmospherejs.com/mquandalle/jade):

```
div
  +showIf name="hello"
    p Hello World!
  +toggleShowHide name="hello"
    button Toggle
```
