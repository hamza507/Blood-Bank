import React from "react";
import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database"


export function SignUpUesr(email, password){
    return new Promise (function(resolve, reject){
        auth()
        .createUserWithEmailAndPassword(email, password)
        .then(()=>{
           resolve('sign up Successfully');
           history.push('DonorForm')
        })
        .catch(error =>{
            reject(error);
        });
    });
};

export function SignInUesr(email, password){
    return new Promise (function(resolve, reject){
        auth()
        .signInWithEmailAndPassword(email, password)
        .then(()=>{
           resolve('sign In Successfully');
        })
        .catch(error =>{
            reject(error);
        });
    });
};

export function SignOut(){
    return new Promise (function(resolve, reject){
        auth()
        .signOut()
        .then(()=>{
           resolve('sign Out Successfully');
        })
        .catch(error =>{
            reject(error);
        });
    });
};

export function Saveusers(id, name, age, bloodgroup, namber) {
    return new Promise(function (resolve, reject) {
        let key;
        if (id != null) {
            key = id;
        } else {
            key = database()
                .ref()
                .push().key;
        }
        let dataToSave = {
            id: key,
            name: name,
            namber: namber,
            age: age,
            bloodgroup: bloodgroup
        };
        database()
            .ref('users/' + key)
            .update(dataToSave)
            .then(snapshot => {
                resolve(snapshot);
            })
            .catch(errr => {
                reject(errr);
            });
    });
}

