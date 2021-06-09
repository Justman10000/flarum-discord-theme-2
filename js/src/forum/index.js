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
    flar_style.id = "serakoi-discordtheme-authorbadge";

    flar_head.appendChild(flar_style);

    console.log(document.getElementById("serakoi-discordtheme-authorbadge").lengthC)

    function checkIfStyleExists(){
      if(document.getElementById("serakoi-discordtheme-authorbadge")[0]) return true;
      return false;
    }

    if (flar_style.styleSheet){
      if(checkIfStyleExists()) return;
      flar_style.styleSheet.cssText = flar_css;
    } else {
      if(checkIfStyleExists()) return;
      flar_style.appendChild(document.createTextNode(flar_css));
    }
  });
});
