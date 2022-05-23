## Part1 Q1
- The input value is mixed with "salt "ethers.utils.randomBytes(32)
- Introducing a maximum number of rounds

## Part1 Q4
(1) how it is played
The game is played by lining up the dealt cards in order of decreasing number.
Players draw cards from the deck and attack cards that their opponents have lined up in numerical order and try to guess the numbers!
<https://www.amazon.co.jp/-/en/Gakken-J750647-Game-Good-Basic/dp/B07K2XD3FQ>

(2) how it can benefit from ZK
As with hitandblow, we can control the scope of our own disclosure.

(3) how it can be implemented with ZK
This, like hitandblow, is turn-based and can be implemented to ensure correct disclosure.

(4) how it is protected from brute-force attacks.
Using salts, And introducing maxRound.

## Part2. Q1.1
Ref<https://hackmd.io/@OFccBlU5TNCiRhpIyT1m7g/SkXv-gO5r>
Voter sign their message using the key which they had signed up with and then use a random (ephemeral) key as well as the coordinator’s public key to generate a shared key (via ECDH) encrypt it.
The coordinator processes (after the voting period ends.)to generate a new state root,
generate a zk-SNARK proof that this state root transition is valid.
This makes it impossible for a briber to ever be sure that their bribe has any effect on the bribee’s vote.

## Part2. Q1.2
no-one, except a trusted coordinator, can be convinced of the validity of a vote, reducing the effectiveness of bribery.

## Part2. Q1.3
If the coordinator cheats

## Part2. Q3
VDF has Sequential feature from deginitions.
It means that a VDF is a function which takes exponentially more time to compute (even on a highly parallel processor) than it does to verify on a single processor.
 
## Part2. Q4.1
PHASE 1. 
Change a structure that submits multiple bits, including false bits.
phase2. 
start a Dutch auction where a certain amount of ETH is deposited. Return it after submitting a proof at a later date.
phase3. 
ETH which did not submit proof after a certain period of time will be returned to the contract and become the next auction operator's reward.

## Part2. Q4.2
Just take the form of a Dutch auction. For example, with everyone needing a 10 ETH pre-deposit to the contract, you could ask them to give you a hash value for the bits below 10 ETH.

## Part3. Q1
We need 3 main components. 1->2->3
1 Frontend to make it easy to contribute auction management. (1 month)
2 multibit auction Zkproof contract and eth deposit contract (1 month)
3 monitoring auction from both side
(1 month)

Frontend
React/ethers.js

Backend
Solidity/circomlibjs/snarkjs/hardhat

Monitoring
Tenderly (Contract)
Sentry(Frontend)

## Part3. Q2
(1)I would like to adjust to a board game using zk proof. This is because I am interested in this area.
I would like to create a game that can be played versus like mastermind. I will pick up Argo and work on it.Argo is a board game released in Japan. It is a game in which you guess your opponent's numbers. You guess your opponent's hidden numbers by guessing. As the game progresses, the conditions become clearer and clearer, and you will be able to make inferences using hints.

(2)The game proceeds as follows
- what we need
black card (0b-11b) 
white card (0b-11b)

- Rule
black num < white num (ex. 7b < 7w)

- How to play
1. Draw 4 cards from the deck.
2. arrange the cards according to the order rules
3. Start player draw cards from the deck
4. select one card from your deck and point out opponent's number
5. if correct, you can reveal opponent's number. if wrong you have to open your card which playar used
6. If you can open opponent's number all, you win.

(3)
- I have little front end experience and need to learn to develop that.
- As for development using zkproof or contract, check the following aspects
Make the deck unpredictable to each other at the start of the gameCan the deck itself be properly randomized?
Each side draws cards from the deck on its turn.Can the information when a card is drawn be kept secret?
We would like to set aside time for each other's turns. Can you form a contraption with a time limit?
