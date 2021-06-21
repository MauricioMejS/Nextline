
//Obtiene las Tareas
export function getTaskApi() {
  const url = `https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks?token=Mauricio`;

  const params = {
    method: "GET",
    token: "Mauricio",
    headers: {
      Authorization:
        "Bearer e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.message;
    });
}

//Agrega Tareas
export function addTaskApi(data) {
  var formBody = [];
  for (var property in data) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  const url = `https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks?token=Mauricio&${formBody}`;

  console.log(formBody);
  console.log(data);
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "aplication/x-www-form-urlencode;charset=UTF-8",
      Authorization:
        "Bearer e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd",
    },
    body: formBody,
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.message;
    });
}


//Elimina Tareas
export function deleteTaskApi(id) {
  const url = `https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks/${id}?token=Mauricio`;

  const params = {
    method: "DELETE",
    token: "Mauricio",
    headers: {
      Authorization:
        "Bearer e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.message;
    });
}


//Actualiza Tareas
export function updateTaskApi(data) {
  var formBody = [];
  for (var property in data) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  const url = `https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks/${data.id}?token=Mauricio&${formBody}`;

  console.log(formBody);
  console.log(data);
  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "aplication/x-www-form-urlencode;charset=UTF-8",
      Authorization:
        "Bearer e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd",
    },
    body: formBody,
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.message;
    });
}
