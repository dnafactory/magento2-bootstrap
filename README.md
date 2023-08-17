## Bootstrap source integration for Magento 2
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg?style=for-the-badge)](https://opensource.org/licenses/BSD-3-Clause)
[![Magento](https://img.shields.io/badge/Bootstrap-v4.5.3-blueviolet.svg?logo=bootstrap&&style=for-the-badge)](https://github.com/twbs/bootstrap)
======

In [packagist](https://packagist.org/packages/jaroslawzielinski/magento2-bootstrap).

This Magento 2 module provides a full integration of [Bootstrap 4](https://getbootstrap.com/) 's sources.

**This is not a porting!**

It uses [dnafactory/module-scss](https://github.com/dnafactory/magento2-module-scss) to integrate the official [Bootstrap 4 package](https://github.com/twbs/bootstrap)
so it can be built with your Magento 2 theme configuration.
___

### Installation
The extension must be installed via composer:

```shell script
composer require dnafactory/module-bootstrap
php bin/magento module:enable DNAFactory_Bootstrap
php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy
```

### How to use CSS
By default, the extension will deploy a *DNAFactory_Bootstrap/css/bootstrap.css* build based on all Magento .less lib values defined in your active theme.
So, if you want to change some theme specific style as can be the primary color, you can do it by simply editing *@theme__color__primary* in your **css/sources/_theme.less** file, as usual.

However, you can change these values or add other custom variables using one or more of the extension points provided:
- **source/scss/themes/_extends.scss** where you can put your custom scss vars and other useful stuff, which we will cover later in this document.
- **source/scss/_extends.scss** where you can put Bootstrap-specific customizations in scss
- **source/scss/_extend.scss** module related extension file, for small customizations.

#### Well, what if I'm working on a custom theme?
Just put your .less theme variables file reference in **source/scss/themes/_extends.scss**:
```scss
// @vars_import 'source/my_marvellous_theme/_variables.less';
```
or, when your variables file is stored in a theme-level directory (most common case):
```scss
//@vars_import (lib) 'relative_path_to_theme_base_css_dir/_variables.less'
```
For example, using
```scss
//@vars_import (lib) '../../_variables.less'
```
from **view/frontend/web/css/source/scss/themes/_magento.scss**, it will point to **YourVendor/YourTheme/your_locale/css/source**.

Refer to [dnafactory/module-scss's doc](https://github.com/dnafactory/magento2-module-scss), for more info about the *@vars_import* directive.

### How to use JS
Bootstrap js plugins are designed to run on demand and they can be requested using these aliases:
- bs.alert
- bs.button
- bs.carousel
- bs.collapse
- bs.dropdown
- bs.modal
- bs.popover
- bs.scrollspy
- bs.tab
- bs.toast
- bs.tooltip

Simply add the required plugin to your module's dependencies.

### Note for Developers
To update one or more dependencies (as Bootstrap or popper.js) to the latest one, just use npm as needed and then run:
```shell script
npm run update-src
```

*Happy Coding*
