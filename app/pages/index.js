import angular from 'angular';

const bulk = require('bulk-require');
const pagesModule = angular.module('app.pages', []);
const pages = bulk(__dirname, ['./**/!(*index|*.spec).js']);

function declare(pageMap) {
  Object.keys(pageMap).forEach((key) => {
    let item = pageMap[key];

    if (!item) {
      return;
    }

    if (item.fn && typeof item.fn === 'function') {
      pagesModule.controller(item.name, item.fn);
    } else {
      declare(item);
    }
  });
}

declare(pages);

export default pagesModule;
