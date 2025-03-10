# History Hero

**History Hero** is a history quiz game where players start with **100 lives** and must guess **7 correct answers** to become a **"Hero"**.  
If a player answers incorrectly, they lose **25% of their life**—losing all their lives results in a game over.  
The quiz is based on **history and war-related trivia** questions.  

---

## User Stories (MVP & Stretch Goals)

### User Stories (Minimum Viable Product)
- As a player, I want to **test my knowledge** and prove I know enough history to be considered a **"Hero"**.
- As a player, I want to **answer historical questions** and achieve **"Hero"** status.
- As a player, I want to **advance to the next question** when I answer correctly.
- As a player, I want to **continue playing even if I get a question wrong** (unless I lose all lives).
- As a player, I want to **restart the game** whether I win or lose and try again.
- As a player, I want to **learn from my mistakes**, so when I answer incorrectly, I want to see the **correct answer**.
- As a player, I want **engaging visuals and a cool UI**, so questions should be **themed** (e.g., a Civil War question should have a **Civil War-themed background**).

---

### Stretch Goals
- As a player, I want to **achieve "Hero" on Hard difficulty** for a bigger challenge.
- As a player, I want to hear **cool sound effects**:
  - A **victory sound** when I answer correctly.
  - A **"heroic" theme song** when I achieve "Hero."
  - A **battlefield injury sound** when I answer incorrectly.
- As a player, I want **dynamic visuals**:
  - A **red-themed battlefield** background when I lose.
  - A **"Hero" moment** with a **heroic image (like Captain America)** when I win.

---

This project aims to make history learning **fun, engaging, and challenging**! 🚀



// psuedo Code 

1. Start the game.

2. Set player lives to 100.

3. Set correct answers to 0.

4. Ask a history question.

5. Get the player's answer.

6. If the answer is correct:
      - Add 1 to correct answers.
      - Show "Correct! Move to next question."

7. If the answer is wrong:
      - Subtract 25 from player lives.
      - Show "Wrong! The correct answer is [correct answer]."

8. Repeat steps 4-7 until:
      - The player gets 7 correct answers (they win) and it shows "Hero!"
      - The player runs out of lives (they lose).

9. If the player wins:
      - Show "You are a HERO!"
      - Play a victory song.
      - Show a hero image.

10. If the player loses:
      - Show "Game Over!"
      - Play a defeat sound.
      - Show a red battlefield background.

11. Ask the player if they want to play again.

12. If they say "Yes":
      - Restart the game (go back to Step 2).

13. If they say "No":
      - End the game.



