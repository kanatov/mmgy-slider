# mmgy-slider

# [Preview](https://kanatov.github.io/mmgy-slider/)

### 1. Started-build

### 2. Semantic HTML layout implemented

- Placed the logo outside the slider's content. It’s not clear from the prototype if it belongs to the content group, but it makes more sense as an overlay.
- Kept the title text in Title Case and used CSS to capitalize it.
- Navigation arrows are not included in the sources, so I copied them from Figma.
- According to the mockups, the popup does not overlay the title state of the slide but represents a different state. There is no way for the user to "close" it or return to the title state. Implemented as shown in the mockups; will try to improve in a later version. The state switch solved by adding class "info-state" to the "swiper-wrapper" container, so the state affects all the slides.

### 3. CSS Implemented

- Shadows and style values taken from Figma mockups.
- Slide 2: Added shadow under the title text.
- Slide 3: Adjusted background to the bottom.
- Slide background moved from "background-image" property to a dedicated `<img>` element for zoom animation.
- All states compared to the original Figma mockup to ensure closest positioning and sizing.
<img alt="mockup to HTML comparison" src="https://github.com/kanatov/mmgy-slider/assets/11691309/d79c2974-a6b8-48cf-9ec8-c91ed2bc0679">

### 4. Added Carousel Functionality

- SwiperJS added, and all slides are now visible.
- Added slight fade effect for logo, pagination and navigation arrows on small screen size to prevent overlap with the content.

### 5. Media Optimization

- Compressed images to WebP using squoosh.app.
- Cover of Slide 2 replaced with a background image.

### 6. Video Player Implemented

- Added script for custom controls. The script supports multiple video players on the page with the following structure.
- No pause button was provided in the mockups. Assumed it was meant to be used when the video is paused.
- Video is paused on slide change.
- Two different play buttons are in the mockups. Used the one with a filled center, exported manually from Figma as it was not provided.
- Ensured the video loads only once while the user interacts with the webpage.
<img alt="mockup to HTML comparison" width="600" src="https://github.com/kanatov/mmgy-slider/assets/11691309/2cd47d75-281e-42e0-8f33-d772c98ff9f8">

### The Video Container Structure and States

To automatically enable control for each video player on the page, you can use the VideoController.
- Wrap the HTML `<video>` element and controls in a container with the class name `.video-player`.
- Pass every SwiperJS slider `instance` and `id` to the `controlVideo` function so it finds all the player containers inside each slider.
```javascript
const videoController = new VideoController([{ id: '#slider', instance: slider }]);
```
The player has 3 states defined by extra CSS classes applied to the wrapper container:
- Cover with play button (no class).
- Playing (`playback` class).
- Paused (`paused` class).

To prevent SwiperJS drag conflict while dragging the video, the player input is temporarily disabled while dragged. To disable the player, the `disable-input` class is assigned to it.

### 7. The web page was checked in the modern desktop versions of Firefox, Chrome and Safari.

No mobile device resolutions were checked.

### 8. Bonus part

- Custom pagination bullets look and animation.
- Buttons gradients and interaction animations.
- Popup reveal animation.
- Video interaction animation.
- Titles animation.
- Minimal support of small screens.
