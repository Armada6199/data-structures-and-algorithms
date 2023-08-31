# HashTable Class Documentation

## Overview

The `HashTable` class implements a data structure that allows efficient storage and retrieval of key-value pairs. It uses a hash function to compute indices for data storage in an array.

## Methods

### Constructor

- **Description**: Initializes a new instance of the `HashTable` class.
- **Usage**: `const hashtable = new HashTable(size);`

### `_hash` Method

- **Description**: Calculates the hash value of a given key.
- **Usage**: `const hashValue = hashtable._hash(key);`

### `addItem` Method

- **Description**: Adds a key-value pair to the hash table.
- **Usage**: `hashtable.addItem(key, value);`

### `getItem` Method

- **Description**: Retrieves the value associated with a key.
- **Usage**: `const value = hashtable.getItem(key);`

### `hasItem` Method


- **Description**: Checks if a key exists in the hash table.
- **Usage**: `const exists = hashtable.hasItem(key);`

### `getKeys` Method

- **Description**: Retrieves an array of all unique keys.
-
