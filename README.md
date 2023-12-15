# Blok FlipGame

The Blockink.io first product_under development.

This is a Quest-as-service game deployment that intersects between the web2 gaming experience and web3 marketing.
The first gameplay to be launched is the flipCard game tangled with token mint and web3 marketing quests.

Each winners are rewarded with convertable points that are minted into exchangeable cryptocurrencies. This is preceeded by web3 culture marketing practices.

## Game Design & architecture.

Game design and architecture defines the structure and framework for a video game, including the game mechanics, level design, and overall user experience. It involves the planning and organization of the game's elements to ensure a cohesive and engaging gameplay experience.

***Here are some key aspects of game design and architecture include:***

Game mechanics: defining the rules and interactions within the game, such as movement, and action pattern.

Level design: This defines the layout and structure of the game's environments to provide a balanced and challenging experience for the player.

User experience (UX) design: focusing on the overall feel and usability of the game, including interface design, controls, and player feedback.

Story and narrative design: developing the storyline and characters within the game to create a compelling and immersive world for the player to explore.

### -Game Layout

The first release of the game is a 12 card game with 3*4 layout.
Each card with a front-face and back-face; the front face is hidden behind the backface.

#### Card Structure

There are 6 M-image card, duplicated to make up for another match in the game. 


### -Gameplay
A click on the first card reveales the front face carring a duplicated M-image. Upon the click on the second image, the front face is also revealed through a flop style.

If:

The first M-image === second M-image then the player scores a point.

Else: The first &  second M-image are flipped back to the front face.


### -The M-Image function.

The M in the M-image is defined as "Marketing." The term was derived as each image displayed per flip would be a marketing graphic stored for each section.

```
// Add the source code snippet for the M-image function here.
function mImageFunction() {
  // Your code here
}
```

This image could be a logo, colourful design or meme of or about a web3 brand or concept. The image or design would probabilistically serve as sharable content for each quest.


## Additional Subheadings( Check Documentation.)
- **Token Minting Mechanism**: This section should explain the mechanism for minting tokens as rewards for the winners.

- **Web3 Marketing Quests**: This section should provide details about the web3 marketing quests and how they are integrated into the game.

- **Cryptocurrency Exchange Integration**: This section should explain how the convertible points are minted into exchangeable cryptocurrencies and the integration with a cryptocurrency exchange platform.