/*


    数据库分类: 

        关系型数据库  mySQL
            数据库
            表
            字段
            数据行


        非关系型数据库 mongoDB
            数据库
            集合
            文档



    mongodb原生操作数据库的指令

        往数据库中插入一条数据 name age info

            db.集合名.insert({name: xxx, age:xxx, info: xxx})


        查找数据库中所有年龄为20或22的数据, 但是只看name,其他信息不看

            db.集合名.find({age: {$in: [20,22]}},{name: 1, _id: 0})

        将年龄为20的数据的info信息改为'合格'
            db.集合名.update({age: 20},{$set: {info: '合格'}})

        删除年龄低于20岁的数据
            db.集合名.remove({age: {$lt: 20}})






*/
