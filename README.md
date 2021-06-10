# Adsum Space

- ReactJS  
- Redux 
- Redux-saga
- Ruby on Rails API
- Heroku App

Playground

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

#### Heroku
First, create app
```
heroku apps:create
```
Let’s now tell Heroku to start by building the node app using package.json, and then build the rails app.
```
heroku buildpacks:add heroku/nodejs --index 1
heroku buildpacks:add heroku/ruby --index 2
```
Last thing is to change our `react-scripts` from `devDependencies` to `dependencies`. Why? Because Heroku sets an `ENV` var, `NPM_CONFIG_PRODUCTION`, to `true`, which means your build will disregard any devDependencies and it will fail, nicht gut.
Now we are ready to push this out to Heroku.
```
git add .
git commit -m "ready for first push to heroku"
git push heroku master
```
Let’s not forget to create and seed the database…
```
heroku run rake db:migrate
heroku run rake db:seed
```

[__Heroku link__](https://infinite-sands-15879.herokuapp.com)

*Have a good day!*
