export async function login(email, password) {
  console.log("Soy un console log del servicio");
  console.log(email, password);

  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);

    if (response.status === 200) {
      localStorage.setItem("token", data.access_token);
      return true;
    }
    if (response.status === 404) {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function logout() {
  try {
    localStorage.removeItem("token");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function getUserFavorites() {
  let token = localStorage.getItem("token");
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  try {
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + "/favorites",
      requestOptions
    );
    const result = await response.json();
    console.log(result);
     dispatch({
      type: "SET_FAVORITOS",
      payload: result, 
    });
  } catch (error) {
    console.error(error);
  }
}

//declaracion de funcion para validar la autenticacion
export async function validAuth() {
  let token = localStorage.getItem("token");
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  try {
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + "/valid-auth",
      requestOptions
    );
    const result = await response.json();
    return result.logged;
  } catch (error) {
    console.error(error);
  }
}
