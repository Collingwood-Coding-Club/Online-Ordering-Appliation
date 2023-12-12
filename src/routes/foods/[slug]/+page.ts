export async function load({ fetch, params }) {
    const res = await fetch(`/foods/${params.slug}`, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await res.json()
}

