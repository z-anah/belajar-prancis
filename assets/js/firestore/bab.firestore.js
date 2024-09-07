db.collection("bab").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().title}`);
        // document.getElementById(`firebase-bab-title${doc.id}`).innerText = doc.data().title;
    });
});