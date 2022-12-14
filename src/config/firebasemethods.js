import app from "./firebaseconfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,

} from "firebase/auth";
import { getDatabase, ref, set, onValue, push, onChildAdded, } from "firebase/database";
import { Redirect } from "react-router-dom";

const auth = getAuth(app);
const database = getDatabase(app);
let signUpUser = (obj) => {
  let { email, password, userName, contact } = obj


  //==this will return on signup page ====
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      // === this "then" will give the status of Authentication. ===
      .then((userCredential) => {
        // user successfully registered
        const user = userCredential.user;
        const refrence = ref(database, `users/${user.uid}`);
        obj.id = user.uid;
        set(refrence, obj)
          // === this "then" will give the status of database function
          .then(() => {
            // this "resolve" is our custom message which will show in signup page "then"
            resolve("user created succesfully")
          })
          .catch((errr) => { reject(errr) })
      })
      .catch((err) => { reject(err) })
  })

};

let loginUser = (obj,nodeName) => {
  let { email, password } = obj;
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        const reference = ref(database, `${nodeName}/${user.uid}`);
        onValue(reference, (e) => {
          let status = e.exists();
          console.log(status);
          console.log(e.val());
          if (status) {
            resolve(e.val());
          } else {
            reject("Data Not Found :(");
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        reject(errorMessage);
      });
  })

};

let signoutUser = () => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        resolve("user Logged Out successfully")
      })
      .catch((error) => {
        // An error happened.
        reject(error)
      });
  });
};


let checkUser = () => {

  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        resolve(uid);
        // ...
      } else {
        // User is signed out
        // ...
        reject("no user is logged in!")  
      }
    })

  })
}

export default function sendData(obj, nodeName, id){
  let postListRef
  return new Promise((resolve, reject) => {

    if (id) {
      // edit case id is present
      postListRef = ref(database, `${nodeName}/${id}`);
    } else {
      // add case id is not present
      let addRef = ref(database, nodeName);
      obj.id = push(addRef).key;
      postListRef = ref(database, `${nodeName}/${obj.id}`);
    }
    set(postListRef, obj)
      .then(() => { resolve(`Data Send Successfully on this node ${nodeName}/${obj.id}`) })
      .catch((err) => { reject(err) })
  })
}
// let delData = (obj, nodeName, id) => {
//   let reference =ref(database, `${nodeName}/${id}`);
//   return new Promise((resolve, reject) => {
//     onChildRemoved(reference, (data) => {
//       deleteComment(postElement, data.key);
//     });

//   })
// }
let getData = (nodeName, id) => {
  let refernece = ref(database, `${nodeName}/${id ? id : ""}`);
  return new Promise((resolve, reject) => {
    onValue(refernece,
      (snapshot) => {
        if (snapshot.exists()) {
          let data = snapshot.val();
          // resolve(data)
          if (id) {
            resolve(data)
          } else {
            let arr = Object.values(data)
            resolve(arr)
          }
        } else {
          reject("No Data Found")
        }
      }, {
      onlyOnce: false
    }
    );
  });
};
// export { signUpUser, loginUser, checkUser, sendData, getData, signoutUser };
export{ sendData , loginUser, getData} ;