function sku(conditions) {
  let i = 0
  const resArr = []
  function dfs(pre) {
    conditions[i].forEach((item) => {
      const res = [...pre, item]
      if (i === conditions.length - 1) {
        // save and return
        resArr.push(res)
      } else {
        i++
        dfs(res)
      }
    })
    i--
  }
  dfs([])

  console.log(resArr)
}

sku(
  [
    ['XS', 'XR'],
    ['blue', 'white'],
    ['64g', '128g'],
  ]
)