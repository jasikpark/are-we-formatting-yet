---
name: Add a formatter
about: Add a new code formatter to the catalog
---

## New formatter

**Formatter name:**

### YAML file

Add a file to `src/content/formatters/` with the following fields:

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

### Checklist

- [ ] YAML file added to `src/content/formatters/`
- [ ] `name` and `description` are filled in
- [ ] `languages` lists all supported languages
- [ ] `license` matches the project's license (e.g. MIT, Apache-2.0)
- [ ] `category` is one of: `formatter`, `linter-with-formatting`, `pretty-printer`
- [ ] `status` is one of: `active`, `maintained`, `deprecated`
- [ ] At least one link is provided (`website`, `github`, or `docs`)
- [ ] If this is a plugin (e.g. Prettier plugin), `pluginFor` is set
