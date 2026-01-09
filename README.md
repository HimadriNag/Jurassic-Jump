# Dino Dash: The Dragon Escape

A classic 2D side-scrolling survival game built using **HTML5**, **CSS3**, and **Vanilla JavaScript**. Take control of a dinosaur and survive as long as possible by jumping over a relentless dragon obstacle.

## 🔗 Live Demo
You can play the game live here: [jurassic-jump.vercel.app](https://jurassic-jump.vercel.app)

## 🎮 Features
* **Smooth Animations:** Utilizes CSS keyframes for fluid jumping and obstacle movement.
* **Collision Detection:** Real-time JavaScript logic to detect when the Dino hits the Dragon.
* **Dynamic Scoring:** Your score increases automatically for every successful dodge.
* **Immersive Audio:** Features background music and specific sound effects for Game Over events.

## 🕹️ How to Play
1. **Launch:** Visit the [Live Link](https://jurassic-jump.vercel.app) or open `index.html` locally.
2. **Jump:** Press the **Up Arrow Key** to jump over the dragon.
3. **Score:** Successfully dodging the dragon increases your score.
4. **Game Over:** If you collide with the dragon, the game stops and plays a game-over sound.

## 📂 Project Structure
| File | Description |
| :--- | :--- |
| `index.html` | The main structure containing the game container and score display. |
| `style.css` | Handles visual styling, background images, and keyframe animations. |
| `script.js` | Contains game logic, keyboard controls, and collision detection. |
| `bg.jpg` | Background image for the game environment. |
| `dino.png` | The player character sprite. |
| `dragon.png` | The obstacle character sprite. |
| `music.mp3` | Background music file. |
| `gameover.mp3` | Sound effect played upon collision. |

## 🛠️ Code Logic Overview
* **Movement:** Uses `document.onkeydown` to trigger the `.animateDino` CSS class.
* **Collision:** Calculates the `offsetX` and `offsetY` between the Dino and the obstacle every 100ms.
* **Score Update:** Increments the `score` variable and updates the `innerHTML` of the score display.

## 🚀 Future Enhancements
* Adding left and right movement using arrow keys.
* Implementing a "Restart" button on the Game Over screen.
* Gradually increasing the obstacle speed as the score gets higher.
