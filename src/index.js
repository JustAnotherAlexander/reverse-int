module.exports = function reverse (n) {

  if (n<0) {
      n=n*-1;
  }
  n=n+'';
  n=n.split('');
  n.reverse();

  n=n.join('');

  return n;
}
