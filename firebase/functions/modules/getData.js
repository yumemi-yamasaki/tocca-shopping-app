const functions = require('firebase-functions');
const db = require('../firebase').db;


// region 実行の地域設定

exports.getData = functions.region('asia-northeast1').https.onCall(async (data, context) => {
   if(context.auth.uid){
      const docRef = db.collection('itemList').doc(context.auth.uid);
      const snapshot = await docRef.get();
      const record = snapshot.data();
      return record;
   }
});