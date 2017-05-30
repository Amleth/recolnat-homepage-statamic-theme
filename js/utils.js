function makeInt(_) {
  _ = parseInt(_);
  if (isNaN(_)) return null;
  return _.toLocaleString('de-DE').replace(/\./g, ' ');
}
