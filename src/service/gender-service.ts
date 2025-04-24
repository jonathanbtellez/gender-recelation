export async function getGender() {
  const res = await fetch("/api/gender", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Error getting gender");
  }

  return res.json();
}
