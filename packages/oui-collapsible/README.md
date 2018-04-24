# Collapsible

<component-status cx-design="complete" ux="complete"></component-status>

## Usage

### Normal

```html:preview
<oui-collapsible title="Title" aria-label="Action">
    <div>Collapsible body</div>
</oui-collapsible>
```

### Expanded

```html:preview
<oui-collapsible title="Title" aria-label="Action" expanded="true">
    <div>Collapsible body</div>
</oui-collapsible>
```

## API

### oui-collapsible

| Attribute         | Type            | Binding | One-time binding | Values                    | Default             | Description                        |
| ----              | ----            | ----    | ----             | ----                      | ----                | ----                               |
| `title`           | string          | @       | yes              |                           |                     | collapsible title                  |
| `aria-label`      | string          | @?      | yes              |                           |                     | accessibility label                |
| `expanded`        | boolean         | <?      | yes              |                           | `false`             | initial expanded state             |