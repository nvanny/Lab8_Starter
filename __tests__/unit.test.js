// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('phoneNumber', () => {
    // TODO
    expect(functions.isPhoneNumber("(858)-771-9203")).toBe(true);
    expect(functions.isPhoneNumber("858-771-9203")).toBe(true);
    expect(functions.isPhoneNumber("619-223")).toBe(false);
    expect(functions.isPhoneNumber("(858)-7731")).toBe(false);
});

test('email', () => {
    // TODO
    expect(functions.isEmail("nvanny@ucsd.edu")).toBe(true);
    expect(functions.isEmail("jeff@gmail.com")).toBe(true);
    expect(functions.isEmail("jeremygmail.com")).toBe(false);
    expect(functions.isEmail("matt@yahoo")).toBe(false);
});

test('strongPassword', () => {
    // TODO
    expect(functions.isStrongPassword("hello123")).toBe(true);
    expect(functions.isStrongPassword("ucsdtritons_2")).toBe(true);
    expect(functions.isStrongPassword("bad")).toBe(false);
    expect(functions.isStrongPassword("verybad?")).toBe(false);
});

test('date', () => {
    // TODO
    expect(functions.isDate("12/25/2021")).toBe(true);
    expect(functions.isDate("1/1/2021")).toBe(true);
    expect(functions.isDate("1/1/1")).toBe(false);
    expect(functions.isDate("2/2")).toBe(false);
});

test('hexColor', () => {
    // TODO
    expect(functions.isHexColor("#FFF")).toBe(true);
    expect(functions.isHexColor("#FFFFF9")).toBe(true);
    expect(functions.isHexColor("FF?")).toBe(false);
    expect(functions.isHexColor("#FFF3")).toBe(false);
});