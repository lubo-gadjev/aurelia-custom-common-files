System.config({
  "transpiler": "traceur",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "Eonasdan/bootstrap-datetimepicker": "github:Eonasdan/bootstrap-datetimepicker@4.14.30",
    "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.8.1",
    "aurelia-framework": "github:aurelia/framework@0.12.0",
    "aurelia-validation": "github:aurelia/validation@0.2.5",
    "jquery": "github:components/jquery@2.1.4",
    "moment": "github:moment/moment@2.10.3",
    "select2/select2": "github:select2/select2@4.0.0",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "github:aurelia/binding@0.7.3": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.8.1",
      "aurelia-metadata": "github:aurelia/metadata@0.6.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.5.0",
      "core-js": "npm:core-js@0.9.17"
    },
    "github:aurelia/dependency-injection@0.8.1": {
      "aurelia-logging": "github:aurelia/logging@0.5.0",
      "aurelia-metadata": "github:aurelia/metadata@0.6.0",
      "core-js": "npm:core-js@0.9.17"
    },
    "github:aurelia/framework@0.12.0": {
      "aurelia-binding": "github:aurelia/binding@0.7.3",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.8.1",
      "aurelia-loader": "github:aurelia/loader@0.7.0",
      "aurelia-logging": "github:aurelia/logging@0.5.0",
      "aurelia-metadata": "github:aurelia/metadata@0.6.0",
      "aurelia-path": "github:aurelia/path@0.7.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.5.0",
      "aurelia-templating": "github:aurelia/templating@0.12.1",
      "core-js": "npm:core-js@0.9.17"
    },
    "github:aurelia/loader@0.7.0": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-path": "github:aurelia/path@0.7.0",
      "core-js": "npm:core-js@0.9.17",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.6.3"
    },
    "github:aurelia/metadata@0.6.0": {
      "core-js": "npm:core-js@0.9.17"
    },
    "github:aurelia/templating@0.12.1": {
      "aurelia-binding": "github:aurelia/binding@0.7.3",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.8.1",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-loader": "github:aurelia/loader@0.7.0",
      "aurelia-logging": "github:aurelia/logging@0.5.0",
      "aurelia-metadata": "github:aurelia/metadata@0.6.0",
      "aurelia-path": "github:aurelia/path@0.7.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.5.0",
      "core-js": "npm:core-js@0.9.17"
    },
    "github:aurelia/validation@0.2.5": {
      "aurelia-binding": "github:aurelia/binding@0.7.3",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.8.1",
      "aurelia-templating": "github:aurelia/templating@0.12.1"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:core-js@0.9.17": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});

