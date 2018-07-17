// capitalize every word

String.prototype.toJadenCase = function () {
  return this.split(' ').map(function (item) {
    return item.replace(item.charAt(0), item.charAt(0).toUpperCase());
  }).join(' ');
};