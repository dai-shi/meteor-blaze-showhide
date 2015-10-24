blaze-showhide (Meteor)
=======================

This is a Meteor package to provide
handy block helpers for show/hide functionality in Blaze.

Templates
---------

- showIf
- hideIf
- showDivIf
- hideDivIf
- showSpanIf
- hideSpanIf
- toggleShowHide
- setShowHide

`name` is required for all templates.
`arg1` is an optional argument for all templates.
`value` is required for the `setShowHide` template.

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
