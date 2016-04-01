/**
 * Created by davide on 01/04/16.
 */

import Hello from "../src/app/dummy/hello";
import * as Chai from "chai";

describe("Hello", () => {

    let toTest : Hello;

    beforeEach(function () : void {

        toTest = new Hello();
    });

    describe("#dummyTest", () => {
        it ("should say a nice hello", () => {

            const name : string = "Derp";

            Chai.expect(toTest.sayHello(name)).to.equal("Hello Derp");
        });

    });

});
