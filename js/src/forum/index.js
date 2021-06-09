import { extend } from 'flarum/extend';
import HeaderPrimary from 'flarum/components/HeaderPrimary'
import app from 'flarum/app';

app.initializers.add('serakoi/flarumdiscordtheme', () => {
  extend(HeaderPrimary.prototype, 'view', (vdom) => {
    let authorBadgeText = app.forum.attribute('authorBadge') ? app.forum.attribute('authorBadge').toString() : "Author";

    console.log('Test:',authorBadgeText)

    var flar_css = `article.CommentPost.Post.Post--by-start-user .Post-header h3 span.username:after { 
      content: "${authorBadgeText}"; 
    }`,
    flar_head = document.head || document.getElementsByTagName('head')[0],
    flar_style = document.createElement('style');

    flar_head.appendChild(flar_style);

    if (flar_style.styleSheet){
      // This is required for IE8 and below.
      flar_style.styleSheet.cssText = flar_css;
    } else {
      flar_style.appendChild(document.createTextNode(flar_css));
    }
  });
});
