
## Documentation

- The `leftJoin` algorithm takes two hashmaps, `leftMap` and `rightMap`, as input and returns a new hashmap (`result`) representing the LEFT JOIN operation.

- For each key-value pair in `leftMap`, the algorithm checks if the key exists in `rightMap`.

- If the key exists in both `leftMap` and `rightMap`, the algorithm adds an entry to the `result` hashmap with the key from `leftMap`. The value associated with the key in the `result` hashmap is an array containing the value from `leftMap` and the corresponding value from `rightMap`.

- If the key exists in `leftMap` but not in `rightMap`, the algorithm adds an entry to the `result` hashmap with the key from `leftMap`. The value associated with the key in the `result` hashmap is an array containing the value from `leftMap` and `null` for the missing value from `rightMap`.

- After processing all key-value pairs in `leftMap`, the algorithm returns the `result` hashmap as the LEFT JOIN result.

