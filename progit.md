## Git 学习笔记
1. git diff 比较的是工作目录当前文件和暂存区域快照直接的差异

2. git diff --cached , git diff --staged效果一样，都是查看已经暂存的文件和上次提交时的快照之间的差异

3. git rm 会在文件系统上删除文件， 而git rm --cached 只会在暂存区删除，解除跟踪，不会在文件系统上删除


4. git push origin :serverfix 执行这个命令可以origin上的serverfix分支删除。无厘头的删除远程分支的方法