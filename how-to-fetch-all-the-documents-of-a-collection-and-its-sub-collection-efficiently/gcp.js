const admin = require("firebase");
// Required for side-effects
require("firebase/firestore");

admin.initializeApp({
    apiKey: "AIzaSyCKLr3h_kHWiibQGuCCdvV6d-7FsLG8guM",
    authDomain: "test-project-75f70.firebaseapp.com",
    projectId: "test-project-75f70",
});
  
let db = admin.firestore();

function getTasks(accountId) {
    return db.collection('someTopLevelDB')
        .doc(accountId)
        .collection('tasks')
        // .where('deleted', '==', false)
        .get();
}

function getCheckLists(accountId, taskId) {
    return db.collectionGroup('checkLists')
        // .where('deleted', '==', false)
        .get();
}

async function getTasksAndCheckLists(accountId) {
    try {
        let records = { tasks: [], checkLists: [] };

        // prepare tasks details
        const tasks = await getTasks(accountId);
        const tasksQueryDocumentSnapshot = tasks.docs;
        for (let taskDocumentSnapshot of tasksQueryDocumentSnapshot) {
            const taskId = taskDocumentSnapshot.id;
            const taskData = taskDocumentSnapshot.data();
            const taskDetails = {
                id: taskId,
                ...taskData
            };
            records.tasks.push(taskDetails);

            // prepare check list details
            checkListQueryDocumentSnapshot = (await getCheckLists(accountId, taskId)).docs;
            for (let checkListDocumentSnapshot of checkListQueryDocumentSnapshot) {
                const checkListId = checkListDocumentSnapshot.id;
                const checkListData = checkListDocumentSnapshot.data();
                const checkListDetails = {
                    id: checkListId,
                    ...checkListData
                };
                records.checkLists.push(checkListDetails);
            }
        }
        console.log(`successfully fetched ${records.tasks.length} tasks and ${records.checkLists.length} checklists`);
        return records;
    } 
    catch (error) {
        console.log('Error fetching docs ====>', error);
    }
}

// Call the function to fetch records
getTasksAndCheckLists('accountId1')
    .then(result => {
        console.log(result);
        return true;
    })
    .catch(error => {
        console.error('Error fetching docs ===>', error);
        return false;
    });