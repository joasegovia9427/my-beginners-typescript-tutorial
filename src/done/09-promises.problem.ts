interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

// prettier-ignore
export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
  const data = await fetch(
    "https://swapi.py4e.com/api/people/1"
  ).then((res) => {
      return res.json();
    }
  );

  return data;
};

/**
Let's break down the three solutions you provided for the `fetchLukeSkywalker` function and highlight the differences between them:

### 1. Solution 1
```typescript
interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

// prettier-ignore
export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
  const data = await fetch(
    "https://swapi.py4e.com/api/people/1"
  ).then((res) => {
      return res.json();
    }
  );

  return data;
};
```
**Key Points:**
- The function explicitly returns a `Promise<LukeSkywalker>`, indicating that it will resolve to an object of type `LukeSkywalker`.
- This is a clear and type-safe way to define the return type of the function, making it easier for developers to understand what to expect when calling this function.

### 2. Solution 2
```typescript
interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export const fetchLukeSkywalker = async () => {
  const data = await fetch("https://swapi.py4e.com/api/people/1").then(
    (res) => {
      return res.json();
    }
  );

  return data as LukeSkywalker;
};
```
**Key Points:**
- The function does not specify a return type, meaning it defaults to `Promise<any>`.
- The `as LukeSkywalker` assertion is used to tell TypeScript that you expect `data` to conform to the `LukeSkywalker` interface.
- This approach is less type-safe because it relies on the developer to ensure that the fetched data actually matches the `LukeSkywalker` structure. If the API response changes, it may lead to runtime errors.

### 3. Solution 3
```typescript
interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export const fetchLukeSkywalker = async () => {
  const data: LukeSkywalker = await fetch(
    "https://swapi.py4e.com/api/people/1"
  ).then((res) => {
    return res.json();
  });

  return data;
};
```
**Key Points:**
- Similar to Solution 2, this function does not specify a return type, defaulting to `Promise<any>`.
- However, it uses a type annotation (`data: LukeSkywalker`) to enforce that `data` must conform to the `LukeSkywalker` interface.
- This approach provides some level of type safety, but it still does not guarantee that the function itself returns a `Promise<LukeSkywalker>`, as the return type is not explicitly defined.

### Summary
- **Solution 1** is the most type-safe and clear, as it explicitly defines the return type as `Promise<LukeSkywalker>`.
- **Solution 2** relies on type assertion, which can lead to potential runtime errors if the data does not match the expected structure.
- **Solution 3** uses type annotation for the variable but does not specify the return type of the function, which can lead to ambiguity about what the function returns.

For best practices in TypeScript, **Solution 1** is recommended as it provides the best clarity and type safety
*/
