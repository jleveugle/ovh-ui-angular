# Select

<component-status cx-design="complete" ux="rc"></component-status>

## Usage

### Select

- ✅ No search input (search can be disabled)
- ✅ Can have a description
- ✅ Predeterminated list only
- ✅ Grouped if necessary
- ✅ Deal with errors
- ✅ Optimized dropdown opening (up/down)
- ❓ Selected item is identified in the list by a checkmark

<form name="form1">
    <ui-select ng-model="$ctrl.country"
            theme="bootstrap"
            search-enabled="false"
            style="width: 600px;"
            title="Select a country"
            required>
        <ui-select-match placeholder="Select a country...">{{$select.selected.name}}</ui-select-match>
        <ui-select-choices repeat="country in $ctrl.countries track by $index">
            <span ng-bind="country.name"></span>
        </ui-select-choices>
    </ui-select>
    <pre><code>Valid? {{form1.$valid}}
Value: {{$ctrl.country|json}}</code></pre>
</form>

#### Grouping / Custom template

<form name="form2">
    <ui-select ng-model="$ctrl.country2"
            theme="bootstrap"
            search-enabled="false"
            style="width: 600px;"
            title="Select a country"
            required>
        <ui-select-match placeholder="Select a country...">{{$select.selected.name}}</ui-select-match>
        <ui-select-choices group-by="$ctrl.groupByFirstLetter"
            repeat="country in $ctrl.countries track by $index">
            <span ng-bind="country.name"></span><br>
            <small ng-bind="country.code" style="font-style: italic"></small>
        </ui-select-choices>
    </ui-select>
    <pre><code>Valid? {{form2.$valid}}
    Value: {{$ctrl.country2|json}}</code></pre>
</form>

### Combo remote

- ✅ Search input
- ✅ Only an element of the predetermined list can be selected
- ✅ Highlight selection
- ❓ Dropdown can be larger than combo-box if necessary

<form name="form3">
    <ui-select ng-model="$ctrl.country3"
            theme="bootstrap"
            reset-search-input="false"
            style="width: 600px;"
            title="Select a country"
            required>
        <ui-select-match placeholder="Select a country...">{{$select.selected.name}}</ui-select-match>
        <ui-select-choices repeat="country in $ctrl.countries | filter:{name: $select.search}">
            <span ng-bind-html="country.name | highlight: $select.search"></span>
        </ui-select-choices>
    </ui-select>
    <pre><code>Valid? {{form3.$valid}}
    Value: {{$ctrl.country3|json}}</code></pre>
</form>

#### Remote

- ✅ Only an element of the predetermined list can be selected

<form name="form4">
    <ui-select ng-model="$ctrl.address4"
            theme="bootstrap"
            reset-search-input="false"
            style="width: 600px;"
            title="Choose an address"
            required>
        <ui-select-match placeholder="Enter an address...">{{$select.selected.formatted_address}}</ui-select-match>
        <ui-select-choices repeat="address in $ctrl.addresses track by $index"
            refresh="$ctrl.refreshAddresses($select.search)"
            refresh-delay="0">
            <span ng-bind="address.formatted_address"></span>
        </ui-select-choices>
    </ui-select>
    <pre><code>Valid? {{form4.$valid}}
    Value: {{$ctrl.address4|json}}</code></pre>
</form>

### Multi-combo

- ✅ Only elements of the predetermined list can be selected
- ✅ Keep dropdown open (close-on-select="false")
- ❓ Selection with click on the label in the list
- ❓ Selection with click on the checkbox in the list
- ⛔ Selection with keyboard (arrows or tabs)
- ✅ Remove with click on the X in the Chips
- ❓ Remove with click on the checkbox or label in the list

<form name="form5">
    <ui-select ng-model="$ctrl.selectCountries"
            theme="bootstrap"
            style="width: 600px;"
            title="Select countries"
            multiple
            close-on-select="false"
            required>
        <ui-select-match placeholder="Select countries...">{{$item.name}}</ui-select-match>
        <ui-select-choices repeat="country in $ctrl.countries | filter:{name: $select.search}">
            <span ng-bind-html="country.name | highlight: $select.search"></span>
        </ui-select-choices>
    </ui-select>
    <pre><code>Valid? {{form5.$valid}}
    Value: {{$ctrl.selectCountries|json}}</code></pre>
</form>

#### [out of scope] Selection of IP with suggestions based on known IPs

- ✅ Can add new elements in the list
- ❓ Can validate format of these new elements

<form name="form6">
    <ui-select ng-model="$ctrl.selectedIps"
            theme="bootstrap"
            style="width: 600px;"
            title="Select IPs"
            multiple
            close-on-select="false"
            tagging
            required>
        <ui-select-match placeholder="Select IPs...">{{$item}}</ui-select-match>
        <ui-select-choices repeat="ip in $ctrl.ips | filter:$select.search">
            <span ng-bind-html="ip | highlight: $select.search"></span>
        </ui-select-choices>
    </ui-select>
    <pre><code>Valid? {{form6.$valid}}
    Value: {{$ctrl.selectedIps|json}}</code></pre>
</form>

### Extra features of ui-select

See https://github.com/angular-ui/ui-select/wiki/ui-select


