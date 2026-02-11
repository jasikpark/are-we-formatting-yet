# [areweformattingyet.com](https://areweformattingyet.com)

A catalog of code formatters, pretty-printers, and linters-with-formatting across languages and ecosystems.

## Adding a formatter

Create a YAML file in `src/content/formatters/` with the following fields:

```yaml
name:
description:
website: # optional
github: # optional
docs: # optional
languages:
  -
license:
category: # formatter | linter-with-formatting | pretty-printer
status: # active | maintained | deprecated
writtenIn: # optional, e.g. Rust, Go, JavaScript
npm: # optional, package name
pluginFor: # optional, e.g. Prettier
official: # optional, boolean
```

At minimum, fill in `name`, `description`, `languages`, `license`, `category`, and `status`, and provide at least one link (`website`, `github`, or `docs`). If the formatter is a plugin (e.g. a Prettier plugin), set `pluginFor` to the parent formatter name.

There's a [PR template](.github/PULL_REQUEST_TEMPLATE/new-formatter.md) with a full checklist.

## Development

```sh
pnpm install
pnpm dev
```

Built with [Astro](https://astro.build).
