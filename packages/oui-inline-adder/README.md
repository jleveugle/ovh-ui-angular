# Inline adder

<component-status cx-design="complete" ux="complete"></component-status>

An inline Adder is used to present fields on a line. The special feature of the inline Adder is that you can add lines as needed. By default, only one line is displayed in the Inline Adder. When a new line is added, it becomes read-only and another new line is created below it.

## Usage

All form elements in an Inline Adder must be short. An Inline Adder can contain a maximum of 3 form elements.

### Single fixed width field

```html:preview
<oui-inline-adder
    on-add="$ctrl.addItem(item)"
    on-remove="$ctrl.removeItem(item)">
    <oui-inline-adder-item data-ng-repeat="item in $ctrl.singleFieldItems" item="item" is-new-item="item.isNew" aria-add-item="Add new item" aria-remove-item="Remove item {{$index+1}}">
        <oui-inline-adder-row>
            <div>
                <label for="single-field-prop1" class="oui-label">Property 1</label>
                <input type="text" id="single-field-prop1" class="oui-input oui-input_s"
                    data-ng-model="item.prop1"
                    data-ng-disabled="!item.isNew">
            </div>
        </oui-inline-adder-row>
    </oui-inline-adder-item>
</oui-inline-adder>
```

### Multiple fields with flex-ed width

```html:preview
<oui-inline-adder
    on-add="$ctrl.addItem(item)"
    on-remove="$ctrl.removeItem(item)">
    <oui-inline-adder-item data-ng-repeat="item in $ctrl.dualFieldItems" item="item" is-new-item="item.isNew" aria-add-item="Add new item" aria-remove-item="Remove item {{$index+1}}">
        <oui-inline-adder-row>
            <div class="oui-inline-adder__flexed-element">
                <label for="dual-field-prop1" class="oui-label">Property 1</label>
                <input type="text" class="oui-input"
                    id="dual-field-prop1"
                    data-ng-model="item.prop1"
                    data-ng-disabled="!item.isNew">
            </div>
            <div class="oui-inline-adder__flexed-element">
                <label for="dual-field-prop2" class="oui-label">Property 2</label>
                <input type="text" class="oui-input"
                    id="dual-field-prop2"
                    data-ng-model="item.prop2"
                    data-ng-disabled="!item.isNew">
            </div>
        </oui-inline-adder-row>
    </oui-inline-adder-item>
</oui-inline-adder>
```

### Mixed field types

```html:preview
<oui-inline-adder
    on-add="$ctrl.addItem(item)"
    on-remove="$ctrl.removeItem(item)">
    <oui-inline-adder-item data-ng-repeat="item in $ctrl.tripleFieldItems" item="item" is-new-item="item.isNew" aria-add-item="Add new item" aria-remove-item="Remove item {{$index+1}}">
        <oui-inline-adder-row>
            <div class="oui-inline-adder__flexed-element">
                <label for="triple-field-prop1" class="oui-label">Property 1</label>
                <input type="text" class="oui-input"
                    id="triple-field-prop1"
                    data-ng-model="item.prop1"
                    data-ng-disabled="!item.isNew">
            </div>
            <div class="oui-inline-adder__flexed-element">
                <label for="triple-field-prop2" class="oui-label">Property 2</label>
                <input type="text" class="oui-input"
                    id="triple-field-prop2"
                    data-ng-model="item.prop2"
                    data-ng-disabled="!item.isNew">
            </div>
            <div>
                <label for="triple-field-prop3" class="oui-label">Property 3</label>
                <oui-numeric
                    id="triple-field-prop3"
                    model="item.prop3"
                    disabled="!item.isNew">
                </oui-numeric>
            </div>
        </oui-inline-adder-row>
    </oui-inline-adder-item>
</oui-inline-adder>
```

### Multiple row items

An Inline Adder can have more than one row and be displayed as a group.

```html:preview
<oui-inline-adder
    on-add="$ctrl.addItem(item)"
    on-remove="$ctrl.removeItem(item)">
    <oui-inline-adder-item data-ng-repeat="item in $ctrl.quadraFieldItems" item="item" is-new-item="item.isNew" aria-add-item="Add new item" aria-remove-item="Remove item {{$index+1}}">
        <oui-inline-adder-row>
            <div class="oui-inline-adder__flexed-element">
                <label for="quadra-field-prop1" class="oui-label">Property 1</label>
                <input type="text" class="oui-input"
                    id = "quadra-field-prop1"
                    data-ng-model="item.prop1"
                    data-ng-disabled="!item.isNew">
            </div>
            <div class="oui-inline-adder__flexed-element">
                <label for="quadra-field-prop2" class="oui-label">Property 2</label>
                <input type="text" class="oui-input"
                    id = "quadra-field-prop2"
                    data-ng-model="item.prop2"
                    data-ng-disabled="!item.isNew">
            </div>
        </oui-inline-adder-row>
        <oui-inline-adder-row>
            <div class="oui-inline-adder__flexed-element">
                <label for="quadra-field-prop3" class="oui-label">Property 3</label>
                <input type="text" class="oui-input"
                    id = "quadra-field-prop3"
                    data-ng-model="item.prop3"
                    data-ng-disabled="!item.isNew">
            </div>
            <div class="oui-inline-adder__flexed-element">
                <label for="quadra-field-prop4" class="oui-label">Property 4</label>
                <input type="text" class="oui-input"
                    id = "quadra-field-prop4"
                    data-ng-model="item.prop4"
                    data-ng-disabled="!item.isNew">
            </div>
        </oui-inline-adder-row>
    </oui-inline-adder-item>
</oui-inline-adder>
```

**Note**: The `on-add` and `on-remove` callbacks receive the item being added or removed. These callbacks should return a promise, which is resolved after a new item is added or after the item is removed respectively.

## API

### oui-inline-adder

| Attribute         | Type            | Binding | One-time binding | Values                    | Default             | Description                        |
| ----              | ----            | ----    | ----             | ----                      | ----                | ----                               |
| `on-add`          |                 | &       |                  |                           |                     | new item add handler (button)      |
| `on-remove`       |                 | &       |                  |                           |                     | item remove handler (button)       |

### oui-inline-adder-item

| Attribute         | Type            | Binding | One-time binding | Values                    | Default             | Description                        |
| ----              | ----            | ----    | ----             | ----                      | ----                | ----                               |
| `item`            | object          | <       | no               |                           |                     | the item for the current line      |
| `is-new-item`     | boolean         | <       | no               |                           |                     | is the item a new one              |
