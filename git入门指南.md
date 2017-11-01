[README](https://github.com/youngjuning/OcaloneShop/blob/master/README.md)

## 一、Git简介

![git](http://cdn.wakeuptocode.me/images/2017/10/small-git.png)是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。

Git 是 [![Linus Torvalds](http://cdn.wakeuptocode.me/images/2017/10/linus-torvalds.jpg)](http://www.ruanyifeng.com/blog/2012/09/linus_torvalds.html) 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。Git 与常用的版本控制工具 CVS, Subversion 等不同，它采用了分布式版本库的方式，不必服务器端软件支持。

下载地址：https://git-scm.com/downloads ，现在就开始你的Git之旅吧！！

## 二、Git配置

### 2.1 配置用户名和邮箱

```bash
$ git config --global user.name "youngjuning"
$ git config --global user.email "youngjuning@aliyun.com"
```

## 三、单机命令

所谓单机是相对于 git pull、git push、git clone等命令而言。

| 命令                                      | 解释                                 | 备注                         |
| ----------------------------------------- | ------------------------------------ | ---------------------------- |
| git init                                  | 初始化一个Git仓库                    | 会在当前目录下生成.git文件夹 |
| git add <file>...                         | 把工作区的指定修改stage到缓存区      | stage表示添加修改到环缓存区  |
| git add .                                 | 把工作区的所有修改stage到缓存区      | .代表所有修改                |
| git commit <file>... -m  "commit message" | 提交指定文件到本地仓库               | -m：-message  提交信息       |
| git commit --all/-a -m "commit message"   | 一次性把所有暂存区的文件放入本地仓库 | --all：必须是两个-           |
| git status                                | 查看当前git工作区的状态              |                              |
| git log                                   | 查看提交日志                         | 注意不是操作日志             |
| git log --oneline                         | 查看简洁版提交日志                   | --oneline：必须链两个-       |
| git reset --hard  HEAD                    | 回退到指定版本                       | HEAD 7位                     |
| git reset --hard  HEAD~number             | 回退指定次数                         | HEAD就是HEAD                 |

### git status

![gitflow](http://cdn.wakeuptocode.me/images/2017/10/gitflow.jpg)

#### 1.git init

初始化成功后，如果工作空间为空，执行 `git status`：
![no-commits-yet](http://cdn.wakeuptocode.me/images/2017/10/no-commits-yet.png)

**翻译：**

```bash
On branch master #当前分支：master

No commits yet # 还没有一个提交

nothing to commit(create/copy files and use "git add" to track)
# 没有东西可以被提交（创建或复制一些文件并且把它们添加到暂存区）
```

> track：vt.跟踪；监测

#### 2.echo readme > README.md

这个命令在 CMD 命令行是不能运行的，请使用 Git Bash，它的意思是新建一个文件 `README.md` 并写入字符串 `readme`，执行 `git status`：

![Untracked files](http://cdn.wakeuptocode.me/images/2017/10/Untracked-files.png)

**翻译：**

```bash
On branch master #当前分支：master

No commits yet # 还没有一个提交

Untracked files # 存在没有被跟踪的文件
  (use "git add <file>..." to include in what will be committed)
  # (使用 "git add <file>..." 来把你要提交的东西放到暂存区)
  # red[没有被跟踪的文件列表===工作区的文件列表]
nothing to commit(create/copy files and use "git add" to track)
# 没有东西可以被提交（创建或复制一些文件并且把它们添加到暂存区）
```

#### 3.git add .

`git add .` 表示添加所有没有被跟踪的文件到暂存区中，你也可以使用 `git add <files>` 提交指定的文件，我们来执行 `git status`：

![changes-to-be-committed](../../../../qiniu/images/2017/10/changes-to-be-committed.png)

**翻译：**

```bash
On branch master #当前分支：master

No commits yet # 还没有一个提交

Changes to be committed: # 一些更改可以提交
  (use "git rm --cached <file>..." to unstage) # 用 ... 把修改从暂存区取出来，也就是撤销修改

  # green[.....]：暂存区中的文件列表
```

#### 4. git commit -m "测试提交" --all

这个命令表示提交所有暂存的文件到本地仓库中并写message：`-m` 是添加注释的参数， `--all` 是表示提交所有的暂存区中文件，我们使用 `git status` 来查看当前状态：

![woking-tree-clean](http://cdn.wakeuptocode.me/images/2017/10/woking-tree-clean.png)

**翻译：**

```bash
On branch master #当前分支：master
nothing to commit, working tree clean # 暂存区没有文件、工作区的文件也没有被修改
```

### feature分支相关命令

| 命令                             | 解释                                                             |
| -------------------------------- | ---------------------------------------------------------------- |
| git branch                       | 列出本地已经存在的分支，并且在当前分支的前面加“*”号标记        |
| git branch -r                    | 列出远程分支                                                     |
| git branch -a                    | 列出本地分支和远程分支                                           |
| git branch [feature]             | 创建一个新的本地分支，需要注意，此处只是创建分支，不进行分支切换 |
| git branch -m  featureA featureB | 重命名分支，如果featureB名字分支已经存在，则需要使用-m强制重命名 |
| git branch -d featureA           | 删除featureA分支                                                 |
| git branch -d -r featureA        | 删除远程featureA分支                                             |
| git checkout featureA            | 切换到分支 featureA                                              |
| git checkout -b featureA         | 创建并切换分支                                                   |
| git merge featureA               | 合并featureA到当前分支                                           |

## 四、[git远程操作](http://www.ruanyifeng.com/blog/2014/06/git_remote.html)

### 4.1 git remote

#### git remote不带参数

列出已经存在的远程分支

#### git remote -v | --verbose

列出详细信息，在每一个名字后面列出其远程url

#### git remote add origin

添加远程GitHub,origin是默然的，管它呢。

```bash
$ git remote add origin git@github.com:yourname/yourgit.git
```

这个东西其实就在 `.git\config` 中，你可以进去看看。

### 4.2 git push

```
$ git push -u origin master //将本地的master分支推送到origin主机，同时指定origin为默认主机
$ git push origin gh-pages
```

### 4.3 git fetch

命令用于从另一个存储库下载对象和引用：

```bash
$ git fetch <远程主机名> <分支名>
```

```bash
$ git fetch origin master
```

### 4.4 git pull

```bash
$ git pull <远程主机名> <远程分支名>:<本地分支名>
```

### 4.5 git clone

```bash
$ git clone <版本库的网址>
```

### 扩展阅读

1. [git使用简易指南](http://www.bootcss.com/p/git-guide/)
2. [Pro Git 简体中文版](http://iissnan.com/progit/)
3. [Git教程|菜鸟教程](http://www.runoob.com/git/git-tutorial.html)
4. [Git教程 - 廖雪峰的官方网站](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/)
5. [Git -Documentation](https://git-scm.com/doc)
