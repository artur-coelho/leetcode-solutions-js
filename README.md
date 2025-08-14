# Algorithms in JavaScript

This repository contains my implementations of various algorithms studied from the book [Grokking Algorithms](https://www.manning.com/books/grokking-algorithms) by Aditya Y. Bhargava. Some of these algorithms are also LeetCode problems.

## Project Structure

```
.
├── src/
│   ├── leetcode/      # Algorithms that are also LeetCode problems
│   └── others/        # Other algorithms from the book
├── tests/             # Automated tests for each algorithm
├── package.json
└── README.md
```

- Each file in `src/leetcode/` corresponds to an algorithm that is also a LeetCode problem (named by problem number and identifier).
- Each file in `src/others/` corresponds to other algorithms or examples from the book.
- Tests are in `tests/`, with the same name as the implementation file plus `.test.js`.

## Running Tests

1. Clone the repository:
   git clone https://github.com/artur-coelho/algorithms-js.git
   cd algorithms-js

2. Install dependencies:
   npm install

3. Run tests:
   npm test
