// Function to calculate factorial
function factorial(n: number): number {

    // Check for negative numbers
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }

    // Initialize result
    let result: number = 1;

    // Calculate factorial using loop
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }

    return result;
}

// Example calls
try {
    console.log("Factorial of 5:", factorial(5));
    console.log("Factorial of 0:", factorial(0));
    console.log("Factorial of 7:", factorial(7));

    // Invalid input
    console.log("Factorial of -3:", factorial(-3));

} catch (error) {
    console.log("Error:", (error as Error).message);
}