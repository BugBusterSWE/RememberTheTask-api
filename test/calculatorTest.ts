/**
 * Created by davide on 01/04/16.
 */

import Calculator from "../src/app/dummy/calculator";
import * as Chai from "chai";

describe("Calculator", () => {
    let subject : Calculator;

    beforeEach(function () : void {
        subject = new Calculator();
    });

    describe("#add", () => {
        it("should add two numbers together", () => {

            const x : number = 2;
            const y : number = 3;
            const sum : number = 5;

            // Chai assertion
            Chai.expect(subject.add(x, y)).to.equal(sum);
        });
    });

    describe("#remove", () => {
       it("should remove two numbers", () => {

           const x : number = 7;
           const y : number = 5;
           const diff : number = 2;

           // Chai assertion
           Chai.expect(subject.diff(x, y)).to.equal(diff);
       });

    });

    describe("#multiplication", () => {
       it("should do a right multiplication between two numbers", () => {

           const x : number = 4;
           const y : number = 5;
           const molt : number = 20;

           // Chai assertion
           Chai.expect(subject.molt(x, y)).to.equal(molt);
       });

    });
});
