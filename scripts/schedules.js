function writeschedules() {
    //define a variable for the collection you want to create in Firestore to populate data
    var schedulesRef = db.collection("schedules");

    schedulesRef.add({
        set:"A",
        mon:["ZpfiEkqWDwbeB7LjsEDF","QcNPKM0XNkFGVCGnXLDb","8sjYe3h7LHcq1WJIfNsZF","6MNrVY7T2C4rtH7azwDn","dDbRRob1YwL1BdJAYcxX","SYslQUQyGFIVpcBJKDOf","9tB2PSjkjJ3SEMwf4O7s","FfF3s2f1YpVypDxCV3qU","F2906OmXSKlAJDv9Ievc"],
        thu:["aGbgVHS8WWPwbTBJYajf","Bbv6D4ReDMDPLmSPbD5u","6vJLAQS03a9I0RLvpkCV","cFSZZR6pX2Ypji4CGcG7","JGREKzEkfTcqTgm1yXh4","pMuJVo7YH1y4zICUx7Ri","b3GRJyHfi2uIQzSCsm4O","GHKh7594sRwe0XR5NJYD","dTdE5PDywN6VIYIhu816"],
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  
    });
    schedulesRef.add({
        set:"B",
        tue:["NTGvRSPOHdTNqhp9vcZg","Fw5DK9XfceI9tNKMgpVP","wDAMfOZUa0d5g0A06IMF","BPGmN54oq9OVUrhq5yKB","k7OGOJn9lAqIdzDNexfZ","79NrMwTMwN3l6o8iIx4d","AdfQYQVax2jB7RvT9BSA","DvUpPYXGLOBplySuJLso","GpiEy8inFvsCrvuuVfT7"],
        fri:["QNv83O7bAJilpwGxeXGU","IXtQMcNULmmgrlBZsSgZ","CKEepuROGAP0KtTel38U","uKqmW1QoblvnAVJX8RN6","9BM2bbjCMBk9bjnmUOR4","KiZt3ergH6OhYGggVmkli","f90RzhEGKrfBWWBphw2s","6xIu6u1Zwio7gqPbOkwu","XCL2VQcxWCBYndS0wVNH"],
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  
   });
   schedulesRef.add({
        set:"C",
        wed:["EMFaaqvVfvfQ7dxjQmYc","kSwUvCw3CPY7wIWVXKgo","rXIipTastQn3S8vMQBOY","uMnAMIVQfTUi19aWKJHW","Bg39z56QsB28oCvLIx4g","1gxlzgeQkIYTpkJEejTW","WpepNCPgqnCl1nuAFh98","i6AWzxWq0xiHrw05uBhD","nDlNVmTVDpFZhMtbm8x3"],
        thu:["aGbgVHS8WWPwbTBJYajf","Bbv6D4ReDMDPLmSPbD5u","6vJLAQS03a9I0RLvpkCV","cFSZZR6pX2Ypji4CGcG7","JGREKzEkfTcqTgm1yXh4","pMuJVo7YH1y4zICUx7Ri","b3GRJyHfi2uIQzSCsm4O","GHKh7594sRwe0XR5NJYD","dTdE5PDywN6VIYIhu816"],
          last_updated: firebase.firestore.FieldValue.serverTimestamp()  
   });
   schedulesRef.add({
        set:"D",
        tue:["NTGvRSPOHdTNqhp9vcZg","Fw5DK9XfceI9tNKMgpVP","wDAMfOZUa0d5g0A06IMF","BPGmN54oq9OVUrhq5yKB","k7OGOJn9lAqIdzDNexfZ","79NrMwTMwN3l6o8iIx4d","AdfQYQVax2jB7RvT9BSA","DvUpPYXGLOBplySuJLso","GpiEy8inFvsCrvuuVfT7"],
        thu:["aGbgVHS8WWPwbTBJYajf","Bbv6D4ReDMDPLmSPbD5u","6vJLAQS03a9I0RLvpkCV","cFSZZR6pX2Ypji4CGcG7","JGREKzEkfTcqTgm1yXh4","pMuJVo7YH1y4zICUx7Ri","b3GRJyHfi2uIQzSCsm4O","GHKh7594sRwe0XR5NJYD","dTdE5PDywN6VIYIhu816"],   
        last_updated: firebase.firestore.FieldValue.serverTimestamp()   
});
}



