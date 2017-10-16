## Setup

1. Install deps & run lint fix
```
$ yarn install && yarn run lint -- --fix
```

This results in a **parsing error**

2. Revert `issue1.js` & `issue2.js` to original

3. Add `"prefer-arrow-callback": "off"` to disabled to `package.json`

4. `yarn run lint -- --fix`

You shouldn't see any parsing errors.
