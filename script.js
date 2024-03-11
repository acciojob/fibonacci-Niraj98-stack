function fibonacci(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;
    
    let prev = 0;
    let current = 1;
    let next;
    
    for (let i = 2; i <= num; i++) {
        next = prev + current;
        prev = current;
        current = next;
    }
    
    return prev;
}

// Test cases
console.log(fibonacci(1)); // 
console.log(fibonacci(5)); 
