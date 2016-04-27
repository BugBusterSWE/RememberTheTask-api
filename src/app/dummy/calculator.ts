/**
 *
 * A dummy class for testing mocha
 */
export default class Calculator {

    /**
     * This function sum two numbers
     * @param x
     * @param y
     * @returns {number}
     */
    add(x : number, y : number) : number {

        let sum : number = x + y;

        return sum;
    }

    /**
     * This function diff two numbers
     * @param x
     * @param y
     * @returns {number}
     */
    diff (x : number, y : number) : number {

        let diff : number = x - y;

        return diff;
    }

    molt (x : number, y : number) : number {

        let molt : number = x * y;

        return molt;
    }
}
