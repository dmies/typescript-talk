import * as _ from 'lodash';
import {Language} from './types/language';

const languages: Language[] = [
  {id: '1', name: '.NET'},
  {id: '2', name: 'TypeScript'},
  {id: '3', name: 'C#'},
  {id: '4', name: 'Java'},
];

export class LanguageService {
  constructor() {
  }

  getAll = (): Language[] => languages;

  getById = (id: string): Language => _.find(languages, {id: id});
}
