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
- All states compared to the original figma mockup to make closest positioning/sizing. 

![Untitled-ezgif com-video-to-gif-converter(1)](https://github.com/kanatov/mmgy-slider/assets/11691309/d79c2974-a6b8-48cf-9ec8-c91ed2bc0679)

4. Added carousel functionality

- SwiperJS added and all the slides are visible now.
- Added slight fade effect for logo and pagination crumbs on the small screen heigh so they didn't overlap the popup.

5. Media optimisation

- Compressed images to webp using squoosh.app.
- Cover of slide 2 replaced to the background image.