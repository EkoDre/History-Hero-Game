# History Hero

**History Hero** is a history quiz game where players start with **100 health** and must guess **7 correct answers** to become a **"Hero"**.  
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
 - A player will choose between **1 and 3 themes**
 _ each theme will have their own history questions depending on which theme they pick
 -  

This project aims to make history learning **fun, engaging, and challenging**! 



// psuedo Code 

```java
1. Start the game.

const Player 


2. Set player lives to 100.

let health= 100

if player answers true(let health = 100)
if player answers false take 25 away from the health and continue to next question(let health = 75)

health bar will empty 

3. Set correct answers to 0.

at the start of the game 

let correct answer = 0


4. Ask a history question.

print("Choose a history theme: 1) Civil War  2) Midieval Battles  3) Ancient History")  

let themeChoice = getUserInput() 
```

5. Get the player's answer.

Print "Choose a history theme: 1) Civil War  2) World War II  3) Ancient History"  

Get player choice and store in themeChoice  

question 1 will result in one of themes chosen and a question 


6. If the answer is correct:
      - Add 1 to correct answers.
      - Show "Correct! Move to next question."

7. If the answer is wrong:
      - Subtract 25 from player health.
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

if player health === 0 
print game "battle lost"
print "Try Again"

 Get playerInput  
    If playerInput is "yes" then  
        Restart game  
    Else  
        Print "Thanks for playing!"  

12. If they say "Yes":
      - Restart the game (go back to Step 2).

13. If they say "No":
      - End the game.
```


## Wire frame for History Hero 

![Wire Frame](./assets/Screenshot%202025-03-10%20at%204.06.30 PM.png)



## Data sets 

my data sets will be locally stored. Plan on writng data inside the code or on a Json file 

I play on getting my information and data from chatgbt. 


## Timeline
| Day        |   | Task                               | Blockers | Notes/ Thoughts |
|------------|---|------------------------------------|----------|-----------------|
| Monday      |   | proposal and approval             |          |      approval!  |
| Tuesday     |   | research and structure            |          |  get the data   |
| Wednesday   |   | html css                          |          | little by little|
| Thursday    |   | create javascript                 |          |getting somewhere|
| Friday      |   | Advanced javascript               |          |   cool details  |
| Saturday    |   | Finaliz MVP                       | friends  |  feel better    |
| Sunday      |   | testing and debugging             | friends  |  you did it     |
| Monday      |   | Presentation                      |          |                 |
