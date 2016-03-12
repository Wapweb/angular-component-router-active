# angular-component-router-active

routerActive directive for angular 1.5 component router

## Install

```bash
$ npm install angular-component-router-active --save
```

## Usage

1. Add module to your app
```javascript
angular.module('app', ['wapweb.componentRouterActive']);
```
If you use es6:
```javascript
import angularComponentRouterActive from 'angular-component-router-active';
angular.module('app', [angularComponentRouterActive]);
```

2. Add `router-active` directive to your template
```html
<ul>
    <li router-active="active">
        <div>
            <a ng-link="['Test']">Test component</a>
        </div>
    </li>
    <li>
        <a router-active="active" ng-link="['Other']">Other component</a>
    </li>
</ul>
```
