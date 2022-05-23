//[assignment] write your own unit test to show that your Mastermind variation circuit is working as expected
const chai = require("chai");
const path = require("path");

const wasm_tester = require("circom_tester").wasm;
const utils = require("ffjavascript").utils;
const Scalar = require("ffjavascript").Scalar;

const assert = chai.assert;
describe("MastermindVariation work test", function () {

    this.timeout(100000);

    it("Should MastermindVariation work check", async () => {

        const circuit = await wasm_tester("contracts/circuits/MastermindVariation.circom");
        await circuit.loadConstraints();
        // Player1 Solution & SolutionHash
        // const solution1: FourNumbers = [4, 5, 6, 7];
        // const salt1 = ethers.BigNumber.from(ethers.utils.randomBytes(32));
        // const solutionHash1 = ethers.BigNumber.from(
        // poseidonJs.F.toObject(poseidonJs([salt1, ...solution1]))
        // );
        // // Player1 submits guess
        // const guess1: FourNumbers = [1, 2, 3, 9];
        const input = {
            "pubGuessA": [3],
            "pubGuessB": [1],
            "pubGuessC": [5],
            "pubGuessD": [6],
            "pubNumHit": [1],
            "pubNumBlow": [2],
            "pubSolnHash": ["14936534546887887053447936903969015918087871182330438503354638690785193351094"],
            "privSolnA": [6],
            "privSolnB": [1],
            "privSolnC": [3],
            "privSolnD": [9],
            "privSalt": ["25288058948757630068625026399281744617723499579053530095691895693204456068434"]
        }

        const w = await circuit.calculateWitness(input, true);
        await circuit.assertOut(w, {solnHashOut: "14936534546887887053447936903969015918087871182330438503354638690785193351094"});
    });


});