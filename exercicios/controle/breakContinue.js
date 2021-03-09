const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (x in nums) {
    if (x == 5) break
    console.log(`${x} = ${nums[x]}`)
}
console.log(`\/\/\/\/\/\/`)
for (y in nums) {
    if (y == 5) continue
    console.log(`${y} = ${nums[y]}`)
}

externo:
    for (z in nums) {
        for (a in nums) {
            if (z == 2 && a == 3) break externo
            console.log(`Par = ${z},${a}`)
        }
    }