//  Fetch Data from API
let userPromise = fetch("https://randomuser.me/api/");

// console.log(userPromise);

userPromise
  .then((res) => {
    //   console.log(res.json());
    return res.json();
  })
  .then((resData) => {
    const name = resData.results[0].name.first;
    document.querySelector("#name").innerText = "Welcome in" + name;
  })
  .catch((err) => {
    console.log(err);
  });
