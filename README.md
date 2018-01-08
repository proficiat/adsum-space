# Adsum Space

Space Ship Shielded Badlands :)

This is about No Message.

### Getting started

#### Install API & WEB
```
git clone https://github.com/proficiat/adsum-space.git
$ cd adsum-space
$ bundle
$ cd client
$ yarn install
$ cd ..
$ rake db:migrate
$ rake db:seed
```

#### Run API & WEB
Mac (using foreman):
```
$ rake start
```
Windows:
```
$ cd bin
$ rails s -p 3001
$ cd ..
$ cd client
$ yarn start
```
Now you are able to open [Web](http://localhost:3000) & [API](http://localhost:3001)
on your browser!

#### How to contribute
First, you must create your branch locally. (Replace your_branch with your branch name)
```
$ git checkout -b your_branch
```
After that, you can work locally in your branch, when you are ready to share the branch, push it. The next command push the branch to the remote repository origin and tracks it
```
$ git commit -m "..."
$ git push -u origin your_branch
```

[__Heroku link__](https://shielded-badlands-82587.herokuapp.com/)

*Have a good day!*
