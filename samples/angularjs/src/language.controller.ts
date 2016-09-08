import {Language} from './types/language';
import {LanguageService} from './language.service';

interface LanguageControllerScope extends ng.IScope {
    languages: Language[]
}

export class LanguageController {
    static $inject = ['$scope', 'LanguageService'];

    constructor($scope: LanguageControllerScope, languageService: LanguageService) {
        $scope.languages = languageService.getAll();
    }
}