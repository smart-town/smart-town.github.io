# 分支开发工作流

现在已经学会新建和和并分支，那么可以或者应该用它来做什么呢？这里是一些常见的利用分支进行开发的工作流程。

## 长期分支

因为 Git 使用简单的三方合并，所以就算在一段较长的时间内，反复把一个分支合并入另一个分支，也不是什么难事。也就是说，在整个项目开发周期的不同阶段，你可以同时拥有多个开放的分支，你可以定期地把某些特性分支合并入其他分支中。

许多使用Git的开发者都喜欢这种工作方式来工作，比如只在master分支上保留完全稳定的代码，他们还有一些名为develop或者next的平行分支，被用来做后续开发或者测试稳定性——这些分支不必保持绝对稳定，但是一旦达到了稳定状态，他们就可以合并入master分支了，这样，在确保这些已经完成的特性分支（短期分支）能够通过所有测试，并且不会引入更多bug之后，就可以合并入主干分支中。等待下一次的发布。】

事实上这里讨论的，是随着你的提交而不断右移的指针。稳定分支的指针总是在提交历史中落后一大截，而前沿分支往往比较靠前。通常将它们想象成流水线，那些经过测试考验的提交会被遴选到更加稳定的流水线上去。

你可以用这种方法维护不同层次的稳定性，一些大型项目还有一个`proposed`或者`proposed updates`分支，它们可能因为包含一些不成熟的内容而不能进入next或者master分支，这样做的目的是使得你的分支具有不同级别的稳定性，当他们具有一定程度的稳定性后再将它们合并入具有更高级别稳定性的分支当中。再次强调，使用多个长期分支的方法并非必要，但是这么做通常很有帮助，尤其是当你在一个非常庞大或者复杂的项目中工作的时候。

## 特性分支

特性分支对于任何规模的项目都适用，特性分支是一种短期分支，它被用来实现单一特性或者其他相关工作。也许你从来没有在其他版本控制系统上这么做过，因为在那些版本控制系统中创建和合并分支通常很费劲。然而，在 Git 中一天之内多次创建、使用、合并、删除分支都很常见。

上面中提到的error和hotfix分支中就是这种用法。你在这两个分支中提交了一些更新，并且在它们合并入主干分之后，又删除了它们。这项技术能使你快速并且完整地进行上下文切换。因为你爹工作被分散到不同的流水线中，在不同的流水线中每个分支都仅仅与其目标特性相关。因此在做代码审查之类的工作的时候就能更加容易地看出你做了哪些改动。你可以将做出的改动在特性分支中保留几分钟、几天甚至几个月，等到成熟之后再做合并，而不用在乎它们建立的顺序或者工作进度。

考虑这样一个例子：你再master分支上工作到C1，这个时候为了解决一个问题而新建 iss91 分支，在 iss91 分支上工作到 C4，然而对于那个问题你又有了新的想法，于是你再创建一个 iss91v2 分支试图用另一种方法解决那个问题，接着你回到了 master 分支工作了一会儿，你又冒出了一个不太确定的想法，你便在 C10 的时候新建一个 dumbnidea 分支来在上面做一些实验。

现在假设：你决定使用第二种方案来解决按个问题，即使用 iss91v2 中的解决方案。另外，你将 dumbidea 分支给同事看过之后，结果发现这是个惊人之举，这个时候可以抛弃 iss91 分支（即丢弃 C5 和 C6）提交，然后把另外的两个分支合并入主干分支。

需要注意的是，当你做这么多操作的时候，这些分支全部都存于本地，当你新建和合并分支的时候，所有这些都只发生在你本地的Git版本库中——没有与服务器发生交互

## 远程分支

远程引用是对远程仓库的引用（指针），包括分支、标签等等。你可以通过`git ls-remote`来显式获得远程引用的完整列表，或者通过`git remote show (remote)`来获得远程分支的更多细节。然而，一个更常见的做法是利用远程跟踪分支。

远程跟踪分支是远程分支状态的引用，它们是你不能移动的本地引用，当你做任何网络通信操作的时候，它们会自动移动，远程跟踪分支像是你上次连接到远程仓库时，那些分支所处状态的书签。

它们以remote/branch的形式命名，例如，如果你想要看你最后一次与远程仓库 origin 通信时 master 的状态，可以查看origin/master分支。你与同事合作解决了一个问题并且他们推送了一个 iss53 分支，你可能有自己本地的 iss53 分支，但是在服务器上的分支会指向 origin/iss53 的提交。

这可能有些难以理解，看一个例子。假设你的网络里由一个在git.ourcompany.com的Git服务器。如果你从这个克隆，Git的clone命令会为你自动将其命名为origin，拉取他的所有的数据。创建一个指向它的master分支的指针。并且在本地命名为origin/master，Git也会给你一个与origin的master分支在指向同一个地方的本地master分支，这样你就有了工作的基础。

如果你在本地的master分支上做了一些工作，然而在同一时间，其他人推送提交到git.ourcompany.com并且更新了它的master分支，那么你的提交历史将向不同的方向前进。也许，只要你不与origin服务器链接，你的origin/master指针就不会移动。如果要同步你的工作，运行`git fetch origin`命令，这个命令查找"origin"是哪一个服务器，从中抓取本地没有的数据，并且更新本地数据库，移动origin/master指针指向新的、更新后的位置。

为了演示有多个远程仓库和远程分支的情况，我们假定你有另一个内部Git服务器，仅用于你的spring小组开发工作。这个服务器位于git.team1.ourcompany.com。你可以运行git remote add 命令添加有一个新的远程仓库引用到当前的项目。