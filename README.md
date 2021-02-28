# sundayisland-dashboard-server



<a href="#"><img src="https://res.cloudinary.com/dt4gyydev/image/upload/v1595121408/sunday_island/logo_w6vbta.png" title="Sunday Island" alt="SundayIsland Logo"></a>

<!-- [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com) -->


# Sunday Island Administrative Dashboard

> Backend Project, written in Node.js 

<!-- **Badges will go here**

- build status
- issues (waffle.io maybe)
- devDependencies
- npm package
- coverage
- slack
- downloads
- gitter chat
- license
- etc. -->

<!-- [![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger) [![Dependency Status](http://img.shields.io/gemnasium/badges/badgerbadgerbadger.svg?style=flat-square)](https://gemnasium.com/badges/badgerbadgerbadger) [![Coverage Status](http://img.shields.io/coveralls/badges/badgerbadgerbadger.svg?style=flat-square)](https://coveralls.io/r/badges/badgerbadgerbadger) [![Code Climate](http://img.shields.io/codeclimate/github/badges/badgerbadgerbadger.svg?style=flat-square)](https://codeclimate.com/github/badges/badgerbadgerbadger) [![Github Issues](http://githubbadges.herokuapp.com/badges/badgerbadgerbadger/issues.svg?style=flat-square)](https://github.com/badges/badgerbadgerbadger/issues) [![Pending Pull-Requests](http://githubbadges.herokuapp.com/badges/badgerbadgerbadger/pulls.svg?style=flat-square)](https://github.com/badges/badgerbadgerbadger/pulls) [![Gem Version](http://img.shields.io/gem/v/badgerbadgerbadger.svg?style=flat-square)](https://rubygems.org/gems/badgerbadgerbadger) [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org) [![Badges](http://img.shields.io/:badges-9/9-ff6799.svg?style=flat-square)](https://github.com/badges/badgerbadgerbadger) -->
<!-- 
- For more on these wonderful ~~badgers~~ badges, refer to <a href="http://badges.github.io/badgerbadgerbadger/" target="_blank">`badgerbadgerbadger`</a>. -->




<!-- > GIF Tools

- Use <a href="http://recordit.co/" target="_blank">**Recordit**</a> to create quicks screencasts of your desktop and export them as `GIF`s.
- For terminal sessions, there's <a href="https://github.com/chjj/ttystudio" target="_blank">**ttystudio**</a> which also supports exporting `GIF`s.

**Recordit**

![Recordit GIF](http://g.recordit.co/iLN6A0vSD8.gif)

**ttystudio**

![ttystudio GIF](https://raw.githubusercontent.com/chjj/ttystudio/master/img/example.gif)

--- -->

## Table of Contents (Optional)
- [Installation](#installation)
- [Setup](#setup)
- [Config](#config)
- [License](#license)


---

## Example (Optional)


---

## Installation

- Ensure you have node and npm installed on your machine. To install, please refer to this <a href="https://phoenixnap.com/kb/install-node-js-npm-on-windows" target="_blank">link</a>.


### Clone

- Clone this repo to your local machine using 
```shell
$ git clone https://github.com/precisemedia/sundayisland-dashboard-server.git

```

## Setup

>### Dependencies
- In the project root folder, install all the npm dependencies.

```shell
$ npm install
```

>#### SSL

- To enable the app to run locally, you need to generate an SSL certificate and a key. You can do this by using <a href="https://github.com/FiloSottile/mkcert">mkcert</a>. It is a simple tool for making locally-trusted development certificates. Install mkcert from powershell
```shell
$ mkcert -install
```
- After installing mkcert, create a certificate for the localhost, using the mkcert command
 ```shell
$ mkcert localhost 127.0.0.1 
```
- This will create a certificate for the localhost. Save the generated files in the project's root folder as "cert.pem" for the certificate and "key.pem" for the key

>#### Database

- You can set up the database using Xampp and PhpmyAdmin. Create a Database named "sunday_island". The tables will be  created when the app is started.
The database credentials are pre-configured in config/development.json
```javascript

  "database": {
    "username": "root",
    "password": null,
    "database": "sunday_island",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  // ...
};
```

---

## Usage
- Run the app using npm.
 ```shell
$ npm run server
```

---

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
