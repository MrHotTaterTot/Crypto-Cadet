"use client";

/**
 * Root error component
 */



export default function Error({ error }) {
    return (
        <div>
            <h1>Error</h1>
            <p>{error.message}</p>
        </div>
    );
}
