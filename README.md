# Insteal

<!-- TOC -->

- [Insteal](#insteal)
  - [CLI Commands](#cli-commands)
    - [Profiles](#profiles)
      - [`node cli.js profile <username>`](#node-clijs-profile-username)
      - [`node cli.js profile <username> feed`](#node-clijs-profile-username-feed)
      - [`node cli.js profile <username> feed <limit>`](#node-clijs-profile-username-feed-limit)
      - [`node cli.js profile <username> bio`](#node-clijs-profile-username-bio)
      - [`node cli.js profile <username> followers`](#node-clijs-profile-username-followers)
      - [`node cli.js profile <username> following`](#node-clijs-profile-username-following)
      - [`node cli.js profile <username> pic`](#node-clijs-profile-username-pic)
    - [Tags](#tags)
      - [`node cli.js tag <tagname>`](#node-clijs-tag-tagname)
      - [`node cli.js tag <tagname> feed`](#node-clijs-tag-tagname-feed)
      - [`node cli.js tag <tagname> feed <limit>`](#node-clijs-tag-tagname-feed-limit)

<!-- /TOC -->

---

## CLI Commands

### Profiles

#### `node cli.js profile <username>`

Fetch raw `_sharedData` from `<username>`'s profile.

#### `node cli.js profile <username> feed`

Fetch data on `<username>`'s first 12 posts.

#### `node cli.js profile <username> feed <limit>`

Fetch data on `<username>`'s first `<limit>` posts, up to 12.

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

#### `node cli.js tag <tagname> feed`

Fetch data on `<tagname>`'s top posts, up to 100 (the max is usually around 70).

#### `node cli.js tag <tagname> feed <limit>`

Fetch data on `<tagname>`'s top `<limit>` posts (the max is usually around 70).