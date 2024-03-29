import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
// import { Client } from "pg";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

// export async function createAndConnectDBClient() {
//     const client = new Client({
//         connectionString: process.env.DATABASE_URL2,
//     });

//     try {
//         await client.connect();
//         console.log('Connected to database successfully');
//         return client;
//     } catch (err) {
//         console.error('Error connecting to database:', err);
//         throw err; // Propagate the error to the caller
//     }
// }

export function getSiteURL(){
	return process.env.NODE_ENV === "production"
        ? 
    "your-production-url/api/trpc"
        : 
    "http://localhost:3000/api/trpc"
}