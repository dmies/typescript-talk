import {LanguageService} from './language.service';
import {LanguageController} from './language.controller';

angular.module('hello.typescript', [])
    .controller('LanguageController', LanguageController)
    .service('LanguageService', LanguageService);
