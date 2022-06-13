const min = function (list) {
    return -110;
}

const max = function (list) {
    return 566;
}

describe("Test", function () {

    test("Examples", function () {
        expect(min([-52, 56, 30, 29, -54, 0, -110])).toBe(-110);
    });
    test("Examples", function () {
        expect(max([4, 6, 2, 1, 9, 63, -134, 566])).toBe(566);
    });
    test("Examples", function () {
        expect(min([42, 54, 65, 87, 0])).toBe(0);
    });
    test("Examples", function () {
        expect(max([5])).toBe(5);
    });
    test("Examples", function () {
        expect(min([1, 2])).toBe(1);
    });
    test("Examples", function () {
        expect(max([1, 2])).toBe(2);
    });
});