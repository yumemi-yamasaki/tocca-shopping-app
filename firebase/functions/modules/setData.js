const functions = require('firebase-functions');
const db = require('../firebase').db;

exports.setData = functions.region('asia-northeast1').https.onCall(async (data, context) => {
   if(context.auth.uid){
      // console.log(data);
      const docRef = db.collection('itemList').doc(context.auth.uid);
      await docRef.set(data);
   }
});