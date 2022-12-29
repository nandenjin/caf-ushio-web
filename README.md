# 🗺 caf-ushio-web

Website for Kazumi Inada Solo Exhibition "Ushio". Visit site: [gendai-art.org/caf/inada](https://gendai-art.org/caf/inada)

![CI Status](https://img.shields.io/github/actions/workflow/status/nandenjin/caf-ushio-web/ci.yml?label=CI&logo=github&style=flat-square)
![Next.js version](https://img.shields.io/github/package-json/dependency-version/nandenjin/caf-ushio-web/react?label=React&logo=react&style=flat-square)
![Next.js version](https://img.shields.io/github/package-json/dependency-version/nandenjin/caf-ushio-web/next?label=next.js&logo=next.js&style=flat-square)
[![Supported by Contemporary Art Foundation](https://img.shields.io/badge/Suppoted%20by-Contemporary%20Art%20Foundation-yellow?style=flat-square)](https://gendai-art.org)

## Setup & Development

This site is based on Next.js and React. Install Node.js and Yarn then:

```sh
# Install dependencies
yarn install

# Dev mode
yarn dev

# Build distribution
yarn build
```

## Deployments

Deployment workflow will be triggered by each commit to `dev`. We are using static site generation (SSG), so server-side features cannot be used.

## Contribution

See [CONTRIBUTING.md](/CONTRIBUTING.md)
