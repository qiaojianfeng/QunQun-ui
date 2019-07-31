#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# git init
git add -A
git commit -m 'deploy'


git remote add origin git@github.com:webweifeng/QunQun-ui.git
git push origin --delete gh-pages
git push origin master:gh-pages


cd -