import app from 'flarum/app';

app.initializers.add('serakoi/flarumdiscordtheme', () => {
  let authorBadgeText = app.forum.attribute('authorBadge') ? app.forum.attribute('authorBadge').toString() : "Author";

  console.log(authorBadgeText)

  // const flar_head = document.getElementsByTagName("HEAD")[0];

  // if(flar_head){
  //   const ext_style = document.createElement('style');

  //   flar_head.appendChild(ext_style);

  //   let customBadgeCss = `
  //     article.CommentPost.Post.Post--by-start-user .Post-header h3 span.username:after {
  //       content: ${authorBadgeText};
  //     }
  //   `

  //   if (style.styleSheet){
  //     ext_style.styleSheet.cssText = customBadgeCss;
  //   } else {
  //     ext_style.appendChild(document.createTextNode(customBadgeCss));
  //   }
  // }
});
