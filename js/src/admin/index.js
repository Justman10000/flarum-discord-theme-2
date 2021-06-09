import app from 'flarum/app';

app.initializers.add('serakoi/flarumdiscordtheme', () => {
  app.extensionData.for('serakoi-flarumdiscordtheme').registerSetting({
    setting: 'serakoi-flarumdiscordtheme.authorBadge',
    name: 'authorBadge',
    type: 'text',
    label: app.translator.trans('serakoi-flarumdiscordtheme.admin.authorBadge.label'),
    help: app.translator.trans('serakoi-flarumdiscordtheme.admin.authorBadge.help'),
  });
});
