// Function to calculate the nth Fibonacci number
function fibonacci(n: number): number {

    // Check for negative numbers
    if (n < 0) {
        throw new Error("Fibonacci is not defined for negative numbers.");
    }

    // Base cases
    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    // Initialize first two Fibonacci numbers
    let first: number = 0;
    let second: number = 1;
    let next: number = 0;

    // Compute Fibonacci using loop
    for (let i = 2; i <= n; i++) {
        next = first + second;
        first = second;
        second = next;
    }

    return second;
}

// Example calls
console.log("Fibonacci of 0:", fibonacci(0));
console.log("Fibonacci of 1:", fibonacci(1));
console.log("Fibonacci of 5:", fibonacci(5));
console.log("Fibonacci of 15:", fibonacci(15));