/*

    说说你对git的理解: 

        1. git是一个版本控制工具 
        2. git分布式的 
        3. git本地仓库有工作区,暂存区, 版本区


    如何使用git管理自己的本地仓库

    项目名称: myProject 
        1. git初始化 git init 在项目中增加了一个.git  
        2. 将工作区的代码,添加到暂存区  git add . 
        3. 需要将暂存区的代码添加到版本区 git commit -m '注释'
        4. 查看状态 git status

        5. 查看版本号 git log / git reflog 

        6. 版本回退: git reset --hard 版本号 

        7. 暂存区和版本区的代码的差异  git diff --caches


    如何将自己的本地仓库推送到远程仓库

        1. 先建立一个远程仓库 
        2. 将本地仓库和远程仓库关联起来 
            git remote add origin 地址 
        3. 首次推送代码
            git push -u origin master 
        4. 后面再推送
            git push

        5. 要将dev分支也推送到远程仓库
            git push origin dev

        分支管理: 

            查看分支
                git branch

            创建分支
                git branch 分支名

            切换分支
                git checkout 分支

            创建并切换分支

                git checkout -b 分支

            删除分支

                git branch -d 分支

            合并分支

                git merge 分支

    如何将远程仓库下载到本地

            如果是自己的仓库: 使用ssh .别人的使用https 

            git clone 地址 克隆的时候,相当于进行关联 

            后面远程仓库更新了,项拉取最新的代码
            git pull 














*/
