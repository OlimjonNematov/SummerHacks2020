import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  View,
  Button,
  // FlatList,
} from 'react-native';

//firebase
import auth from '@react-native-firebase/auth';
import {addGoalToUserGoalCollection} from '../../../services/createGoal';
import {FlatList} from 'react-native-gesture-handler';

//the form to add a goal and handles creating the goal.
function AddGoalScreen({navigation}) {
  //hooks for goal creation
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [milestone1, setMilestone1] = useState('');
  const [milestone2, setMilestone2] = useState('');
  const [milestone3, setMilestone3] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [milestones, setMilestones] = useState([]);
  const [milestoneText, setMilestoneText] = useState('');

  //creates a goal and adds it to the database
  function addGoalHandler() {
    addGoalToUserGoalCollection(
      auth().currentUser.uid,
      title,
      description,
      milestones,
    );
    setSubmitted(true);
  }

  //sets title
  function titleHandler(enteredTitle) {
    setTitle(enteredTitle);
  }

  //sets description
  function descriptionHandler(enteredDescription) {
    setDescription(enteredDescription);
  }

  //add a milestone to array
  function addMilestone(enterText) {
    setMilestones(milestones.concat(enterText));
  }

  return (
    <SafeAreaView>
      {!submitted ? (
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Go Back because you don't know what your goal is lame-o</Text>
          </TouchableOpacity>
          <View>
            {/* title */}
            <View style={{borderWidth: 1}}>
              <TextInput
                placeholder="title"
                onChangeText={titleHandler}
                value={title}
              />
            </View>

            {/* description */}
            <View style={{borderWidth: 1}}>
              <TextInput
                placeholder="description"
                onChangeText={descriptionHandler}
                value={description}
              />
            </View>
          </View>
          {/* Display milestones added */}
          <FlatList
            data={milestones}
            renderItem={({item}) => <Text>{item}</Text>}
          />
          {/* adding a new milestone */}
          <View style={{borderWidth: 1, backgroundColor: 'pink'}}>
            <TextInput
              placeholder="add milestone"
              onChangeText={text => setMilestoneText(text)}
              ref={input => {
                this.textInput = input;
              }}
            />
            <Button
              title="+"
              onPress={() => {
                addMilestone(milestoneText);
                this.textInput.clear();
              }}
            />
          </View>

          {/* add goal Button */}
          <Button
            title="create "
            onPress={() => {
              console.log(milestones);
              addGoalHandler();
            }}
          />
        </View>
      ) : (
        //renders on successfully adding goal
        <View>
          <Text>Goal Added! This will be some confirmation text.</Text>

          <TouchableOpacity onPress={() => navigation.navigate('plusScreen')}>
            <Text>Go Back</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

export default AddGoalScreen;
