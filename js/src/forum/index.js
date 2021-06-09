import { extend } from 'flarum/extend';
import HeaderPrimary from 'flarum/components/HeaderPrimary'
import app from 'flarum/app';

app.initializers.add('serakoi/flarumdiscordtheme', () => {
  extend(HeaderPrimary.prototype, 'view', (vdom) => {
    let authorBadgeText = app.forum.attribute('authorBadge') ? app.forum.attribute('authorBadge').toString() : "Author";

    console.log('Test:',authorBadgeText)
  });
});
