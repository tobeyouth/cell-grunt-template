####说明

一个简单的`grunt template`，目前仅仅包括：

- transport
- concat
- copy
- uglify

四个步骤。

使用之前需要安装`grunt-cli`和`grunt-init`

	npm install grunt-cli -g
	
	npm install grunt-init -g
	
####使用方法

首先切换到当前用户的.grunt-init目录中
	
	cd ~/.grunt-init

如果该目录没有创建，则创建该目录
	
	mkdir .grunt-init
	
然后clone代码到本地
	
	git clone git@github.com:tobeyouth/cell-grunt-template.git
	
	
最后，切换到项目文件夹中，执行`grunt-init cell-grunt-template`即可

项目内的`concat`部分文件地址需要自己在`Gruntfile.js`中定义；这部分是用于定义合并之后的工程文件，也就是未压缩的可上线文件的。

####两条指令

1.本地调试
	
	grunt

2.发布

	grunt release
	
####todo:
1. md5戳
2. 生成资源关系文件
3. 语法检测
4. 单元测试
5. 


