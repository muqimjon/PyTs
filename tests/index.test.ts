import { str, int, bool, print, map, filter } from '../src';

describe('str function', () => {
    test('converts number to string', () => {
        const result = str(42);
        expect(result).toBe("42");
    });

    test('converts boolean to string', () => {
        const result = str(true);
        expect(result).toBe("true");
    });

    test('leaves string unchanged', () => {
        const result = str("hello");
        expect(result).toBe("hello");
    });
});

describe('int function', () => {
    test('converts string to integer', () => {
        const result = int("42");
        expect(result).toBe(42);
    });

    test('converts boolean to integer', () => {
        const result = int(true);
        expect(result).toBe(1);
    });

    test('leaves number unchanged', () => {
        const result = int(42);
        expect(result).toBe(42);
    });

    test('throws error for invalid input', () => {
        expect(() => int("hello")).toThrow(Error);
    });
});

describe('bool function', () => {
    test('converts number to boolean', () => {
        const result = bool(42);
        expect(result).toBe(true);
    });

    test('converts string to boolean', () => {
        const result = bool("true");
        expect(result).toBe(true);
    });

    test('leaves boolean unchanged', () => {
        const result = bool(true);
        expect(result).toBe(true);
    });
});

describe('print function', () => {
    test('prints value without end', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        print("Hello");
        expect(consoleSpy).toHaveBeenCalledWith("Hello");
        consoleSpy.mockRestore();
    });

    test('prints value with end', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        print("Hello", "!");
        expect(consoleSpy).toHaveBeenCalledWith("Hello!");
        consoleSpy.mockRestore();
    });
});

describe('map function', () => {
    test('maps function over array', () => {
        const double = (num: number) => num * 2;
        const result = map(double, [1, 2, 3]);
        expect(result).toEqual([2, 4, 6]);
    });

    test('maps function over empty array', () => {
        const result = map((num: number) => num * 2, []);
        expect(result).toEqual([]);
    });
});

describe('filter function', () => {
    test('filters array based on predicate', () => {
        const isEven = (num: number) => num % 2 === 0;
        const result = filter(isEven, [1, 2, 3, 4]);
        expect(result).toEqual([2, 4]);
    });

    test('filters empty array', () => {
        const result = filter((num: number) => num % 2 === 0, []);
        expect(result).toEqual([]);
    });
});
