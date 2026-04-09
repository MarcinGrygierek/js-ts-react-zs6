import { useState } from "react";

export const useApi = (apiUrl: string) => {
  const [apiError, setError] = useState("");
  const apiGet = async <R>(entity: string) => {
    setError("");
    try {
      const response = await fetch(`${apiUrl}/${entity}`);

      if (!response.ok) {
        setError("Can not process your request");
        return;
      }
      const data = await response.json();

      return data as R;
    } catch (e) {
      setError("An error occurred");
    }
  };

  const apiDelete = async <R>(entity: string, id: string) => {
    setError("");
    try {
      const response = await fetch(`${apiUrl}/${entity}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        setError("Can not process your request");
        return;
      }
      const data = await response.json();

      return data as R;
    } catch (e) {
      setError("An error occurred");
    }
  };

  const apiPost = async <P, R>(entity: string, payload: P) => {
    setError("");
    try {
      const response = await fetch(`${apiUrl}/${entity}`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        setError("Can not process your request");
        return;
      }
      const data = await response.json();

      return data as R;
    } catch (e) {
      setError("An error occurred");
    }
  };

  return {
    apiDelete,
    apiGet,
    apiPost,
    apiError,
  };
};
