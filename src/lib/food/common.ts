export interface Food {
    name: string;
    calories: number;
    price: string;
}

export namespace Utilities {
    export function getFoodFromJSON(data: any): Food {
        function assertExists<T extends keyof typeof data>(key: T): typeof data[T] {
            if (data[key] === undefined || data[key] === null)
                throw new Error(`Missing ${String(key)}`);

            return data[key];
        }

        return {
            name: assertExists("name"),
            calories: assertExists("calories"),
            price: assertExists("price")
        };
    }
}
