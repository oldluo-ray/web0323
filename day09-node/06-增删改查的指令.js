// db.stus.insert({name: 'zs', age: 18, gender: '男'})
// 增删改查:
// create: 增
// db.集合名.insert()  添加文档
// db.集合名.insertOne(文档) 添加一个文档
// db.集合名.insertMany([文档, 文档]) 添加多个文档
// db.stus.insertOne({name: 'ls', age: 20})
// db.stus.insertMany([{name: 'ww', age: 17, gender: '女', info: '嘿嘿'},{name: 'zl'}])

// find: 查
// db.stus.find() // 查找当前集合下的所有的数据
// db.stus.find({age: 18}) // 查找年龄为18的数据
// db.stus.find({age: {$gte: 18}}) //查找大于等于18岁的
// db.stus.find({age: 20, gender:'女'}) // 查找年龄为20并且性别是女
// db.stus.find({age: {$in: [17,18,20]}}) // 找到年龄是17,或18,或20的数据
// db.stus.find({$or: [{age: 17},{age:20, gender: '男'}]}) // 找到年龄为17或者 年龄为20并且性别为男的数据
// db.stus.find({age: {$ne: 20}}) // 找到年龄不是20岁的
// db.stus.find({name: /^z/}) // 查找名字为z开头的

// db.stus.find({$where: function(){
// 数据库中有多少数据,这个回调函数就被调用多少次. 每一次调用如果返回true.就表示对应的这条数据符合条件.返回false就表示不符合条件
//     return this.name === 'zs' && this.age === 18
// }})

// db.stus.find({},{age: 1, _id: 0}) // 要查看所有数据,但是每一条数据,就只查看age
// db.stus.find({},{age: 0}) // 其他都要看,就不想看age

// update: 改

// db.stus.update({age: 20}, {$set: {name: '呵呵呵'}})
// db.stus.update({age:20}, {$set: {info: '沛华锡纸烫'}},{multi:true})
// db.stus.updateOne({age:20}, {$set: {gender: '女'}})
// db.stus.updateMany({age:{$gte:17}}, {$set: {info: '海静喜欢'}})

// 删除

// db.stus.remove({ age: 17 })

// db.stus.find()
