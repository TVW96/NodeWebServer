module.exports = {
    transform: {
        "^.+\\.jsx?$": "babel-jest"
    },
    testEnvironment: "node",
    moduleFileExtensions: ["js", "jsx", "json"],
    roots: ["<rootDir>/src", "<rootDir>/__tests__"]
};
