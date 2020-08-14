# TODO

*Sorted by order of importance*

## v2.0.0
- **Content overhaul***
    - ~~Update text portions~~
        - ~~About me~~
        - ~~Contact info~~ *(See below)*
        - ~~Work experience~~
        - ~~Activities~~
    - ~~Update profile picture~~
    - ~~Update resume link~~
    - ~~Add snake project (+ remove others?)~~
        - ~~Add snake portfolio!~~
    - ~~Add social media links via icons to contact info~~

## v2.x.x
- **Background/scrolling overhaul**
    1. ~~Fix scrolling to use `v-scrollto` with animations~~
    1. Tie backgrounds to top of next area instead of randomly
    1. Display black during duration of scrolling
    1. Hide button column tooltips after click & re-enable on blur
    1. Optional
        - Investigate super quick scrolling to final item?

- **Update text to better wrap around images**

- **Remove/move images depending on screen size**

- **Refactors**
    - ~~Use slots in `BodyCard`~~
    - ~~Remove "spaces" usage in `BodyCardImage`~~
    - ~~Use slots in `BodyCardImage` (may need to update Vue)~~
    - `BodyCardImage` position var to separate bools
    - Move alert to own component in case I want to use it later
    - Combine `body-card` and `body-card-image` with common slots
    - Refactor button row to use relative positioning and padding?
    - Rename work experience things

- **Style/QOL**
    - Update links to open in new tab (`target="_blank"`)

- **Updates**
    - Update Vue if necessary
    - Get the Vuetify 2.x update
      - Update bodycard/bodycardimage to use alignment helpers (e.g. pb-0, etc)

