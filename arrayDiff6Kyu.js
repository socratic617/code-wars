function arrayDiff(a, b) {
  let result = []

  if (a.length === 0) {
    return []
  }

  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
      result.push(a[i]);
    }
  }
  for (let i = 0; i < b.length; i++) {
    if (a.indexOf(b[i]) === -1) {
      result.push(b[i])
    }
  }
  return result
}

