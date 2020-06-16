import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const usersCollection = firestore().collection('Users');

export const addGoalToUserGoalCollection = (
  userId,
  goalTitle,
  goalDescription,
  goalMilestones,
) => {
  //create a document with auto generated ID and add title, description and milestones.
  usersCollection
    .doc(userId)
    .collection('goals')
    .add({
      goalTitle: goalTitle,
      goalDescription: goalDescription,
      goalMilestones: goalMilestones,
      userId: userId,
    })
    .then(docRef => {
      //add the goal id to current
      usersCollection
        .doc(userId)
        .collection('goals')
        .doc(docRef.id)
        .update({goalId: docRef.id});
    });
};