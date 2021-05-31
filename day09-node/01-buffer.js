// const buffer = new Buffer(10)
// const buffer = Buffer.alloc(10)
// const buffer = Buffer.allocUnsafe(10)
const buffer = Buffer.from('你好')
console.log(buffer)
console.log(buffer.toString())

//Buffer.alloc()  安全, 但是效率相对不高
//Buffer.allocUnsafe() 不安全,但是相对效率高
// Buffer.from()  将其他类型,转成buffer
