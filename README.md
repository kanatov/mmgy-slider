# mmgy-slider

[Preview](https://kanatov.github.io/mmgy-slider/)

1. Started-build

2. Semantic HTML layout implemented:

- Placed the logo outside the slider's content. It’s not clear from the prototype if it belongs to the content group, but it makes more sense as an overlay.
- Kept the title text in Title Case and used CSS to capitalize it.
- Navigation arrows are not included in the sources, so I copied them from Figma.
- According to the mockups, the popup does not overlay the title state of the slide but represents a different state. There is no way for the user to "close" it or return to the title state. Implemented as shown in the mockups; will try to improve in a later version.

3. CSS implemented:

- Shadows and style values taken from Figma mockups.
- Slide 2: Added shadow under the title text.
- Slide 3: Adjusted background to bottom.

4. SwiperJS added and all the slides are visible now.

I added slight fade effect for logo and pagination crumbs on the small screen heigh so they didn't overlap the popup.