//api calling with async await
const getDetails = async () => {
  //request data gathering logic
  let userid = document.getElementById("userid").value;
  let para = document.getElementById("simple");
  let result = document.getElementById("sample");

  //validation logic
  if (userid == "") {
    alert("Please enter user id");
    return;
  }
  para.style.display = "block";
  //business logic
  try {
    const [userresult, postresult] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${userid}`),
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`), //?used to bind and find matchings
    ]);
    const userdata = await userresult.json();
    const postdata = await postresult.json();
    console.log(postdata);
    result.innerHTML = `
        <h2>${userdata.name}</h2>
        <p>${userdata.email}</p>
        <h2>Posts:</h2>
        <ul>
        ${postdata.map((item) => `<li>${item.title}</li>`)}
        </ul>

        `;
  } catch (err) {
    result.innerHTML = "<h3>Something went wrong....</h3>";
  }
};
