# Insteal

![](https://img.shields.io/badge/data-instagram-cc006c.svg)
![](https://img.shields.io/badge/node-v9.11.1-61BC62.svg)
![](https://img.shields.io/badge/working_as_of-june_16th_2018-blue.svg)

## Run locally

```bash
git clone git@github.com:kenziebottoms/insteal.git
cd insteal
npm install
node cli.js # args
```

<!-- TOC -->

- [Insteal](#insteal)
  - [Run locally](#run-locally)
  - [CLI Commands](#cli-commands)
    - [Profiles](#profiles)
      - [`node cli.js profile <username>`](#node-clijs-profile-username)
      - [`node cli.js profile <username> raw_feed <limit>`](#node-clijs-profile-username-raw_feed-limit)
      - [`node cli.js profile <username> feed <limit>`](#node-clijs-profile-username-feed-limit)
      - [`node cli.js profile <username> bio`](#node-clijs-profile-username-bio)
      - [`node cli.js profile <username> followers`](#node-clijs-profile-username-followers)
      - [`node cli.js profile <username> following`](#node-clijs-profile-username-following)
      - [`node cli.js profile <username> pic`](#node-clijs-profile-username-pic)
    - [Tags](#tags)
      - [`node cli.js tag <tagname>`](#node-clijs-tag-tagname)
      - [`node cli.js tag <tagname> raw_feed <limit>`](#node-clijs-tag-tagname-raw_feed-limit)
      - [`node cli.js tag <tagname> feed <limit>`](#node-clijs-tag-tagname-feed-limit)

<!-- /TOC -->

---

## CLI Commands

### Profiles

#### `node cli.js profile <username>`

Fetch raw `_sharedData` from `<username>`'s profile.

#### `node cli.js profile <username> raw_feed <limit>`

Fetch all raw data on `<username>`'s first `<limit>` posts, up to 12.

> `limit` is optional.

#### `node cli.js profile <username> feed <limit>`

Fetch cleaned-up data on `<username>`'s first `<limit>` posts, up to 12.

> `limit` is optional.

#### `node cli.js profile <username> bio`

Fetch `<username>`'s bio.

#### `node cli.js profile <username> followers`

Fetch number of followers `<username>` has.

#### `node cli.js profile <username> following`

Fetch number of users `<username>` is following.

#### `node cli.js profile <username> pic`

Fetch `<username>`'s profile picture URL.

### Tags

#### `node cli.js tag <tagname>`

Fetch raw `_sharedData` from `<tagname>`'s explore page.

#### `node cli.js tag <tagname> raw_feed <limit>`

Fetch all raw data on `<tagname>`'s top `<limit>` posts (the max is usually around 70).

> `limit` is optional.

#### `node cli.js tag <tagname> feed <limit>`

Fetch cleaned-up data on `<tagname>`'s top `<limit>` posts (the max is usually around 70).

> `limit` is optional.