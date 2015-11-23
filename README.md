# tpo

Requires Linux, [for example](http://www.ubuntu.com/download/desktop)

1. First, [install] (https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions) __nodejs__ and __npm__
2. And [java](http://askubuntu.com/questions/48468/how-do-i-install-java)
3. Next:

```
git clone https://github.com/vladpalkanov/tpo.git & cd tpo
```

4. Next:
```
npm i
```

You can install mocha globally:
```
sudo npm i -g mocha
```

To launch:
```
java -jar selenium-server-standalone-2.48.2.jar
mocha --timeout 1200000 --slow 10000 tests/testFileName.js
```
