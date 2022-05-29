import { renderSearchFormBlock} from '../public/scripts/search-form.js'
import { renderSearchStubBlock } from '../public/scripts/search-results.js';
import { renderUserBlock } from '../public/scripts/user.js';
import { renderToast } from '../public/scripts/lib.js';

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('0')
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
