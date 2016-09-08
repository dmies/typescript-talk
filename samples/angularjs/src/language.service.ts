import * as _ from 'lodash';
import {Language} from './types/language';

const languages: Language[] = [
  {id: '1', name: 'C'},
  {id: '2', name: 'Java'},
  {id: '3', name: 'Python'},
  {id: '4', name: 'JavaScript'},
];

export class LanguageService {
  constructor() {
  }

  getAll = (): Language[] => languages;

  getById = (id: string): Language => _.find(languages, {id: id});
}
