const baseUrl = import.meta.env.VITE_API_URL;

interface Usuario {
  email: string;
  nombre: string;
  apellido: string;
}

interface Login {
  user: string;
  password: string;
}

export const fetchSinToken = (
  endpoint: string,
  data: Usuario,
  method = "GET"
) => {
  const url = `${baseUrl}/${endpoint}`; // http://localhost:8080/api / endpoint == auth, event //

  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

export const fetchLoginPIMU = (
  endpoint: string,
  data: { token: string },
  method = "GET"
) => {
  const url = `${baseUrl}/${endpoint}`; // http://localhost:8080/api / endpoint == auth, event //

  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

export const fetchLoginGoogle = (
  endpoint: string,
  data: { token: string },
  method = "GET"
) => {
  const url = `${baseUrl}/${endpoint}`; // http://localhost:8080/api / endpoint == auth, event //

  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

export const fetchLogin = (endpoint: string, data: Login, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`; // http://localhost:8080/api / endpoint == auth, event //

  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

export const fetchConToken = (endpoint: string, data?: any, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`; // localhost:4000/api/  endpoint == auth, event //
  const token = localStorage.getItem("token") || "";

  if (method === "GET") {
    return fetch(url, {
      method,
      headers: {
        "x-token": token,
        user: data,
      },
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
        "x-token": token,
      },
      body: JSON.stringify(data),
    });
  }
};

export const fetchCanvas = (endpoint: string, data?: any, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`; // localhost:4000/api/  endpoint == auth, event //

  if (method === "GET") {
    return fetch(url, {
      method,
      headers: {
        user: data
      },
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};
