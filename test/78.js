
var assert = require('assert')

module.exports = function (_, dir, finish, gm) {
  if (!gm.integration) return finish();

  var magick = _._options.imageMagick;
  var name = magick ? '78-IM' : '78';
  var out = dir + '/' + name;

  _.resize(600, 450, '!').write(out + '.png', function (err) {
    if (err) return finish(err);

    var img = gm(out + '.png');
    if (magick)
      img.options({ imageMagick: true });

    img
    .crop(70, 70, 100, 100)
    .resize(50, 50)
    .write(out + '-2.jpg', function (err) {
      if (err) return finish(err);
      finish();
    })
  });

}
