const add = (a, b) => a + b;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('should generate a greeting', () => {
    const greeting = generateGreeting('Mike');
    expect(greeting).toBe("Hello Mike!");
});

test('should generate a greeting for no name', () => {
    const greeting = generateGreeting();
    expect(greeting).toBe("Hello Anonymous!");
});