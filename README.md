# mofron-event-link
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

enable link to target component


# Install
```
npm install mofron mofron-event-link
```

# Sample
```html
<require>
    <tag load="mofron-comp-image">Image</tag>
    <tag load="mofron-event-link">Link</tag>
</require>

<Image event=Link("https://mofron.github.io/mofron/",ture)>./logo.png</Image>

```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | url | string | jump url (default is './') |
| ◯  | newtab | boolean | true: jump to url by newtab |
| | | | false: jump to url by current tab (default) |

